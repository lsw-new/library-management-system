/**
 * 图书列表页交互
 * - 即时搜索 / 分类切换 / 排序 / 仅显示可借
 * - 可见性感知轮询(页面隐藏时暂停)
 * - 图片即时加载
 */
(function () {
    const config = window.__BOOKS_CONFIG__ || {};
    const booksBaseUrl = config.booksUrl;
    const booksStockUrl = config.stockUrl;
    const booksCategoriesUrl = config.categoriesUrl;

    const STOCK_POLL_MS = 120000;
    const CATEGORY_POLL_MS = 120000;
    const SEARCH_DEBOUNCE_MS = 300;

    let searchForm = document.getElementById('books-search-form');
    let searchInput = document.getElementById('books-search-input');
    let searchTimer = null;
    let isComposing = false;
    let activeSearchRequestId = 0;
    let activeSearchController = null;
    let activeStockPollRequestId = 0;
    let activeCategoriesPollRequestId = 0;
    let pollStockInterval = null;
    let pollCategoriesInterval = null;
    let activeCategoryLink = null;
    let isToolbarBound = false;

    let currentBooksSearch = normalizeSearch(searchInput ? searchInput.value : '');
    let currentBooksCategory = readHiddenInput('category');

    function normalizeSearch(value) {
        return (value || '').replace(/\s+/g, ' ').trim();
    }

    function readHiddenInput(name) {
        const el = searchForm ? searchForm.querySelector(`input[name="${name}"]`) : null;
        return el ? el.value : '';
    }

    function setHiddenInput(name, value) {
        if (!searchForm) return;
        let el = searchForm.querySelector(`input[name="${name}"]`);
        if (value) {
            if (!el) {
                el = document.createElement('input');
                el.type = 'hidden';
                el.name = name;
                searchForm.prepend(el);
            }
            el.value = value;
        } else if (el) {
            el.remove();
        }
    }

    function buildBooksUrl(overrides = {}) {
        const params = new URLSearchParams();
        const search = normalizeSearch(searchInput ? searchInput.value : '');
        const category = 'category' in overrides ? overrides.category : readHiddenInput('category');
        const sort = 'sort' in overrides ? overrides.sort : readHiddenInput('sort');
        const onlyAvailable = 'only_available' in overrides
            ? overrides.only_available
            : readHiddenInput('only_available');

        if (search) params.set('search', search);
        if (category) params.set('category', category);
        if (sort && sort !== 'newest') params.set('sort', sort);
        if (onlyAvailable === '1') params.set('only_available', '1');

        const qs = params.toString();
        return qs ? `${booksBaseUrl}?${qs}` : booksBaseUrl;
    }

    function buildCategoriesUrl() {
        const params = new URLSearchParams();
        if (currentBooksSearch) params.set('search', currentBooksSearch);
        const qs = params.toString();
        return qs ? `${booksCategoriesUrl}?${qs}` : booksCategoriesUrl;
    }

    function escapeSelectorValue(value) {
        if (window.CSS && typeof window.CSS.escape === 'function') {
            return window.CSS.escape(value);
        }
        return value.replace(/["\\\]]/g, '\\$&');
    }

    function commitState(nextSearch, nextCategory) {
        currentBooksSearch = normalizeSearch(nextSearch || '');
        currentBooksCategory = nextCategory || '';
    }

    function loadImageNow(img) {
        const src = img.dataset.src;
        if (!src) return;
        img.removeAttribute('data-src');
        img.src = src;
    }

    function bindLazyImages() {
        const images = document.querySelectorAll('img.lazy-img:not([data-bound])');
        if (!images.length) return;
        images.forEach(img => {
            img.dataset.bound = '1';
            if (img.dataset.src) loadImageNow(img);
        });
    }

    function bindSearchEvents() {
        searchForm = document.getElementById('books-search-form');
        searchInput = document.getElementById('books-search-input');
        if (!searchForm || !searchInput) return;

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            clearTimeout(searchTimer);
            submitSearch();
        });
        searchInput.addEventListener('input', () => {
            if (isComposing) return;
            clearTimeout(searchTimer);
            searchTimer = setTimeout(submitSearch, SEARCH_DEBOUNCE_MS);
        });
        searchInput.addEventListener('compositionstart', () => { isComposing = true; });
        searchInput.addEventListener('compositionend', () => {
            isComposing = false;
            clearTimeout(searchTimer);
            searchTimer = setTimeout(submitSearch, SEARCH_DEBOUNCE_MS);
        });

        // 全局键盘快捷键: '/' 聚焦搜索, ESC 清空
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== searchInput
                && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
            } else if (e.key === 'Escape' && document.activeElement === searchInput && searchInput.value) {
                searchInput.value = '';
                clearTimeout(searchTimer);
                submitSearch();
            }
        });
    }

    function bindToolbar() {
        if (isToolbarBound) return;
        const toolbar = document.getElementById('books-toolbar');
        if (!toolbar) return;

        toolbar.addEventListener('click', (e) => {
            const sortBtn = e.target.closest('[data-sort]');
            if (sortBtn) {
                const nextSort = sortBtn.dataset.sort;
                setHiddenInput('sort', nextSort);
                applyToolbarActive('sort', nextSort);
                updateBooksView(buildBooksUrl({ sort: nextSort }), {
                    historyMode: 'push',
                    animateResults: true
                });
                return;
            }
            const availBtn = e.target.closest('[data-toggle="only-available"]');
            if (availBtn) {
                const isActive = availBtn.classList.toggle('is-active');
                const next = isActive ? '1' : '';
                setHiddenInput('only_available', next);
                updateBooksView(buildBooksUrl({ only_available: next }), {
                    historyMode: 'push',
                    animateResults: true
                });
            }
        });

        isToolbarBound = true;
    }

    function applyToolbarActive(name, value) {
        document.querySelectorAll(`[data-${name}]`).forEach(el => {
            el.classList.toggle('is-active', el.dataset[name === 'sort' ? 'sort' : name] === value);
        });
    }

    function bindCategoryLinks() {
        const sidebar = document.getElementById('books-sidebar-content');
        if (!sidebar || sidebar.dataset.bound) return;
        sidebar.dataset.bound = '1';

        sidebar.addEventListener('click', (event) => {
            const link = event.target.closest('a[href*="/books"]');
            if (!link || !sidebar.contains(link)) return;
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

            event.preventDefault();
            clearTimeout(searchTimer);
            activeCategoryLink = link;

            const nextCategory = link.dataset.categoryValue || '';
            const targetUrl = new URL(link.href, window.location.origin);
            const nextSearch = targetUrl.searchParams.get('search') || '';

            setHiddenInput('category', nextCategory);
            commitState(nextSearch, nextCategory);
            applyOptimisticCategoryState(nextCategory);

            updateBooksView(buildBooksUrl({ category: nextCategory }), {
                categoryScrollPositions: getCategoryScrollPositions(),
                historyMode: 'push',
                animateResults: true,
                syncSidebar: false
            });
        });
    }

    function getCategoryScrollPositions() {
        const m = document.getElementById('books-mobile-categories');
        const d = document.getElementById('books-desktop-categories');
        return {
            mobileScrollLeft: m ? m.scrollLeft : 0,
            desktopScrollTop: d ? d.scrollTop : 0
        };
    }

    function restoreCategoryScrollPositions(p) {
        const m = document.getElementById('books-mobile-categories');
        const d = document.getElementById('books-desktop-categories');
        if (m) m.scrollLeft = p.mobileScrollLeft;
        if (d) d.scrollTop = p.desktopScrollTop;
    }

    function applyOptimisticCategoryState(nextCategory) {
        document.querySelectorAll('#books-sidebar-content a[data-category-value]').forEach(link => {
            const value = link.getAttribute('data-category-value') || '';
            const isActive = value === nextCategory;
            link.classList.toggle('is-active-category', isActive);
            const badge = link.querySelector('[data-category]');
            if (link.closest('#books-mobile-categories')) {
                link.className = isActive
                    ? 'flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg border-transparent'
                    : 'flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 bg-white text-brand-deep/70 border-gray-200';
                if (badge) badge.className = `px-1.5 py-0.5 ${isActive ? 'bg-white/30' : 'bg-gray-100'} text-xs font-bold rounded-full`;
                return;
            }
            if (link.closest('#books-desktop-categories')) {
                link.className = isActive
                    ? 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out mb-2 bg-gradient-to-r from-purple-50 to-pink-50 text-brand-primary border-brand-primary'
                    : 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out mb-2 hover:bg-pink-50/50 text-brand-deep/70 border-transparent';
                if (badge) badge.className = `px-2 py-0.5 ${isActive ? 'bg-white/50' : 'bg-gray-100'} text-xs font-bold rounded-full transition-all duration-300`;
                return;
            }
            link.className = isActive
                ? 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out bg-gradient-to-r from-purple-50 to-pink-50 text-brand-primary border-brand-primary'
                : 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out hover:bg-pink-50/50 text-brand-deep/70 border-transparent';
        });
    }

    function setResultsTransition(state) {
        const el = document.getElementById('books-results-content');
        if (!el) return;
        el.classList.toggle('is-results-transitioning', state);
    }

    function showSkeleton() {
        const el = document.getElementById('books-results-content');
        if (!el) return;
        const cards = Array.from({ length: 8 }).map(() => `
            <div class="book-skeleton">
                <div class="book-skeleton-cover skeleton-shimmer"></div>
                <div class="p-4 space-y-2">
                    <div class="h-4 rounded skeleton-shimmer"></div>
                    <div class="h-3 w-2/3 rounded skeleton-shimmer"></div>
                    <div class="h-3 w-1/2 rounded skeleton-shimmer"></div>
                </div>
            </div>`).join('');
        el.innerHTML = `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">${cards}</div>`;
    }

    function isStaleRequest(id, controller) {
        return id !== activeSearchRequestId || activeSearchController !== controller;
    }

    function replaceSection(id, doc) {
        const cur = document.getElementById(id);
        const next = doc.getElementById(id);
        if (!cur || !next) return false;
        cur.innerHTML = next.innerHTML;
        return true;
    }

    function syncSidebarLinks(doc) {
        const cur = document.getElementById('books-sidebar-content');
        const next = doc.getElementById('books-sidebar-content');
        if (!cur || !next) return false;
        const curLinks = cur.querySelectorAll('a[href*="/books"]');
        const nextLinks = next.querySelectorAll('a[href*="/books"]');
        if (curLinks.length !== nextLinks.length) {
            cur.innerHTML = next.innerHTML;
            return true;
        }
        curLinks.forEach((link, i) => {
            const n = nextLinks[i];
            link.className = n.className;
            link.innerHTML = n.innerHTML;
            const href = n.getAttribute('href');
            if (href) link.setAttribute('href', href);
            const cv = n.getAttribute('data-category-value');
            if (cv !== null) link.setAttribute('data-category-value', cv);
            else link.removeAttribute('data-category-value');
        });
        return true;
    }

    async function updateBooksView(targetUrl, options = {}) {
        const {
            preserveSearchSelection = false,
            categoryScrollPositions = null,
            historyMode = 'replace',
            syncHistory = true,
            animateResults = false,
            syncSidebar = true,
            showLoading = false
        } = options;

        if (!searchForm || !searchInput) return;

        const selectionStart = preserveSearchSelection ? searchInput.selectionStart : null;
        const selectionEnd = preserveSearchSelection ? searchInput.selectionEnd : null;
        const requestId = ++activeSearchRequestId;
        const resolved = new URL(targetUrl, window.location.origin);
        const nextPath = `${resolved.pathname}${resolved.search}`;
        const curPath = `${window.location.pathname}${window.location.search}`;

        if (syncHistory && nextPath !== curPath) {
            if (historyMode === 'push') window.history.pushState({}, '', nextPath);
            else window.history.replaceState({}, '', nextPath);
        }

        if (activeSearchController) activeSearchController.abort();
        const controller = new AbortController();
        activeSearchController = controller;

        if (showLoading) showSkeleton();
        else if (animateResults) setResultsTransition(true);

        try {
            const response = await fetch(nextPath, {
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                signal: controller.signal
            });
            if (!response.ok) { window.location.href = nextPath; return; }

            const html = await response.text();
            if (isStaleRequest(requestId, controller)) return;

            const doc = new DOMParser().parseFromString(html, 'text/html');
            if (isStaleRequest(requestId, controller)) return;

            const okSummary = replaceSection('books-summary', doc);
            const okToolbar = replaceSection('books-toolbar', doc);
            const okResults = replaceSection('books-results-content', doc);
            const okSidebar = syncSidebar ? syncSidebarLinks(doc) : true;

            if (!okSummary || !okResults || !okSidebar) {
                window.location.href = nextPath;
                return;
            }
            const nextCategoryEl = doc.querySelector('#books-search-form input[name="category"]');
            const nextSortEl = doc.querySelector('#books-search-form input[name="sort"]');
            const nextAvailEl = doc.querySelector('#books-search-form input[name="only_available"]');
            const nextSearchEl = doc.getElementById('books-search-input');

            const committedSearch = nextSearchEl ? nextSearchEl.value : '';
            const committedCategory = nextCategoryEl ? nextCategoryEl.value : '';
            const committedSort = nextSortEl ? nextSortEl.value : '';
            const committedAvail = nextAvailEl ? nextAvailEl.value : '';

            if (nextSearchEl) searchInput.value = committedSearch;
            setHiddenInput('category', committedCategory);
            setHiddenInput('sort', committedSort);
            setHiddenInput('only_available', committedAvail);
            commitState(committedSearch, committedCategory);

            bindLazyImages();

            if (animateResults || showLoading) {
                setResultsTransition(false);
                const el = document.getElementById('books-results-content');
                if (el) {
                    el.classList.remove('animate-fade-in');
                    void el.offsetWidth;
                    el.classList.add('animate-fade-in');
                }
            }

            if (isStaleRequest(requestId, controller)) return;
            startPolling();

            if (categoryScrollPositions) restoreCategoryScrollPositions(categoryScrollPositions);

            if (activeCategoryLink && activeCategoryLink.isConnected) {
                activeCategoryLink.focus();
            } else if (preserveSearchSelection) {
                const len = searchInput.value.length;
                searchInput.focus();
                searchInput.setSelectionRange(
                    Math.min(len, selectionStart ?? len),
                    Math.min(len, selectionEnd ?? len)
                );
            }
        } catch (error) {
            if (error.name === 'AbortError') return;
            window.location.href = nextPath;
        } finally {
            if (activeSearchController === controller) {
                if (animateResults) setResultsTransition(false);
                activeSearchController = null;
            }
        }
    }

    async function submitSearch() {
        if (!searchForm || !searchInput) return;
        const normalized = normalizeSearch(searchInput.value);
        if (searchInput.value !== normalized) searchInput.value = normalized;
        activeCategoryLink = null;
        await updateBooksView(buildBooksUrl(), {
            preserveSearchSelection: true,
            historyMode: 'replace'
        });
    }

    function createBorrowButton(bookId, bookTitle, bookStock) {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.bookId = String(bookId);
        button.dataset.bookTitle = bookTitle;
        button.dataset.bookStock = String(bookStock);
        button.className = 'w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 rounded-lg transition-all duration-200 active:scale-95';
        button.textContent = '预约图书';
        button.addEventListener('click', () => window.showBorrowModalFromData?.(button));
        return button;
    }

    function pollStock() {
        if (document.hidden) return;
        const cards = document.querySelectorAll('[data-book-id][data-book-title]');
        if (!cards.length) return;
        const requestId = ++activeStockPollRequestId;
        const ids = Array.from(new Set(Array.from(cards).map(c => c.dataset.bookId))).join(',');
        fetch(`${booksStockUrl}?ids=${ids}`)
            .then(r => r.json())
            .then(data => {
                if (requestId !== activeStockPollRequestId) return;
                cards.forEach(card => {
                    const info = data[card.dataset.bookId];
                    if (!info) return;
                    const stockEl = card.querySelector('[data-stock-text]');
                    const badge = card.querySelector('.book-card-status');
                    const actions = card.querySelector('[data-actions]');
                    const borrowBtn = actions ? actions.querySelector('button[data-book-id]') : null;
                    if (stockEl) {
                        stockEl.textContent = `${info.stock}/${info.total}`;
                        stockEl.className = `text-xs font-semibold ${info.stock > 0 ? 'text-emerald-600' : 'text-rose-600'}`;
                        stockEl.dataset.stockText = '';
                    }
                    if (badge) {
                        const ok = info.available;
                        badge.textContent = ok ? '可借阅' : '已借出';
                        badge.className = `book-card-status ${ok ? 'is-available' : 'is-unavailable'}`;
                    }
                    if (borrowBtn) {
                        borrowBtn.dataset.bookStock = String(info.stock);
                        if (!info.available) borrowBtn.remove();
                    } else if (info.available && actions && card.dataset.bookTitle) {
                        actions.appendChild(createBorrowButton(card.dataset.bookId, card.dataset.bookTitle, info.stock));
                    }
                });
            })
            .catch(() => {});
    }

    function updateCount(selector, n) {
        document.querySelectorAll(selector).forEach(el => {
            const cur = parseInt(el.textContent, 10);
            if (cur === n) return;
            el.textContent = n;
            el.classList.add('scale-110');
            setTimeout(() => el.classList.remove('scale-110'), 300);
        });
    }

    function pollCategories() {
        if (document.hidden) return;
        const requestId = ++activeCategoriesPollRequestId;
        fetch(buildCategoriesUrl())
            .then(r => r.json())
            .then(data => {
                if (requestId !== activeCategoriesPollRequestId) return;
                const visible = new Set(Object.keys(data.categories || {}));
                document.querySelectorAll('#books-sidebar-content a[data-category-value]').forEach(link => {
                    const v = link.getAttribute('data-category-value') || '';
                    if (!v) return;
                    link.classList.toggle('hidden', !(visible.has(v) || v === currentBooksCategory));
                });
                if (data.total !== undefined) updateCount('[data-category="all"]', data.total);
                document.querySelectorAll('#books-sidebar-content a[data-category-value]').forEach(link => {
                    const v = link.getAttribute('data-category-value') || '';
                    if (!v || Object.prototype.hasOwnProperty.call(data.categories || {}, v)) return;
                    updateCount(`[data-category="${escapeSelectorValue(v)}"]`, 0);
                });
                Object.entries(data.categories || {}).forEach(([cat, count]) => {
                    updateCount(`[data-category="${escapeSelectorValue(cat)}"]`, count);
                });
            })
            .catch(() => {});
    }

    function startPolling() {
        stopPolling();
        if (!document.hidden) {
            pollStockInterval = setInterval(pollStock, STOCK_POLL_MS);
            pollCategoriesInterval = setInterval(pollCategories, CATEGORY_POLL_MS);
        }
    }

    function stopPolling() {
        if (pollStockInterval) { clearInterval(pollStockInterval); pollStockInterval = null; }
        if (pollCategoriesInterval) { clearInterval(pollCategoriesInterval); pollCategoriesInterval = null; }
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopPolling();
        } else {
            pollStock();
            pollCategories();
            startPolling();
        }
    });

    window.addEventListener('popstate', () => {
        activeCategoryLink = null;
        clearTimeout(searchTimer);
        const url = new URL(window.location.href);
        const nextCategory = url.searchParams.get('category') || '';
        searchInput.value = url.searchParams.get('search') || '';
        setHiddenInput('category', nextCategory);
        setHiddenInput('sort', url.searchParams.get('sort') || '');
        setHiddenInput('only_available', url.searchParams.get('only_available') || '');
        applyOptimisticCategoryState(nextCategory);
        updateBooksView(window.location.href, {
            categoryScrollPositions: getCategoryScrollPositions(),
            syncHistory: false
        });
    });

    function bindPagination() {
        // 委托：监听结果区域内分页链接，使用 AJAX 局部刷新而非整页跳转
        document.addEventListener('click', (event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
            const link = event.target.closest('a[href]');
            if (!link) return;
            const resultsRoot = document.getElementById('books-results-content');
            if (!resultsRoot || !resultsRoot.contains(link)) return;
            const nav = link.closest('nav');
            if (!nav) return;

            const targetUrl = new URL(link.href, window.location.origin);
            if (targetUrl.pathname !== window.location.pathname) return;
            if (!targetUrl.searchParams.has('page')) return;

            event.preventDefault();
            const savedScrollY = window.scrollY;
            updateBooksView(targetUrl.toString(), {
                historyMode: 'push',
                animateResults: true,
            }).then(() => {
                // 保持点击前的滚动位置，避免页面跳动
                window.scrollTo({ top: savedScrollY, behavior: 'instant' });
            });
        });
    }

    function handleStockPush(info) {
        if (!info || !info.book_id) return;
        var cards = document.querySelectorAll('[data-book-id="' + info.book_id + '"][data-book-title]');
        cards.forEach(function(card) {
            var stockEl = card.querySelector('[data-stock-text]');
            var badge = card.querySelector('.book-card-status');
            var actions = card.querySelector('[data-actions]');
            var borrowBtn = actions ? actions.querySelector('button[data-book-id]') : null;
            if (stockEl) {
                stockEl.textContent = info.stock + '/' + info.total;
                stockEl.className = 'text-xs font-semibold ' + (info.stock > 0 ? 'text-emerald-600' : 'text-rose-600');
                stockEl.dataset.stockText = '';
            }
            if (badge) {
                badge.textContent = info.available ? '可借阅' : '已借出';
                badge.className = 'book-card-status ' + (info.available ? 'is-available' : 'is-unavailable');
            }
            if (borrowBtn) {
                borrowBtn.dataset.bookStock = String(info.stock);
                if (!info.available) borrowBtn.remove();
            } else if (info.available && actions && card.dataset.bookTitle) {
                actions.appendChild(createBorrowButton(info.book_id, card.dataset.bookTitle, info.stock));
            }
        });
    }

    var socket = window._socket;
    if (socket) {
        socket.emit('join_books_room');
        socket.on('book_stock_changed', handleStockPush);
    }

    bindSearchEvents();
    bindCategoryLinks();
    bindToolbar();
    bindLazyImages();
    bindPagination();
    startPolling();
})();
