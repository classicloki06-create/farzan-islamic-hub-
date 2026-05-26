  const relatedEl = document.getElementById('related-articles');
  const notFoundEl = document.getElementById('not-found');
  const articlePageEl = document.getElementById('article-page-content');
  const articleCtaEl = document.getElementById('article-cta');

  if (!headerEl) return;

  const id = getArticleIdFromURL();
  const article = articles.find(a => a.id === id);

  if (!article) {
    if (articlePageEl) articlePageEl.style.display = 'none';
    if (articleCtaEl) articleCtaEl.style.display = 'none';
    if (notFoundEl) notFoundEl.style.display = 'block';
    return;
  }

  document.title = `${article.title} — Falah Finance`;

  const authorInitials = article.author.split(' ').map(n => n[0]).join('').slice(0, 2);

  headerEl.innerHTML = `
    <a href="index.html" class="article-back">
      <span class="back-arrow">←</span> Back to Home
    </a>
    <span class="card-category">${article.category}</span>
    <h1>${article.title}</h1>
    <div class="article-meta-bar">
      <div class="article-author-info">
        <div class="author-avatar">${authorInitials}</div>
        <div class="author-details">
          <div class="author-name">${article.author}</div>
          <div class="article-date">${article.date}</div>
        </div>
      </div>
      <span class="verdict-badge verdict-badge-lg ${getVerdictClass(article.verdict)}">${getVerdictIcon(article.verdict)} ${article.verdict}</span>
    </div>
  `;

  contentEl.innerHTML = article.content;

  if (article.references && article.references.length > 0) {
    let refHTML = '<h3>References & Sources</h3><ol class="references-list">';
    article.references.forEach(ref => { refHTML += `<li>${ref}</li>`; });
    refHTML += '</ol>';
    referencesEl.innerHTML = refHTML;
  }

  // Related articles
  if (relatedEl) {
    const relatedGrid = relatedEl.querySelector('.related-grid');
    if (relatedGrid) {
      const related = articles
        .filter(a => a.id !== article.id)
        .sort((a, b) => (a.category === article.category ? -1 : 1) - (b.category === article.category ? -1 : 1))
        .slice(0, 3);
      related.forEach(a => relatedGrid.appendChild(createArticleCard(a)));
    }
  }
}

// ---- Mobile Nav ----
function initMobileNav() {
  const toggle = document.querySelector('.navbar-toggle');
  const links = document.querySelector('.navbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
}

// ---- Smooth Scroll ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelector('.navbar-links')?.classList.remove('open');
      }
    });
  });
}

// ---- Google Sheets Lead Forms ----
function getLeadField(formData, names) {
  for (const name of names) {
    const value = formData.get(name);
    if (value) return String(value).trim();
  }
  return '';
}

function buildLeadPayload(form) {
  const formData = new FormData(form);
  return {
    Name: getLeadField(formData, ['Name', 'name', 'fullName', 'full-name']),
    Phone: getLeadField(formData, ['Phone', 'phone', 'mobile']),
    Email: getLeadField(formData, ['Email', 'email']),
    Service: getLeadField(formData, ['Service', 'service']) || form.dataset.service || form.getAttribute('aria-label') || 'Website form',
    Requirements: getLeadField(formData, ['Requirements', 'requirements', 'message', 'notes', 'details']),
    Timestamp: new Date().toISOString()
  };
}

async function submitLeadToGoogleSheets(payload) {
  if (!GOOGLE_SHEETS_WEB_APP_URL) {
    throw new Error('Google Sheets web app URL is not configured.');
  }

  await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });
}

function initLeadForms() {
  document.querySelectorAll('form:not([data-no-leads])').forEach(form => {
    form.addEventListener('submit', async event => {
      event.preventDefault();

      const submitButton = form.querySelector('[type="submit"]');
      const statusEl = form.querySelector('.form-status');
      const originalText = submitButton ? submitButton.textContent : '';
      if (statusEl) {
        statusEl.textContent = '';
        statusEl.className = 'form-status';
      }
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
      }

      try {
        await submitLeadToGoogleSheets(buildLeadPayload(form));
        form.reset();
        if (statusEl) {
          statusEl.textContent = 'Thank you. Your application has been submitted successfully.';
          statusEl.classList.add('success');
        }
        form.dispatchEvent(new CustomEvent('lead:success', { bubbles: true }));
      } catch (error) {
        console.error(error);
        if (statusEl) {
          statusEl.textContent = 'Unable to submit right now. Please try again shortly.';
          statusEl.classList.add('error');
        }
        form.dispatchEvent(new CustomEvent('lead:error', { bubbles: true }));
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    });
  });
}

// ---- Scroll Animations ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
  // Hadith overlay (homepage only)
  if (document.getElementById('hadith-overlay')) {
    initHadithOverlay();
  }

  // Homepage
  renderFeaturedArticles();
  renderCategories();
  renderLatestArticles();

  // Article page
  renderArticlePage();

  // Common
  initMobileNav();
  initSmoothScroll();
  initLeadForms();

  setTimeout(initScrollAnimations, 100);
});
