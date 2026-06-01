// 逐行注释：块注释内容，用于解释一组前端逻辑或功能区域。
/**
 // 逐行注释：块注释内容，用于解释一组前端逻辑或功能区域。
 * 图书列表页交互
 // 逐行注释：块注释内容，用于解释一组前端逻辑或功能区域。
 * - 即时搜索 / 分类切换 / 排序 / 仅显示可借
 // 逐行注释：块注释内容，用于解释一组前端逻辑或功能区域。
 * - 可见性感知轮询(页面隐藏时暂停)
 // 逐行注释：块注释内容，用于解释一组前端逻辑或功能区域。
 * - 图片即时加载
 // 逐行注释：块注释内容，用于解释一组前端逻辑或功能区域。
 */
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function () {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const config = window.__BOOKS_CONFIG__ || {};
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const booksBaseUrl = config.booksUrl;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const booksStockUrl = config.stockUrl;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const booksCategoriesUrl = config.categoriesUrl;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const STOCK_POLL_MS = 5000;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const CATEGORY_POLL_MS = 60000;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const SEARCH_DEBOUNCE_MS = 300;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let searchForm = document.getElementById('books-search-form');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let searchInput = document.getElementById('books-search-input');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let searchTimer = null;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let isComposing = false;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let activeSearchRequestId = 0;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let activeSearchController = null;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let activeStockPollRequestId = 0;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let activeCategoriesPollRequestId = 0;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let pollStockInterval = null;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let pollCategoriesInterval = null;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let activeCategoryLink = null;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let isToolbarBound = false;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let booksRefreshTimer = null;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let currentBooksSearch = normalizeSearch(searchInput ? searchInput.value : '');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let currentBooksCategory = readHiddenInput('category');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `normalizeSearch` 函数，封装页面交互、请求或状态更新逻辑。
    function normalizeSearch(value) {
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return (value || '').replace(/\s+/g, ' ').trim();
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `readHiddenInput` 函数，封装页面交互、请求或状态更新逻辑。
    function readHiddenInput(name) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const el = searchForm ? searchForm.querySelector(`input[name="${name}"]`) : null;
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return el ? el.value : '';
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `setHiddenInput` 函数，封装页面交互、请求或状态更新逻辑。
    function setHiddenInput(name, value) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!searchForm) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let el = searchForm.querySelector(`input[name="${name}"]`);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (value) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!el) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                el = document.createElement('input');
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                el.type = 'hidden';
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                el.name = name;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchForm.prepend(el);
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            el.value = value;
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else if (el) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            el.remove();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `buildBooksUrl` 函数，封装页面交互、请求或状态更新逻辑。
    function buildBooksUrl(overrides = {}) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const params = new URLSearchParams();
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const search = normalizeSearch(searchInput ? searchInput.value : '');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const category = 'category' in overrides ? overrides.category : readHiddenInput('category');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const sort = 'sort' in overrides ? overrides.sort : readHiddenInput('sort');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const onlyAvailable = 'only_available' in overrides
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ? overrides.only_available
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            : readHiddenInput('only_available');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (search) params.set('search', search);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (category) params.set('category', category);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (sort && sort !== 'newest') params.set('sort', sort);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (onlyAvailable === '1') params.set('only_available', '1');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const qs = params.toString();
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return qs ? `${booksBaseUrl}?${qs}` : booksBaseUrl;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `buildCategoriesUrl` 函数，封装页面交互、请求或状态更新逻辑。
    function buildCategoriesUrl() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const params = new URLSearchParams();
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (currentBooksSearch) params.set('search', currentBooksSearch);
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const qs = params.toString();
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return qs ? `${booksCategoriesUrl}?${qs}` : booksCategoriesUrl;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `escapeSelectorValue` 函数，封装页面交互、请求或状态更新逻辑。
    function escapeSelectorValue(value) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (window.CSS && typeof window.CSS.escape === 'function') {
            // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
            return window.CSS.escape(value);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return value.replace(/["\\\]]/g, '\\$&');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `commitState` 函数，封装页面交互、请求或状态更新逻辑。
    function commitState(nextSearch, nextCategory) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        currentBooksSearch = normalizeSearch(nextSearch || '');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        currentBooksCategory = nextCategory || '';
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `loadImageNow` 函数，封装页面交互、请求或状态更新逻辑。
    function loadImageNow(img) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const src = img.dataset.src;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!src) return;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        img.removeAttribute('data-src');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        img.src = src;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `bindLazyImages` 函数，封装页面交互、请求或状态更新逻辑。
    function bindLazyImages() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const images = document.querySelectorAll('img.lazy-img:not([data-bound])');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!images.length) return;
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        images.forEach(img => {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            img.dataset.bound = '1';
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (img.dataset.src) loadImageNow(img);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `bindSearchEvents` 函数，封装页面交互、请求或状态更新逻辑。
    function bindSearchEvents() {
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        searchForm = document.getElementById('books-search-form');
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        searchInput = document.getElementById('books-search-input');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!searchForm || !searchInput) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        searchForm.addEventListener('submit', (e) => {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clearTimeout(searchTimer);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            submitSearch();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        searchInput.addEventListener('input', () => {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (isComposing) return;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clearTimeout(searchTimer);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            searchTimer = setTimeout(submitSearch, SEARCH_DEBOUNCE_MS);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        searchInput.addEventListener('compositionstart', () => { isComposing = true; });
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        searchInput.addEventListener('compositionend', () => {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            isComposing = false;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clearTimeout(searchTimer);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            searchTimer = setTimeout(submitSearch, SEARCH_DEBOUNCE_MS);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
        // 全局键盘快捷键: '/' 聚焦搜索, ESC 清空
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.addEventListener('keydown', (e) => {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (e.key === '/' && document.activeElement !== searchInput
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                e.preventDefault();
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchInput.focus();
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchInput.select();
            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else if (e.key === 'Escape' && document.activeElement === searchInput && searchInput.value) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchInput.value = '';
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                clearTimeout(searchTimer);
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                submitSearch();
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `bindToolbar` 函数，封装页面交互、请求或状态更新逻辑。
    function bindToolbar() {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (isToolbarBound) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const toolbar = document.getElementById('books-toolbar');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!toolbar) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        toolbar.addEventListener('click', (e) => {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const sortBtn = e.target.closest('[data-sort]');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (sortBtn) {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const nextSort = sortBtn.dataset.sort;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                setHiddenInput('sort', nextSort);
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                applyToolbarActive('sort', nextSort);
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                updateBooksView(buildBooksUrl({ sort: nextSort }), {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    historyMode: 'push',
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    animateResults: true
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                });
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const availBtn = e.target.closest('[data-toggle="only-available"]');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (availBtn) {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const isActive = availBtn.classList.toggle('is-active');
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const next = isActive ? '1' : '';
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                setHiddenInput('only_available', next);
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                updateBooksView(buildBooksUrl({ only_available: next }), {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    historyMode: 'push',
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    animateResults: true
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                });
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        isToolbarBound = true;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `applyToolbarActive` 函数，封装页面交互、请求或状态更新逻辑。
    function applyToolbarActive(name, value) {
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.querySelectorAll(`[data-${name}]`).forEach(el => {
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            el.classList.toggle('is-active', el.dataset[name === 'sort' ? 'sort' : name] === value);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `bindCategoryLinks` 函数，封装页面交互、请求或状态更新逻辑。
    function bindCategoryLinks() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const sidebar = document.getElementById('books-sidebar-content');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!sidebar || sidebar.dataset.bound) return;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        sidebar.dataset.bound = '1';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        sidebar.addEventListener('click', (event) => {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const link = event.target.closest('a[href*="/books"]');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!link || !sidebar.contains(link)) return;
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            event.preventDefault();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clearTimeout(searchTimer);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            activeCategoryLink = link;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextCategory = link.dataset.categoryValue || '';
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const targetUrl = new URL(link.href, window.location.origin);
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextSearch = targetUrl.searchParams.get('search') || '';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setHiddenInput('category', nextCategory);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            commitState(nextSearch, nextCategory);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            applyOptimisticCategoryState(nextCategory);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateBooksView(buildBooksUrl({ category: nextCategory }), {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                categoryScrollPositions: getCategoryScrollPositions(),
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                historyMode: 'push',
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                animateResults: true,
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                syncSidebar: false
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `getCategoryScrollPositions` 函数，封装页面交互、请求或状态更新逻辑。
    function getCategoryScrollPositions() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const m = document.getElementById('books-mobile-categories');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const d = document.getElementById('books-desktop-categories');
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            mobileScrollLeft: m ? m.scrollLeft : 0,
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            desktopScrollTop: d ? d.scrollTop : 0
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        };
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `restoreCategoryScrollPositions` 函数，封装页面交互、请求或状态更新逻辑。
    function restoreCategoryScrollPositions(p) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const m = document.getElementById('books-mobile-categories');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const d = document.getElementById('books-desktop-categories');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (m) m.scrollLeft = p.mobileScrollLeft;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (d) d.scrollTop = p.desktopScrollTop;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `applyOptimisticCategoryState` 函数，封装页面交互、请求或状态更新逻辑。
    function applyOptimisticCategoryState(nextCategory) {
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.querySelectorAll('#books-sidebar-content a[data-category-value]').forEach(link => {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const value = link.getAttribute('data-category-value') || '';
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const isActive = value === nextCategory;
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            link.classList.toggle('is-active-category', isActive);
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const badge = link.querySelector('[data-category]');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (link.closest('#books-mobile-categories')) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                link.className = isActive
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    ? 'flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg border-transparent'
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    : 'flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 bg-white text-brand-deep/70 border-gray-200';
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (badge) badge.className = `px-1.5 py-0.5 ${isActive ? 'bg-white/30' : 'bg-gray-100'} text-xs font-bold rounded-full`;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (link.closest('#books-desktop-categories')) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                link.className = isActive
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    ? 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out mb-2 bg-gradient-to-r from-purple-50 to-pink-50 text-brand-primary border-brand-primary'
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    : 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out mb-2 hover:bg-pink-50/50 text-brand-deep/70 border-transparent';
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (badge) badge.className = `px-2 py-0.5 ${isActive ? 'bg-white/50' : 'bg-gray-100'} text-xs font-bold rounded-full transition-all duration-300`;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            link.className = isActive
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                ? 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out bg-gradient-to-r from-purple-50 to-pink-50 text-brand-primary border-brand-primary'
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                : 'flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out hover:bg-pink-50/50 text-brand-deep/70 border-transparent';
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `setResultsTransition` 函数，封装页面交互、请求或状态更新逻辑。
    function setResultsTransition(state) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const el = document.getElementById('books-results-content');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!el) return;
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        el.classList.toggle('is-results-transitioning', state);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `showSkeleton` 函数，封装页面交互、请求或状态更新逻辑。
    function showSkeleton() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const el = document.getElementById('books-results-content');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!el) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const cards = Array.from({ length: 8 }).map(() => `
            <div class="book-skeleton">
                <div class="book-skeleton-cover skeleton-shimmer"></div>
                <div class="p-4 space-y-2">
                    <div class="h-4 rounded skeleton-shimmer"></div>
                    <div class="h-3 w-2/3 rounded skeleton-shimmer"></div>
                    <div class="h-3 w-1/2 rounded skeleton-shimmer"></div>
                </div>
            </div>`).join('');
        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
        el.innerHTML = `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">${cards}</div>`;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `isStaleRequest` 函数，封装页面交互、请求或状态更新逻辑。
    function isStaleRequest(id, controller) {
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return id !== activeSearchRequestId || activeSearchController !== controller;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `replaceSection` 函数，封装页面交互、请求或状态更新逻辑。
    function replaceSection(id, doc) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const cur = document.getElementById(id);
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const next = doc.getElementById(id);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!cur || !next) return false;
        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
        cur.innerHTML = next.innerHTML;
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return true;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `syncSidebarLinks` 函数，封装页面交互、请求或状态更新逻辑。
    function syncSidebarLinks(doc) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const cur = document.getElementById('books-sidebar-content');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const next = doc.getElementById('books-sidebar-content');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!cur || !next) return false;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const curLinks = cur.querySelectorAll('a[href*="/books"]');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const nextLinks = next.querySelectorAll('a[href*="/books"]');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (curLinks.length !== nextLinks.length) {
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            cur.innerHTML = next.innerHTML;
            // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
            return true;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        curLinks.forEach((link, i) => {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const n = nextLinks[i];
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            link.className = n.className;
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            link.innerHTML = n.innerHTML;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const href = n.getAttribute('href');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (href) link.setAttribute('href', href);
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const cv = n.getAttribute('data-category-value');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (cv !== null) link.setAttribute('data-category-value', cv);
            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
            else link.removeAttribute('data-category-value');
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return true;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `updateBooksView` 函数，封装页面交互、请求或状态更新逻辑。
    async function updateBooksView(targetUrl, options = {}) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            preserveSearchSelection = false,
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            categoryScrollPositions = null,
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            historyMode = 'replace',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            syncHistory = true,
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            animateResults = false,
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            syncSidebar = true,
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showLoading = false
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } = options;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!searchForm || !searchInput) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const selectionStart = preserveSearchSelection ? searchInput.selectionStart : null;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const selectionEnd = preserveSearchSelection ? searchInput.selectionEnd : null;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const requestId = ++activeSearchRequestId;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resolved = new URL(targetUrl, window.location.origin);
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const nextPath = `${resolved.pathname}${resolved.search}`;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const curPath = `${window.location.pathname}${window.location.search}`;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (syncHistory && nextPath !== curPath) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (historyMode === 'push') window.history.pushState({}, '', nextPath);
            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
            else window.history.replaceState({}, '', nextPath);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (activeSearchController) activeSearchController.abort();
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const controller = new AbortController();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        activeSearchController = controller;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (showLoading) showSkeleton();
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        else if (animateResults) setResultsTransition(true);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const response = await fetch(nextPath, {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                signal: controller.signal
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!response.ok) { window.location.href = nextPath; return; }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const html = await response.text();
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (isStaleRequest(requestId, controller)) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const doc = new DOMParser().parseFromString(html, 'text/html');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (isStaleRequest(requestId, controller)) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const okSummary = replaceSection('books-summary', doc);
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const okToolbar = replaceSection('books-toolbar', doc);
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const okResults = replaceSection('books-results-content', doc);
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const okSidebar = syncSidebar ? syncSidebarLinks(doc) : true;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!okSummary || !okResults || !okSidebar) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                window.location.href = nextPath;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextCategoryEl = doc.querySelector('#books-search-form input[name="category"]');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextSortEl = doc.querySelector('#books-search-form input[name="sort"]');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextAvailEl = doc.querySelector('#books-search-form input[name="only_available"]');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextSearchEl = doc.getElementById('books-search-input');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const committedSearch = nextSearchEl ? nextSearchEl.value : '';
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const committedCategory = nextCategoryEl ? nextCategoryEl.value : '';
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const committedSort = nextSortEl ? nextSortEl.value : '';
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const committedAvail = nextAvailEl ? nextAvailEl.value : '';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (nextSearchEl) searchInput.value = committedSearch;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setHiddenInput('category', committedCategory);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setHiddenInput('sort', committedSort);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setHiddenInput('only_available', committedAvail);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            commitState(committedSearch, committedCategory);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            bindLazyImages();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (animateResults || showLoading) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                setResultsTransition(false);
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const el = document.getElementById('books-results-content');
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (el) {
                    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                    el.classList.remove('animate-fade-in');
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    void el.offsetWidth;
                    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                    el.classList.add('animate-fade-in');
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (isStaleRequest(requestId, controller)) return;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            startPolling();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (categoryScrollPositions) restoreCategoryScrollPositions(categoryScrollPositions);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (activeCategoryLink && activeCategoryLink.isConnected) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                activeCategoryLink.focus();
            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else if (preserveSearchSelection) {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const len = searchInput.value.length;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchInput.focus();
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                searchInput.setSelectionRange(
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    Math.min(len, selectionStart ?? len),
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    Math.min(len, selectionEnd ?? len)
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                );
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch (error) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (error.name === 'AbortError') return;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            window.location.href = nextPath;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } finally {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (activeSearchController === controller) {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (animateResults) setResultsTransition(false);
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                activeSearchController = null;
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `submitSearch` 函数，封装页面交互、请求或状态更新逻辑。
    async function submitSearch() {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!searchForm || !searchInput) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const normalized = normalizeSearch(searchInput.value);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (searchInput.value !== normalized) searchInput.value = normalized;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        activeCategoryLink = null;
        // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
        await updateBooksView(buildBooksUrl(), {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            preserveSearchSelection: true,
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            historyMode: 'replace'
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `createBorrowButton` 函数，封装页面交互、请求或状态更新逻辑。
    function createBorrowButton(bookId, bookTitle, bookStock) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const button = document.createElement('button');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.type = 'button';
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookId = String(bookId);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookTitle = bookTitle;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookStock = String(bookStock);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.className = 'w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 rounded-lg transition-all duration-200 active:scale-95';
        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
        button.textContent = '预约图书';
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        button.addEventListener('click', () => window.showBorrowModalFromData?.(button));
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return button;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `pollStock` 函数，封装页面交互、请求或状态更新逻辑。
    function pollStock() {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const cards = document.querySelectorAll('[data-book-id][data-book-title]');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!cards.length) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const requestId = ++activeStockPollRequestId;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const ids = Array.from(new Set(Array.from(cards).map(c => c.dataset.bookId))).join(',');
        // 逐行注释：发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(`${booksStockUrl}?ids=${ids}`)
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(r => r.json())
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (requestId !== activeStockPollRequestId) return;
                // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                cards.forEach(card => {
                    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const info = data[card.dataset.bookId];
                    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (!info) return;
                    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const stockEl = card.querySelector('[data-stock-text]');
                    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const badge = card.querySelector('.book-card-status');
                    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const actions = card.querySelector('[data-actions]');
                    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const borrowBtn = actions ? actions.querySelector('button[data-book-id]') : null;
                    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (stockEl) {
                        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                        stockEl.textContent = `${info.stock}/${info.total}`;
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        stockEl.className = `text-xs font-semibold ${info.stock > 0 ? 'text-emerald-600' : 'text-rose-600'}`;
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        stockEl.dataset.stockText = '';
                    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                    }
                    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (badge) {
                        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                        const ok = info.available;
                        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                        badge.textContent = ok ? '可借阅' : '已借出';
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        badge.className = `book-card-status ${ok ? 'is-available' : 'is-unavailable'}`;
                    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                    }
                    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (borrowBtn) {
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        borrowBtn.dataset.bookStock = String(info.stock);
                        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                        if (!info.available) borrowBtn.remove();
                    // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else if (info.available && actions && card.dataset.bookTitle) {
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        actions.appendChild(createBorrowButton(card.dataset.bookId, card.dataset.bookTitle, info.stock));
                    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                    }
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                });
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => {});
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `updateCount` 函数，封装页面交互、请求或状态更新逻辑。
    function updateCount(selector, n) {
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.querySelectorAll(selector).forEach(el => {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const cur = parseInt(el.textContent, 10);
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (cur === n) return;
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            el.textContent = n;
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            el.classList.add('scale-110');
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            setTimeout(() => el.classList.remove('scale-110'), 300);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `pollCategories` 函数，封装页面交互、请求或状态更新逻辑。
    function pollCategories() {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const requestId = ++activeCategoriesPollRequestId;
        // 逐行注释：发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(buildCategoriesUrl())
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(r => r.json())
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (requestId !== activeCategoriesPollRequestId) return;
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const visible = new Set(Object.keys(data.categories || {}));
                // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                document.querySelectorAll('#books-sidebar-content a[data-category-value]').forEach(link => {
                    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const v = link.getAttribute('data-category-value') || '';
                    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (!v) return;
                    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                    link.classList.toggle('hidden', !(visible.has(v) || v === currentBooksCategory));
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                });
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.total !== undefined) updateCount('[data-category="all"]', data.total);
                // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                document.querySelectorAll('#books-sidebar-content a[data-category-value]').forEach(link => {
                    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const v = link.getAttribute('data-category-value') || '';
                    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (!v || Object.prototype.hasOwnProperty.call(data.categories || {}, v)) return;
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    updateCount(`[data-category="${escapeSelectorValue(v)}"]`, 0);
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                });
                // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                Object.entries(data.categories || {}).forEach(([cat, count]) => {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    updateCount(`[data-category="${escapeSelectorValue(cat)}"]`, count);
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                });
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => {});
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `startPolling` 函数，封装页面交互、请求或状态更新逻辑。
    function startPolling() {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        stopPolling();
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!document.hidden) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            pollStockInterval = setInterval(pollStock, STOCK_POLL_MS);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            pollCategoriesInterval = setInterval(pollCategories, CATEGORY_POLL_MS);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `scheduleBooksRefresh` 函数，封装页面交互、请求或状态更新逻辑。
    function scheduleBooksRefresh() {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        clearTimeout(booksRefreshTimer);
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        booksRefreshTimer = setTimeout(() => {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (document.hidden) return;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateBooksView(window.location.href, {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                syncHistory: false,
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                animateResults: false,
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                showLoading: false
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        }, 200);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `stopPolling` 函数，封装页面交互、请求或状态更新逻辑。
    function stopPolling() {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (pollStockInterval) { clearInterval(pollStockInterval); pollStockInterval = null; }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (pollCategoriesInterval) { clearInterval(pollCategoriesInterval); pollCategoriesInterval = null; }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    document.addEventListener('visibilitychange', () => {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            stopPolling();
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            pollStock();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            pollCategories();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            startPolling();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    window.addEventListener('popstate', () => {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        activeCategoryLink = null;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        clearTimeout(searchTimer);
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const url = new URL(window.location.href);
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const nextCategory = url.searchParams.get('category') || '';
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        searchInput.value = url.searchParams.get('search') || '';
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setHiddenInput('category', nextCategory);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setHiddenInput('sort', url.searchParams.get('sort') || '');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setHiddenInput('only_available', url.searchParams.get('only_available') || '');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        applyOptimisticCategoryState(nextCategory);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        updateBooksView(window.location.href, {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            categoryScrollPositions: getCategoryScrollPositions(),
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            syncHistory: false
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `bindPagination` 函数，封装页面交互、请求或状态更新逻辑。
    function bindPagination() {
        // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
        // 委托：监听结果区域内分页链接，使用 AJAX 局部刷新而非整页跳转
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.addEventListener('click', (event) => {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const link = event.target.closest('a[href]');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!link) return;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resultsRoot = document.getElementById('books-results-content');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!resultsRoot || !resultsRoot.contains(link)) return;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nav = link.closest('nav');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!nav) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const targetUrl = new URL(link.href, window.location.origin);
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (targetUrl.pathname !== window.location.pathname) return;
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!targetUrl.searchParams.has('page')) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            event.preventDefault();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const savedScrollY = window.scrollY;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateBooksView(targetUrl.toString(), {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                historyMode: 'push',
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                animateResults: true,
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            }).then(() => {
                // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
                // 保持点击前的滚动位置，避免页面跳动
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                window.scrollTo({ top: savedScrollY, behavior: 'instant' });
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `handleStockPush` 函数，封装页面交互、请求或状态更新逻辑。
    function handleStockPush(info) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!info || !info.book_id) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var cards = document.querySelectorAll('[data-book-id="' + info.book_id + '"][data-book-title]');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var matchedCards = cards.length;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        cards.forEach(function(card) {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var stockEl = card.querySelector('[data-stock-text]');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var badge = card.querySelector('.book-card-status');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var actions = card.querySelector('[data-actions]');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var borrowBtn = actions ? actions.querySelector('button[data-book-id]') : null;
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (stockEl) {
                // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                stockEl.textContent = info.stock + '/' + info.total;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                stockEl.className = 'text-xs font-semibold ' + (info.stock > 0 ? 'text-emerald-600' : 'text-rose-600');
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                stockEl.dataset.stockText = '';
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (badge) {
                // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                badge.textContent = info.available ? '可借阅' : '已借出';
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                badge.className = 'book-card-status ' + (info.available ? 'is-available' : 'is-unavailable');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (borrowBtn) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                borrowBtn.dataset.bookStock = String(info.stock);
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (!info.available) borrowBtn.remove();
            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else if (info.available && actions && card.dataset.bookTitle) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                actions.appendChild(createBorrowButton(info.book_id, card.dataset.bookTitle, info.stock));
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (matchedCards && readHiddenInput('only_available') === '1' && !info.available) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            scheduleBooksRefresh();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:book-stock-changed', function(event) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        handleStockPush(event.detail);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:book-catalog-changed', function() {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        pollCategories();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        scheduleBooksRefresh();
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindSearchEvents();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindCategoryLinks();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindToolbar();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindLazyImages();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindPagination();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    startPolling();
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
