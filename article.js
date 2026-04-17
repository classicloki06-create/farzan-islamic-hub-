/**
 * article.js — Article page logic
 * Loads article data, renders content, related articles, reading progress
 */

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { renderArticleCard } from '../components/articleCard.js';
import { getArticleById, getAuthor, getRelatedArticles, formatDate } from './data.js';
import { getCurrentArticleId } from './router.js';

// ─── Bootstrap ──────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();

  const articleId = getCurrentArticleId();
  if (!articleId) {
    renderNotFound();
    return;
  }

  const article = getArticleById(articleId);
  if (!article) {
    renderNotFound();
    return;
  }

  renderArticlePage(article);
  initReadingProgress();
  initScrollAnimations();
});

// ─── Article Renderer ────────────────────────────────────────────────────────

function renderArticlePage(article) {
  const author = getAuthor(article.author);
  const date = formatDate(article.date);
  const related = getRelatedArticles(article);

  // Update <title> and meta
  document.title = `${article.title} — MeezanJournal`;

  const container = document.getElementById('articleContainer');
  if (!container) return;

  container.innerHTML = `
    <!-- Reading progress bar -->
    <div class="reading-progress" id="readingProgress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

    <!-- Article Header -->
    <header class="article-header container--narrow">
      <div class="article-header__eyebrow">
        <a href="index.html?category=${article.category}" class="article-header__category">
          ${getCategoryLabel(article.category)}
        </a>
        <span class="verdict-badge verdict-badge--${article.verdict} verdict-badge--lg">
          ${verdictIcon(article.verdict)}
          ${verdictLabel(article.verdict)}
        </span>
      </div>

      <h1 class="article-header__title">${article.title}</h1>
      <p class="article-header__excerpt">${article.excerpt}</p>

      <div class="article-header__meta">
        <div class="article-header__author">
          <div class="card__avatar card__avatar--md">${getInitials(author?.name)}</div>
          <div class="article-header__author-info">
            <span class="article-header__author-name">${author?.name || 'Staff Writer'}</span>
            <span class="article-header__author-title">${author?.title || ''}</span>
          </div>
        </div>
        <div class="article-header__details">
          <span class="article-header__date">${date}</span>
          <span class="article-header__separator">·</span>
          <span class="article-header__read-time">${article.readTime} read</span>
          <span class="article-header__separator">·</span>
          <div class="article-header__tags">
            ${article.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </header>

    <!-- Decorative Divider -->
    <div class="article-divider" aria-hidden="true">
      <svg viewBox="0 0 100 8" xmlns="http://www.w3.org/2000/svg"><path d="M0 4 Q25 0 50 4 Q75 8 100 4" stroke="var(--color-primary)" stroke-width="0.5" fill="none" opacity="0.4"/></svg>
    </div>

    <!-- Article Body -->
    <article class="article-body container--narrow">
      ${renderArticleContent(article.content)}
    </article>

    <!-- References -->
    ${article.references ? renderReferences(article.references) : ''}

    <!-- Author Bio -->
    ${author ? renderAuthorBio(author) : ''}

    <!-- Related Articles -->
    ${related.length > 0 ? renderRelatedSection(related) : ''}
  `;
}

// ─── Content Block Renderer ─────────────────────────────────────────────────

function renderArticleContent(blocks) {
  return blocks.map(block => {
    switch (block.type) {
      case 'intro':
        return `<p class="article-body__intro">${block.text}</p>`;
      case 'heading':
        return `<h2 class="article-body__h2">${block.text}</h2>`;
      case 'subheading':
        return `<h3 class="article-body__h3">${block.text}</h3>`;
      case 'paragraph':
        return `<p class="article-body__p">${block.text}</p>`;
      case 'quote':
        return `
          <blockquote class="article-body__quote">
            <p>${block.text}</p>
            ${block.attribution ? `<cite>${block.attribution}</cite>` : ''}
          </blockquote>
        `;
      case 'callout':
        return `
          <div class="article-body__callout article-body__callout--${block.variant || 'info'}">
            <p>${block.text}</p>
          </div>
        `;
      case 'list':
        return `
          <ul class="article-body__list">
            ${block.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        `;
      default:
        return '';
    }
  }).join('\n');
}

// ─── Sub-sections ───────────────────────────────────────────────────────────

function renderReferences(refs) {
  return `
    <section class="article-references container--narrow">
      <h3 class="article-references__title">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3h12v12H3z" stroke="var(--color-primary)" stroke-width="1.2" fill="none"/><path d="M6 7h6M6 10h4" stroke="var(--color-primary)" stroke-width="1.2" stroke-linecap="round"/></svg>
        References & Sources
      </h3>
      <ol class="article-references__list">
        ${refs.map(r => `<li>${r}</li>`).join('')}
      </ol>
    </section>
  `;
}

function renderAuthorBio(author) {
  return `
    <div class="author-bio container--narrow">
      <div class="author-bio__avatar">${getInitials(author.name)}</div>
      <div class="author-bio__content">
        <h4 class="author-bio__name">${author.name}</h4>
        <p class="author-bio__title">${author.title}</p>
        <p class="author-bio__bio">${author.bio}</p>
      </div>
    </div>
  `;
}

function renderRelatedSection(related) {
  return `
    <section class="related-section">
      <div class="container">
        <h3 class="related-section__title">Continue Reading</h3>
        <div class="related-section__grid">
          ${related.map(a => renderArticleCard(a, 'default')).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderNotFound() {
  const container = document.getElementById('articleContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="not-found container--narrow">
      <p class="not-found__arabic">٤٠٤</p>
      <h1>Article Not Found</h1>
      <p>The article you're looking for doesn't exist or has been moved.</p>
      <a href="index.html" class="btn btn--primary">Return to Journal</a>
    </div>
  `;
}

// ─── Reading Progress ────────────────────────────────────────────────────────

function initReadingProgress() {
  const bar = document.getElementById('readingProgress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    bar.style.width = `${progress}%`;
    bar.setAttribute('aria-valuenow', Math.round(progress));
  }, { passive: true });
}

// ─── Scroll Animations ───────────────────────────────────────────────────────

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .author-bio, .article-references, .related-section__grid').forEach(el => {
    observer.observe(el);
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

function verdictIcon(verdict) {
  const icons = {
    halal: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    haram: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    disputed: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/><path d="M7 4v4M7 10v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
  };
  return icons[verdict] || '';
}

function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}
