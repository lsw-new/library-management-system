// 块注释内容，用于解释一组前端逻辑或功能区域。
/**
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 * 图书列表页交互
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 * - 即时搜索 / 分类切换 / 排序 / 仅显示可借
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 * - 可见性感知轮询(页面隐藏时暂停)
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 * - 图片即时加载
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 */
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function () {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const config = window.__BOOKS_CONFIG__ || {};
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const booksBaseUrl = config.booksUrl;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const booksStockUrl = config.stockUrl;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const booksCategoriesUrl = config.categoriesUrl;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const STOCK_POLL_MS = 5000;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const CATEGORY_POLL_MS = 60000;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const SEARCH_DEBOUNCE_MS = 300;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let searchForm = document.getElementById('books-search-form');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let searchInput = document.getElementById('books-search-input');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let searchTimer = null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let isComposing = false;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let activeSearchRequestId = 0;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let activeSearchController = null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let activeStockPollRequestId = 0;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let activeCategoriesPollRequestId = 0;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let pollStockInterval = null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let pollCategoriesInterval = null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let activeCategoryLink = null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let isToolbarBound = false;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let booksRefreshTimer = null;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let currentBooksSearch = normalizeSearch(searchInput ? searchInput.value : '');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let currentBooksCategory = readHiddenInput('category');

    // 定义 `normalizeSearch` 函数，封装页面交互、请求或状态更新逻辑。
    function normalizeSearch(value) {
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return (value || '').replace(/\s+/g, ' ').trim();
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `readHiddenInput` 函数，封装页面交互、请求或状态更新逻辑。
    function readHiddenInput(name) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const el = searchForm ? searchForm.querySelector(`input[name="${name}"]`) : null;
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return el ? el.value : '';
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `setHiddenInput` 函数，封装页面交互、请求或状态更新逻辑。
    function setHiddenInput(name, value) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!searchForm) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let el = searchForm.querySelector(`input[name="${name}"]`);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (value) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!el) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                el = document.createElement('input');
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                el.type = 'hidden';
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                el.name = name;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchForm.prepend(el);
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            el.value = value;
        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else if (el) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            el.remove();
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `buildBooksUrl` 函数，封装页面交互、请求或状态更新逻辑。
    function buildBooksUrl(overrides = {}) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const params = new URLSearchParams();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const search = normalizeSearch(searchInput ? searchInput.value : '');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const category = 'category' in overrides ? overrides.category : readHiddenInput('category');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const sort = 'sort' in overrides ? overrides.sort : readHiddenInput('sort');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const onlyAvailable = 'only_available' in overrides
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ? overrides.only_available
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            : readHiddenInput('only_available');

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (search) params.set('search', search);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (category) params.set('category', category);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (sort && sort !== 'newest') params.set('sort', sort);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (onlyAvailable === '1') params.set('only_available', '1');

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const qs = params.toString();
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return qs ? `${booksBaseUrl}?${qs}` : booksBaseUrl;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `buildCategoriesUrl` 函数，封装页面交互、请求或状态更新逻辑。
    function buildCategoriesUrl() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const params = new URLSearchParams();
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (currentBooksSearch) params.set('search', currentBooksSearch);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const qs = params.toString();
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return qs ? `${booksCategoriesUrl}?${qs}` : booksCategoriesUrl;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `escapeSelectorValue` 函数，封装页面交互、请求或状态更新逻辑。
    function escapeSelectorValue(value) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (window.CSS && typeof window.CSS.escape === 'function') {
            // 返回当前函数的处理结果，或提前结束前端执行流程。
            return window.CSS.escape(value);
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return value.replace(/["\\\]]/g, '\\$&');
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `commitState` 函数，封装页面交互、请求或状态更新逻辑。
    function commitState(nextSearch, nextCategory) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        currentBooksSearch = normalizeSearch(nextSearch || '');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        currentBooksCategory = nextCategory || '';
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `loadImageNow` 函数，封装页面交互、请求或状态更新逻辑。
    function loadImageNow(img) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const src = img.dataset.src;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!src) return;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        img.removeAttribute('data-src');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        img.src = src;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `bindLazyImages` 函数，封装页面交互、请求或状态更新逻辑。
    function bindLazyImages() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const images = document.querySelectorAll('img.lazy-img:not([data-bound])');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!images.length) return;
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        images.forEach(img => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            img.dataset.bound = '1';
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (img.dataset.src) loadImageNow(img);
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `bindSearchEvents` 函数，封装页面交互、请求或状态更新逻辑。
    function bindSearchEvents() {
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        searchForm = document.getElementById('books-search-form');
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        searchInput = document.getElementById('books-search-input');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!searchForm || !searchInput) return;

        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        searchForm.addEventListener('submit', (e) => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clearTimeout(searchTimer);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            submitSearch();
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        searchInput.addEventListener('input', () => {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (isComposing) return;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clearTimeout(searchTimer);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            searchTimer = setTimeout(submitSearch, SEARCH_DEBOUNCE_MS);
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        searchInput.addEventListener('compositionstart', () => { isComposing = true; });
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        searchInput.addEventListener('compositionend', () => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            isComposing = false;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clearTimeout(searchTimer);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            searchTimer = setTimeout(submitSearch, SEARCH_DEBOUNCE_MS);
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
        // 全局键盘快捷键: '/' 聚焦搜索, ESC 清空
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.addEventListener('keydown', (e) => {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (e.key === '/' && document.activeElement !== searchInput
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                e.preventDefault();
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchInput.focus();
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchInput.select();
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else if (e.key === 'Escape' && document.activeElement === searchInput && searchInput.value) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchInput.value = '';
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                clearTimeout(searchTimer);
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                submitSearch();
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `bindToolbar` 函数，封装页面交互、请求或状态更新逻辑。
    function bindToolbar() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (isToolbarBound) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const toolbar = document.getElementById('books-toolbar');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!toolbar) return;

        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        toolbar.addEventListener('click', (e) => {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const sortBtn = e.target.closest('[data-sort]');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (sortBtn) {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const nextSort = sortBtn.dataset.sort;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                setHiddenInput('sort', nextSort);
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                applyToolbarActive('sort', nextSort);
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                updateBooksView(buildBooksUrl({ sort: nextSort }), {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    historyMode: 'push',
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    animateResults: true
                // 结束前面打开的代码块、函数调用或对象结构。
                });
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const availBtn = e.target.closest('[data-toggle="only-available"]');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (availBtn) {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const isActive = availBtn.classList.toggle('is-active');
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const next = isActive ? '1' : '';
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                setHiddenInput('only_available', next);
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                updateBooksView(buildBooksUrl({ only_available: next }), {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    historyMode: 'push',
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    animateResults: true
                // 结束前面打开的代码块、函数调用或对象结构。
                });
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        isToolbarBound = true;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `applyToolbarActive` 函数，封装页面交互、请求或状态更新逻辑。
    function applyToolbarActive(name, value) {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.querySelectorAll(`[data-${name}]`).forEach(el => {
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            el.classList.toggle('is-active', el.dataset[name === 'sort' ? 'sort' : name] === value);
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `bindCategoryLinks` 函数，封装页面交互、请求或状态更新逻辑。
    function bindCategoryLinks() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const sidebar = document.getElementById('books-sidebar-content');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!sidebar || sidebar.dataset.bound) return;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        sidebar.dataset.bound = '1';

        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        sidebar.addEventListener('click', (event) => {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const link = event.target.closest('a[href*="/books"]');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!link || !sidebar.contains(link)) return;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            event.preventDefault();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clearTimeout(searchTimer);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            activeCategoryLink = link;

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextCategory = link.dataset.categoryValue || '';
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const targetUrl = new URL(link.href, window.location.origin);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextSearch = targetUrl.searchParams.get('search') || '';

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setHiddenInput('category', nextCategory);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            commitState(nextSearch, nextCategory);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            applyOptimisticCategoryState(nextCategory);

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateBooksView(buildBooksUrl({ category: nextCategory }), {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                categoryScrollPositions: getCategoryScrollPositions(),
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                historyMode: 'push',
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                animateResults: true,
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                syncSidebar: false
            // 结束前面打开的代码块、函数调用或对象结构。
            });
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `getCategoryScrollPositions` 函数，封装页面交互、请求或状态更新逻辑。
    function getCategoryScrollPositions() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const m = document.getElementById('books-mobile-categories');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const d = document.getElementById('books-desktop-categories');
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            mobileScrollLeft: m ? m.scrollLeft : 0,
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            desktopScrollTop: d ? d.scrollTop : 0
        // 结束前面打开的代码块、函数调用或对象结构。
        };
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `restoreCategoryScrollPositions` 函数，封装页面交互、请求或状态更新逻辑。
    function restoreCategoryScrollPositions(p) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const m = document.getElementById('books-mobile-categories');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const d = document.getElementById('books-desktop-categories');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (m) m.scrollLeft = p.mobileScrollLeft;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (d) d.scrollTop = p.desktopScrollTop;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `applyOptimisticCategoryState` 函数，封装页面交互、请求或状态更新逻辑。
    function applyOptimisticCategoryState(nextCategory) {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.querySelectorAll('#books-sidebar-content a[data-category-value]').forEach(link => {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const value = link.getAttribute('data-category-value') || '';
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const isActive = value === nextCategory;
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            link.classList.toggle('is-active-category', isActive);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const badge = link.querySelector('[data-category]');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (link.closest('#books-mobile-categories')) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                link.className = isActive
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    ? 'flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg border-transparent'
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    : 'flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 bg-white text-brand-deep/70 border-gray-200';
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (badge) badge.className = `px-1.5 py-0.5 ${isActive ? 'bg-white/30' : 'bg-gray-100'} text-xs font-bold rounded-full`;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (link.closest('#books-desktop-categories')) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                link.className = isActive
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    ? 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out mb-2 bg-gradient-to-r from-purple-50 to-pink-50 text-brand-primary border-brand-primary'
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    : 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out mb-2 hover:bg-pink-50/50 text-brand-deep/70 border-transparent';
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (badge) badge.className = `px-2 py-0.5 ${isActive ? 'bg-white/50' : 'bg-gray-100'} text-xs font-bold rounded-full transition-all duration-300`;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            link.className = isActive
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                ? 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out bg-gradient-to-r from-purple-50 to-pink-50 text-brand-primary border-brand-primary'
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                : 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out hover:bg-pink-50/50 text-brand-deep/70 border-transparent';
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `setResultsTransition` 函数，封装页面交互、请求或状态更新逻辑。
    function setResultsTransition(state) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const el = document.getElementById('books-results-content');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!el) return;
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        el.classList.toggle('is-results-transitioning', state);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `showSkeleton` 函数，封装页面交互、请求或状态更新逻辑。
    function showSkeleton() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const el = document.getElementById('books-results-content');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!el) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const cards = Array.from({ length: 8 }).map(() => `
            <div class="book-skeleton">
                <div class="book-skeleton-cover skeleton-shimmer"></div>
                <div class="p-4 space-y-2">
                    <div class="h-4 rounded skeleton-shimmer"></div>
                    <div class="h-3 w-2/3 rounded skeleton-shimmer"></div>
                    <div class="h-3 w-1/2 rounded skeleton-shimmer"></div>
                </div>
            </div>`).join('');
        // 写入页面内容，让界面展示最新数据或提示文案。
        el.innerHTML = `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">${cards}</div>`;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `isStaleRequest` 函数，封装页面交互、请求或状态更新逻辑。
    function isStaleRequest(id, controller) {
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return id !== activeSearchRequestId || activeSearchController !== controller;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `replaceSection` 函数，封装页面交互、请求或状态更新逻辑。
    function replaceSection(id, doc) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const cur = document.getElementById(id);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const next = doc.getElementById(id);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!cur || !next) return false;
        // 写入页面内容，让界面展示最新数据或提示文案。
        cur.innerHTML = next.innerHTML;
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return true;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `syncSidebarLinks` 函数，封装页面交互、请求或状态更新逻辑。
    function syncSidebarLinks(doc) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const cur = document.getElementById('books-sidebar-content');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const next = doc.getElementById('books-sidebar-content');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!cur || !next) return false;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const curLinks = cur.querySelectorAll('a[href*="/books"]');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const nextLinks = next.querySelectorAll('a[href*="/books"]');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (curLinks.length !== nextLinks.length) {
            // 写入页面内容，让界面展示最新数据或提示文案。
            cur.innerHTML = next.innerHTML;
            // 返回当前函数的处理结果，或提前结束前端执行流程。
            return true;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        curLinks.forEach((link, i) => {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const n = nextLinks[i];
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            link.className = n.className;
            // 写入页面内容，让界面展示最新数据或提示文案。
            link.innerHTML = n.innerHTML;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const href = n.getAttribute('href');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (href) link.setAttribute('href', href);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const cv = n.getAttribute('data-category-value');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (cv !== null) link.setAttribute('data-category-value', cv);
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            else link.removeAttribute('data-category-value');
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return true;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `updateBooksView` 函数，封装页面交互、请求或状态更新逻辑。
    async function updateBooksView(targetUrl, options = {}) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            preserveSearchSelection = false,
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            categoryScrollPositions = null,
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            historyMode = 'replace',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            syncHistory = true,
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            animateResults = false,
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            syncSidebar = true,
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showLoading = false
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } = options;

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!searchForm || !searchInput) return;

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const selectionStart = preserveSearchSelection ? searchInput.selectionStart : null;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const selectionEnd = preserveSearchSelection ? searchInput.selectionEnd : null;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const requestId = ++activeSearchRequestId;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resolved = new URL(targetUrl, window.location.origin);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const nextPath = `${resolved.pathname}${resolved.search}`;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const curPath = `${window.location.pathname}${window.location.search}`;

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (syncHistory && nextPath !== curPath) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (historyMode === 'push') window.history.pushState({}, '', nextPath);
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            else window.history.replaceState({}, '', nextPath);
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (activeSearchController) activeSearchController.abort();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const controller = new AbortController();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        activeSearchController = controller;

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (showLoading) showSkeleton();
        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
        else if (animateResults) setResultsTransition(true);

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const response = await fetch(nextPath, {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                signal: controller.signal
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!response.ok) { window.location.href = nextPath; return; }

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const html = await response.text();
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (isStaleRequest(requestId, controller)) return;

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const doc = new DOMParser().parseFromString(html, 'text/html');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (isStaleRequest(requestId, controller)) return;

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const okSummary = replaceSection('books-summary', doc);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const okToolbar = replaceSection('books-toolbar', doc);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const okResults = replaceSection('books-results-content', doc);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const okSidebar = syncSidebar ? syncSidebarLinks(doc) : true;

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!okSummary || !okResults || !okSidebar) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                window.location.href = nextPath;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextCategoryEl = doc.querySelector('#books-search-form input[name="category"]');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextSortEl = doc.querySelector('#books-search-form input[name="sort"]');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextAvailEl = doc.querySelector('#books-search-form input[name="only_available"]');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextSearchEl = doc.getElementById('books-search-input');

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const committedSearch = nextSearchEl ? nextSearchEl.value : '';
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const committedCategory = nextCategoryEl ? nextCategoryEl.value : '';
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const committedSort = nextSortEl ? nextSortEl.value : '';
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const committedAvail = nextAvailEl ? nextAvailEl.value : '';

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (nextSearchEl) searchInput.value = committedSearch;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setHiddenInput('category', committedCategory);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setHiddenInput('sort', committedSort);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setHiddenInput('only_available', committedAvail);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            commitState(committedSearch, committedCategory);

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            bindLazyImages();

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (animateResults || showLoading) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                setResultsTransition(false);
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const el = document.getElementById('books-results-content');
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (el) {
                    // 更新元素样式或状态类，驱动页面视觉状态变化。
                    el.classList.remove('animate-fade-in');
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    void el.offsetWidth;
                    // 更新元素样式或状态类，驱动页面视觉状态变化。
                    el.classList.add('animate-fade-in');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // 结束前面打开的代码块、函数调用或对象结构。
            }

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (isStaleRequest(requestId, controller)) return;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            startPolling();

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (categoryScrollPositions) restoreCategoryScrollPositions(categoryScrollPositions);

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (activeCategoryLink && activeCategoryLink.isConnected) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                activeCategoryLink.focus();
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else if (preserveSearchSelection) {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const len = searchInput.value.length;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchInput.focus();
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchInput.setSelectionRange(
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    Math.min(len, selectionStart ?? len),
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    Math.min(len, selectionEnd ?? len)
                // 结束前面打开的代码块、函数调用或对象结构。
                );
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch (error) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (error.name === 'AbortError') return;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            window.location.href = nextPath;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } finally {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (activeSearchController === controller) {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (animateResults) setResultsTransition(false);
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                activeSearchController = null;
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `submitSearch` 函数，封装页面交互、请求或状态更新逻辑。
    async function submitSearch() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!searchForm || !searchInput) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const normalized = normalizeSearch(searchInput.value);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (searchInput.value !== normalized) searchInput.value = normalized;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        activeCategoryLink = null;
        // 处理异步流程，等待接口、动画或浏览器任务完成。
        await updateBooksView(buildBooksUrl(), {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            preserveSearchSelection: true,
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            historyMode: 'replace'
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `createBorrowButton` 函数，封装页面交互、请求或状态更新逻辑。
    function createBorrowButton(bookId, bookTitle, bookStock) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const button = document.createElement('button');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.type = 'button';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookId = String(bookId);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookTitle = bookTitle;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookStock = String(bookStock);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.className = 'w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 rounded-lg transition-all duration-200 active:scale-95';
        // 写入页面内容，让界面展示最新数据或提示文案。
        button.textContent = '预约图书';
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        button.addEventListener('click', () => window.showBorrowModalFromData?.(button));
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return button;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `pollStock` 函数，封装页面交互、请求或状态更新逻辑。
    function pollStock() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const cards = document.querySelectorAll('[data-book-id][data-book-title]');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!cards.length) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const requestId = ++activeStockPollRequestId;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const ids = Array.from(new Set(Array.from(cards).map(c => c.dataset.bookId))).join(',');
        // 发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(`${booksStockUrl}?ids=${ids}`)
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(r => r.json())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (requestId !== activeStockPollRequestId) return;
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                cards.forEach(card => {
                    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const info = data[card.dataset.bookId];
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (!info) return;
                    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const stockEl = card.querySelector('[data-stock-text]');
                    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const badge = card.querySelector('.book-card-status');
                    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const actions = card.querySelector('[data-actions]');
                    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const borrowBtn = actions ? actions.querySelector('button[data-book-id]') : null;
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (stockEl) {
                        // 写入页面内容，让界面展示最新数据或提示文案。
                        stockEl.textContent = `${info.stock}/${info.total}`;
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        stockEl.className = `text-xs font-semibold ${info.stock > 0 ? 'text-emerald-600' : 'text-rose-600'}`;
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        stockEl.dataset.stockText = '';
                    // 结束前面打开的代码块、函数调用或对象结构。
                    }
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (badge) {
                        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                        const ok = info.available;
                        // 写入页面内容，让界面展示最新数据或提示文案。
                        badge.textContent = ok ? '可借阅' : '已借出';
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        badge.className = `book-card-status ${ok ? 'is-available' : 'is-unavailable'}`;
                    // 结束前面打开的代码块、函数调用或对象结构。
                    }
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (borrowBtn) {
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        borrowBtn.dataset.bookStock = String(info.stock);
                        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                        if (!info.available) borrowBtn.remove();
                    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else if (info.available && actions && card.dataset.bookTitle) {
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        actions.appendChild(createBorrowButton(card.dataset.bookId, card.dataset.bookTitle, info.stock));
                    // 结束前面打开的代码块、函数调用或对象结构。
                    }
                // 结束前面打开的代码块、函数调用或对象结构。
                });
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => {});
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `updateCount` 函数，封装页面交互、请求或状态更新逻辑。
    function updateCount(selector, n) {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.querySelectorAll(selector).forEach(el => {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const cur = parseInt(el.textContent, 10);
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (cur === n) return;
            // 写入页面内容，让界面展示最新数据或提示文案。
            el.textContent = n;
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            el.classList.add('scale-110');
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            setTimeout(() => el.classList.remove('scale-110'), 300);
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `pollCategories` 函数，封装页面交互、请求或状态更新逻辑。
    function pollCategories() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const requestId = ++activeCategoriesPollRequestId;
        // 发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(buildCategoriesUrl())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(r => r.json())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (requestId !== activeCategoriesPollRequestId) return;
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const visible = new Set(Object.keys(data.categories || {}));
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                document.querySelectorAll('#books-sidebar-content a[data-category-value]').forEach(link => {
                    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const v = link.getAttribute('data-category-value') || '';
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (!v) return;
                    // 更新元素样式或状态类，驱动页面视觉状态变化。
                    link.classList.toggle('hidden', !(visible.has(v) || v === currentBooksCategory));
                // 结束前面打开的代码块、函数调用或对象结构。
                });
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.total !== undefined) updateCount('[data-category="all"]', data.total);
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                document.querySelectorAll('#books-sidebar-content a[data-category-value]').forEach(link => {
                    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const v = link.getAttribute('data-category-value') || '';
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (!v || Object.prototype.hasOwnProperty.call(data.categories || {}, v)) return;
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    updateCount(`[data-category="${escapeSelectorValue(v)}"]`, 0);
                // 结束前面打开的代码块、函数调用或对象结构。
                });
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                Object.entries(data.categories || {}).forEach(([cat, count]) => {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    updateCount(`[data-category="${escapeSelectorValue(cat)}"]`, count);
                // 结束前面打开的代码块、函数调用或对象结构。
                });
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => {});
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `startPolling` 函数，封装页面交互、请求或状态更新逻辑。
    function startPolling() {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        stopPolling();
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!document.hidden) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            pollStockInterval = setInterval(pollStock, STOCK_POLL_MS);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            pollCategoriesInterval = setInterval(pollCategories, CATEGORY_POLL_MS);
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `scheduleBooksRefresh` 函数，封装页面交互、请求或状态更新逻辑。
    function scheduleBooksRefresh() {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        clearTimeout(booksRefreshTimer);
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        booksRefreshTimer = setTimeout(() => {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (document.hidden) return;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateBooksView(window.location.href, {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                syncHistory: false,
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                animateResults: false,
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                showLoading: false
            // 结束前面打开的代码块、函数调用或对象结构。
            });
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        }, 200);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `stopPolling` 函数，封装页面交互、请求或状态更新逻辑。
    function stopPolling() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (pollStockInterval) { clearInterval(pollStockInterval); pollStockInterval = null; }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (pollCategoriesInterval) { clearInterval(pollCategoriesInterval); pollCategoriesInterval = null; }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    document.addEventListener('visibilitychange', () => {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            stopPolling();
        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            pollStock();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            pollCategories();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            startPolling();
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    window.addEventListener('popstate', () => {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        activeCategoryLink = null;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        clearTimeout(searchTimer);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const url = new URL(window.location.href);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const nextCategory = url.searchParams.get('category') || '';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        searchInput.value = url.searchParams.get('search') || '';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setHiddenInput('category', nextCategory);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setHiddenInput('sort', url.searchParams.get('sort') || '');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setHiddenInput('only_available', url.searchParams.get('only_available') || '');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        applyOptimisticCategoryState(nextCategory);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        updateBooksView(window.location.href, {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            categoryScrollPositions: getCategoryScrollPositions(),
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            syncHistory: false
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 定义 `bindPagination` 函数，封装页面交互、请求或状态更新逻辑。
    function bindPagination() {
        // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
        // 委托：监听结果区域内分页链接，使用 AJAX 局部刷新而非整页跳转
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.addEventListener('click', (event) => {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const link = event.target.closest('a[href]');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!link) return;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resultsRoot = document.getElementById('books-results-content');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!resultsRoot || !resultsRoot.contains(link)) return;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nav = link.closest('nav');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!nav) return;

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const targetUrl = new URL(link.href, window.location.origin);
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (targetUrl.pathname !== window.location.pathname) return;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!targetUrl.searchParams.has('page')) return;

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            event.preventDefault();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const savedScrollY = window.scrollY;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateBooksView(targetUrl.toString(), {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                historyMode: 'push',
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                animateResults: true,
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            }).then(() => {
                // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
                // 保持点击前的滚动位置，避免页面跳动
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                window.scrollTo({ top: savedScrollY, behavior: 'instant' });
            // 结束前面打开的代码块、函数调用或对象结构。
            });
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `handleStockPush` 函数，封装页面交互、请求或状态更新逻辑。
    function handleStockPush(info) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!info || !info.book_id) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var cards = document.querySelectorAll('[data-book-id="' + info.book_id + '"][data-book-title]');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var matchedCards = cards.length;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        cards.forEach(function(card) {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var stockEl = card.querySelector('[data-stock-text]');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var badge = card.querySelector('.book-card-status');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var actions = card.querySelector('[data-actions]');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var borrowBtn = actions ? actions.querySelector('button[data-book-id]') : null;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (stockEl) {
                // 写入页面内容，让界面展示最新数据或提示文案。
                stockEl.textContent = info.stock + '/' + info.total;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                stockEl.className = 'text-xs font-semibold ' + (info.stock > 0 ? 'text-emerald-600' : 'text-rose-600');
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                stockEl.dataset.stockText = '';
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (badge) {
                // 写入页面内容，让界面展示最新数据或提示文案。
                badge.textContent = info.available ? '可借阅' : '已借出';
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                badge.className = 'book-card-status ' + (info.available ? 'is-available' : 'is-unavailable');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (borrowBtn) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                borrowBtn.dataset.bookStock = String(info.stock);
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (!info.available) borrowBtn.remove();
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else if (info.available && actions && card.dataset.bookTitle) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                actions.appendChild(createBorrowButton(info.book_id, card.dataset.bookTitle, info.stock));
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (matchedCards && readHiddenInput('only_available') === '1' && !info.available) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            scheduleBooksRefresh();
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:book-stock-changed', function(event) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        handleStockPush(event.detail);
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:book-catalog-changed', function() {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        pollCategories();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        scheduleBooksRefresh();
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindSearchEvents();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindCategoryLinks();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindToolbar();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindLazyImages();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindPagination();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    startPolling();
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
