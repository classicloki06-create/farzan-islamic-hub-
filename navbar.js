/**
 * navbar.js — Responsive navigation component
 */

export function renderNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  navbar.innerHTML = `
    <nav class="nav">
      <div class="nav__inner container">
        <a href="index.html" class="nav__logo">
          <span class="nav__logo-mark">م</span>
          <span class="nav__logo-text">Meezan<em>Journal</em></span>
        </a>

        <ul class="nav__links" id="navLinks">
          <li><a href="index.html" class="nav__link">Home</a></li>
          <li class="nav__dropdown">
            <a href="#" class="nav__link nav__link--drop">Categories <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg></a>
            <ul class="nav__dropdown-menu">
              <li><a href="index.html?category=banking">Islamic Banking</a></li>
              <li><a href="index.html?category=investing">Halal Investing</a></li>
              <li><a href="index.html?category=fintech">FinTech & Crypto</a></li>
              <li><a href="index.html?category=insurance">Takaful</a></li>
              <li><a href="index.html?category=realestate">Real Estate</a></li>
              <li><a href="index.html?category=economy">Islamic Economy</a></li>
            </ul>
          </li>
          <li><a href="index.html?category=all" class="nav__link">All Articles</a></li>
        </ul>

        <div class="nav__actions">
          <button class="nav__search-btn" id="searchToggle" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" stroke-width="1.5"/><path d="M12 12l3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
          <button class="nav__hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div class="nav__search-bar" id="searchBar">
        <div class="container">
          <input type="text" class="nav__search-input" id="searchInput" placeholder="Search articles, topics, verdicts…" autocomplete="off" />
          <button class="nav__search-close" id="searchClose" aria-label="Close search">✕</button>
        </div>
        <div class="nav__search-results" id="searchResults"></div>
      </div>
    </nav>
  `;

  initNavbar();
}

function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Mobile menu
  hamburger?.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navLinks?.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close mobile menu on link click
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Search bar
  searchToggle?.addEventListener('click', () => {
    searchBar?.classList.add('open');
    searchInput?.focus();
  });

  searchClose?.addEventListener('click', closeSearch);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
  });

  function closeSearch() {
    searchBar?.classList.remove('open');
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
  }

  // Live search
  let searchTimeout;
  searchInput?.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => performSearch(searchInput.value, searchResults), 200);
  });

  // Highlight active nav link
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav__link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

function performSearch(query, resultsEl) {
  if (!query || query.length < 2) {
    resultsEl.innerHTML = '';
    resultsEl.classList.remove('has-results');
    return;
  }

  // Dynamic import to avoid circular deps
  import('./data.js').then(({ ARTICLES }) => {
    const q = query.toLowerCase();
    const matches = ARTICLES.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some(t => t.includes(q)) ||
      a.category.includes(q)
    ).slice(0, 5);

    if (matches.length === 0) {
      resultsEl.innerHTML = `<div class="search-empty">No results for "<strong>${query}</strong>"</div>`;
      resultsEl.classList.add('has-results');
      return;
    }

    resultsEl.innerHTML = matches.map(a => `
      <a href="article.html?id=${a.id}" class="search-result-item">
        <span class="search-result-category">${a.category}</span>
        <span class="search-result-title">${a.title}</span>
        <span class="verdict-badge verdict-badge--${a.verdict} verdict-badge--sm">${a.verdict}</span>
      </a>
    `).join('');
    resultsEl.classList.add('has-results');
  });
}
