/**
 * main.js — Homepage logic
 * Orchestrates: components, article loading, category filtering, animations
 */

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { renderArticleCard } from '../components/articleCard.js';
import {
  ARTICLES,
  CATEGORIES,
  getFeaturedArticles,
  getArticlesByCategory
} from './data.js';
import { getCurrentCategory, navigateToCategory, initRouter } from './router.js';

// ─── Bootstrap ─────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  renderHero();
  renderCategoriesGrid();
  renderFeaturedSection();
  renderLatestArticles(getCurrentCategory());
  initCategoryFilter();
  initRouter(handleCategoryChange);
  initScrollAnimations();

  // Apply initial filter from URL
  const cat = getCurrentCategory();
  if (cat !== 'all') handleCategoryChange(cat);
});

// ─── Hero ───────────────────────────────────────────────────────────────────

function renderHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const featured = getFeaturedArticles()[0];

  hero.innerHTML = `
    <div class="hero__content container">
      <div class="hero__badge">
        <span class="hero__badge-dot"></span>
        New Analysis
      </div>
      <h1 class="hero__title">Understanding Money<br>Through the <em>Meezan</em></h1>
      <p class="hero__subtitle">Scholarly, accessible analysis of Islamic finance — from the fundamentals of riba to the frontier of digital assets.</p>

      <div class="hero__featured-card">
        <div class="hero__featured-meta">
          <span class="card__category">${getCategoryLabel(featured.category)}</span>
          <span class="verdict-badge verdict-badge--${featured.verdict}">${verdictLabel(featured.verdict)}</span>
        </div>
        <h2 class="hero__featured-title">
          <a href="article.html?id=${featured.id}">${featured.title}</a>
        </h2>
        <p class="hero__featured-excerpt">${featured.excerpt}</p>
        <a href="article.html?id=${featured.id}" class="btn btn--primary">Read the Analysis →</a>
      </div>
    </div>

    <div class="hero__pattern" aria-hidden="true">
      ${generateGeometricPattern()}
    </div>
  `;
}

function generateGeometricPattern() {
  // SVG Islamic geometric pattern
  return `
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" class="hero__svg">
      <defs>
        <pattern id="islamic-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <!-- 8-pointed star pattern -->
          <g opacity="0.15" fill="none" stroke="var(--color-primary)" stroke-width="0.8">
            <polygon points="60,10 74,46 110,46 82,68 92,104 60,84 28,104 38,68 10,46 46,46" />
            <circle cx="60" cy="60" r="28" />
            <line x1="60" y1="0" x2="60" y2="120" />
            <line x1="0" y1="60" x2="120" y2="60" />
            <line x1="17" y1="17" x2="103" y2="103" />
            <line x1="103" y1="17" x2="17" y2="103" />
          </g>
        </pattern>
      </defs>
      <rect width="600" height="600" fill="url(#islamic-grid)" />
    </svg>
  `;
}

// ─── Categories Grid ────────────────────────────────────────────────────────

function renderCategoriesGrid() {
  const el = document.getElementById('categoriesGrid');
  if (!el) return;

  el.innerHTML = CATEGORIES.map(cat => {
    const count = ARTICLES.filter(a => a.category === cat.id).length;
    return `
      <button class="category-card" data-category="${cat.id}" aria-label="Filter by ${cat.label}">
        <span class="category-card__icon">${cat.icon}</span>
        <span class="category-card__label">${cat.label}</span>
        <span class="category-card__count">${count} article${count !== 1 ? 's' : ''}</span>
      </button>
    `;
  }).join('');

  // Attach click listeners
  el.querySelectorAll('.category-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      navigateToCategory(cat);
      handleCategoryChange(cat);
    });
  });
}

// ─── Featured Section ───────────────────────────────────────────────────────

function renderFeaturedSection() {
  const el = document.getElementById('featuredArticles');
  if (!el) return;

  const featured = getFeaturedArticles();
  el.innerHTML = featured.map((a, i) =>
    renderArticleCard(a, i === 0 ? 'featured' : 'default')
  ).join('');
}

// ─── Latest Articles ────────────────────────────────────────────────────────

function renderLatestArticles(categoryId = 'all') {
  const el = document.getElementById('latestArticles');
  const titleEl = document.getElementById('latestTitle');
  if (!el) return;

  const articles = getArticlesByCategory(categoryId);
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (titleEl) {
    titleEl.textContent = categoryId === 'all'
      ? 'Latest Articles'
      : `${getCategoryLabel(categoryId)} Articles`;
  }

  if (sortedArticles.length === 0) {
    el.innerHTML = `<div class="empty-state">No articles found in this category yet.</div>`;
    return;
  }

  el.innerHTML = sortedArticles.map(a => renderArticleCard(a, 'default')).join('');

  // Re-run scroll animations on new content
  requestAnimationFrame(() => observeCards());
}

// ─── Category Filter ────────────────────────────────────────────────────────

function initCategoryFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      navigateToCategory(cat);
      handleCategoryChange(cat);
    });
  });

  // Sync category card active state
  window.addEventListener('categoryChange', (e) => {
    const cat = e.detail.category;
    document.querySelectorAll('.category-card').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === cat);
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === cat || (cat === 'all' && btn.dataset.category === 'all'));
    });
  });
}

function handleCategoryChange(category) {
  renderLatestArticles(category);

  // Scroll to latest section smoothly
  const el = document.getElementById('latest');
  if (el) {
    const offset = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

// ─── Scroll Animations ───────────────────────────────────────────────────────

function initScrollAnimations() {
  // Animate elements on load
  document.querySelectorAll('.hero__content > *').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.1}s`;
    el.classList.add('fade-up');
  });

  observeCards();
}

function observeCards() {
  const cards = document.querySelectorAll('.card:not(.observed)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  cards.forEach(card => {
    card.classList.add('observed');
    observer.observe(card);
  });
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getCategoryLabel(catId) {
  const map = {
    banking: 'Islamic Banking', investing: 'Halal Investing',
    fintech: 'FinTech & Crypto', insurance: 'Takaful',
    realestate: 'Real Estate', economy: 'Islamic Economy'
  };
  return map[catId] || catId;
}

function verdictLabel(verdict) {
  const map = { halal: 'Ḥalāl', haram: 'Ḥarām', disputed: 'Disputed' };
  return map[verdict] || verdict;
}
