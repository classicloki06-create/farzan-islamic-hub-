/**
 * articleCard.js — Reusable article card component
 * Exports card HTML as string for flexible insertion.
 */

import { getAuthor, formatDate } from '../js/data.js';

/**
 * Renders a standard article card
 * @param {Object} article
 * @param {string} [variant] - 'default' | 'featured' | 'compact'
 */
export function renderArticleCard(article, variant = 'default') {
  const author = getAuthor(article.author);
  const date = formatDate(article.date);
  const categoryLabel = getCategoryLabel(article.category);

  if (variant === 'featured') {
    return `
      <article class="card card--featured" data-category="${article.category}">
        <div class="card__eyebrow">
          <span class="card__category">${categoryLabel}</span>
          <span class="verdict-badge verdict-badge--${article.verdict}">${verdictLabel(article.verdict)}</span>
        </div>
        <h2 class="card__title card__title--featured">
          <a href="article.html?id=${article.id}">${article.title}</a>
        </h2>
        <p class="card__excerpt">${article.excerpt}</p>
        <div class="card__meta">
          <div class="card__author">
            <div class="card__avatar">${getInitials(author?.name)}</div>
            <div>
              <span class="card__author-name">${author?.name || 'Staff Writer'}</span>
              <span class="card__date">${date} · ${article.readTime} read</span>
            </div>
          </div>
          <a href="article.html?id=${article.id}" class="card__read-link">
            Read <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </article>
    `;
  }

  if (variant === 'compact') {
    return `
      <article class="card card--compact" data-category="${article.category}">
        <div class="card__compact-left">
          <span class="card__category card__category--sm">${categoryLabel}</span>
          <h3 class="card__title card__title--compact">
            <a href="article.html?id=${article.id}">${article.title}</a>
          </h3>
          <span class="card__date">${date} · ${article.readTime}</span>
        </div>
        <span class="verdict-badge verdict-badge--${article.verdict} verdict-badge--sm">${verdictLabel(article.verdict)}</span>
      </article>
    `;
  }

  // Default card
  return `
    <article class="card card--default" data-category="${article.category}">
      <div class="card__header">
        <span class="card__category">${categoryLabel}</span>
        <span class="verdict-badge verdict-badge--${article.verdict}">${verdictLabel(article.verdict)}</span>
      </div>
      <h3 class="card__title">
        <a href="article.html?id=${article.id}">${article.title}</a>
      </h3>
      <p class="card__excerpt card__excerpt--short">${article.excerpt}</p>
      <div class="card__footer">
        <div class="card__author">
          <div class="card__avatar card__avatar--sm">${getInitials(author?.name)}</div>
          <span class="card__author-name">${author?.name || 'Staff Writer'}</span>
        </div>
        <span class="card__date">${date}</span>
      </div>
    </article>
  `;
}

// --- Helpers ---

function verdictLabel(verdict) {
  const map = { halal: 'Ḥalāl', haram: 'Ḥarām', disputed: 'Disputed' };
  return map[verdict] || verdict;
}

function getCategoryLabel(catId) {
  const map = {
    banking: 'Islamic Banking',
    investing: 'Halal Investing',
    fintech: 'FinTech & Crypto',
    insurance: 'Takaful',
    realestate: 'Real Estate',
    economy: 'Islamic Economy'
  };
  return map[catId] || catId;
}

function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}
