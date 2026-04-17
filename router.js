/**
 * router.js — Simple query-param based navigation handler
 * Manages category filtering and URL state without a full SPA router.
 */

/**
 * Gets URL search params
 */
export function getParams() {
  return new URLSearchParams(window.location.search);
}

/**
 * Gets current category from URL (default: 'all')
 */
export function getCurrentCategory() {
  return getParams().get('category') || 'all';
}

/**
 * Gets current article ID from URL
 */
export function getCurrentArticleId() {
  return getParams().get('id') || null;
}

/**
 * Navigates to category — updates URL and fires a custom event
 * @param {string} category
 */
export function navigateToCategory(category) {
  const url = new URL(window.location.href);
  if (category === 'all') {
    url.searchParams.delete('category');
  } else {
    url.searchParams.set('category', category);
  }
  window.history.pushState({ category }, '', url.toString());
  window.dispatchEvent(new CustomEvent('categoryChange', { detail: { category } }));
}

/**
 * Sets up browser back/forward support
 * @param {Function} onCategoryChange - callback(category)
 */
export function initRouter(onCategoryChange) {
  window.addEventListener('popstate', (e) => {
    const category = e.state?.category || getCurrentCategory();
    onCategoryChange(category);
  });
}
