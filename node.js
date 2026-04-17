/* ============================================================
   Islamic Finance Blog — script.js
   Handles: navigation, article rendering, filters, animations
   ============================================================ */

// ============================================================
// DATA — Articles & Categories
// ============================================================

const CATEGORIES = [
  { id: 'all',        label: 'All' },
  { id: 'halal-haram', label: 'Halal vs Haram' },
  { id: 'investments', label: 'Investments' },
  { id: 'banking',    label: 'Banking & Loans' },
  { id: 'crypto',     label: 'Crypto' },
  { id: 'zakat',      label: 'Zakat & Charity' },
];

const ARTICLES = [
  {
    id: 1,
    title: 'Is Compound Interest Haram? A Complete Guide',
    excerpt: 'Understanding riba and how compound interest relates to Islamic financial principles — with practical alternatives for modern Muslims.',
    category: 'halal-haram',
    categoryLabel: 'Halal vs Haram',
    pillClass: 'pill--halal',
    author: 'Sheikh Yusuf Al-Qaradawi',
    authorInitials: 'YQ',
    date: 'March 12, 2025',
    readTime: '8 min read',
    emoji: '📊',
    bgColor: '#d8f3dc',
    verdict: 'haram',
    verdictTitle: 'Conventional interest (riba) is Haram',
    verdictText: 'All forms of predetermined interest on loans — simple or compound — fall under riba and are prohibited in Islam. Seek Shariah-compliant alternatives.',
    body: `
      <h2>What is Riba?</h2>
      <p>Riba, literally meaning "increase" or "excess," is one of the most strictly prohibited elements in Islamic finance. The Quran explicitly forbids it in several verses, and the Prophet Muhammad (ﷺ) cursed those who take riba, those who give it, and those who record it.</p>
      <p>Conventional compound interest is considered a form of riba al-nasiah — interest on a loan — regardless of whether it's simple or compound. The mechanism of charging more money simply for the passage of time, without any real economic activity, is fundamentally at odds with Islamic values of fairness and shared risk.</p>

      <h2>Why Is Compound Interest Particularly Problematic?</h2>
      <p>Compound interest is especially concerning because of its exponential growth. A debt can spiral beyond the original principal many times over, trapping borrowers in cycles of poverty. This directly contradicts the Islamic principle of not causing harm (la darar wa la dirar).</p>
      <blockquote>"O you who believe, do not consume riba, doubled and multiplied…" — Quran 3:130</blockquote>

      <h2>Halal Alternatives</h2>
      <p>Islamic finance offers robust alternatives that allow Muslims to participate in the modern economy without compromising their faith:</p>
      <ul>
        <li><strong>Murabaha</strong> — Cost-plus financing where the bank buys an asset and sells it to you at a disclosed markup, paid in installments.</li>
        <li><strong>Ijarah</strong> — An Islamic leasing arrangement where you pay rent for the use of an asset until ownership transfers.</li>
        <li><strong>Musharakah</strong> — A partnership arrangement where profits and losses are shared proportionally — true risk-sharing.</li>
        <li><strong>Sukuk</strong> — Islamic bonds backed by real assets, where returns come from profit-sharing rather than interest.</li>
      </ul>

      <h2>Practical Steps</h2>
      <p>If you currently hold interest-bearing savings accounts or loans, consider gradually transitioning to Islamic banks or financial products certified by reputable Shariah boards. Many Western countries now have Islamic financial institutions that offer fully compliant products.</p>
      <p>Always consult a qualified Islamic scholar or a certified Shariah advisor for guidance specific to your financial situation.</p>
    `,
    references: [
      'Al-Qaradawi, Y. (1999). The Lawful and the Prohibited in Islam. Al-Falah Foundation.',
      'AAOIFI Shariah Standard No. 19 — Loan (Qard).',
      'Islamic Fiqh Academy Resolution No. 10 on Riba.',
    ],
    related: [2, 3, 5],
  },
  {
    id: 2,
    title: 'Halal Investing: Stocks, ETFs & Equity Funds Explained',
    excerpt: 'A step-by-step guide to building a Shariah-compliant investment portfolio — from screening stocks to choosing the right halal ETFs.',
    category: 'investments',
    categoryLabel: 'Investments',
    pillClass: 'pill--invest',
    author: 'Dr. Hina Hussain',
    authorInitials: 'HH',
    date: 'February 28, 2025',
    readTime: '11 min read',
    emoji: '📈',
    bgColor: '#e8f4fd',
    verdict: 'halal',
    verdictTitle: 'Equity investing is generally Halal',
    verdictText: 'Investing in Shariah-screened stocks and equity funds is permissible, provided the underlying businesses meet Islamic ethical criteria and debt ratios stay within acceptable thresholds.',
    body: `
      <h2>The Two-Stage Screening Process</h2>
      <p>Shariah-compliant equity investing relies on a rigorous two-stage screening methodology developed by bodies like the Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI).</p>

      <h2>Stage 1: Business Activity Screen</h2>
      <p>The primary screen eliminates companies whose core business involves prohibited activities. This automatically excludes companies primarily engaged in:</p>
      <ul>
        <li>Alcohol production, distribution, or retail</li>
        <li>Conventional banking and insurance (interest-based)</li>
        <li>Weapons manufacturing and defense contracting</li>
        <li>Gambling, casinos, and betting platforms</li>
        <li>Pork processing and related products</li>
        <li>Tobacco production</li>
        <li>Adult entertainment</li>
      </ul>

      <h2>Stage 2: Financial Ratio Screen</h2>
      <p>Even if a company passes the business screen, it must also meet financial thresholds. The most widely-used standards (MSCI, FTSE) require:</p>
      <ul>
        <li><strong>Debt ratio:</strong> Total debt must be less than 33% of total assets (or market cap)</li>
        <li><strong>Interest income:</strong> Interest and non-compliant income below 5% of total revenue</li>
        <li><strong>Receivables ratio:</strong> Cash and interest-bearing receivables below 67% of total assets</li>
      </ul>

      <h2>Purification of Dividends</h2>
      <p>When a company earns a small percentage of income from non-halal sources (but still passes the screens), investors are required to "purify" their dividends by donating that proportion to charity. Most Islamic robo-advisors calculate this automatically.</p>

      <h2>Top Shariah-Compliant ETFs</h2>
      <p>Several low-cost, diversified halal ETFs have emerged in recent years, making it easier than ever to invest without compromising your faith. Look for funds tracking MSCI Islamic indices or those certified by recognized Shariah boards with transparent annual reports.</p>
    `,
    references: [
      'MSCI Islamic Index Methodology Document (2024).',
      'FTSE Shariah Global Equity Index Series Ground Rules.',
      'AAOIFI Shariah Standard No. 21 — Financial Papers.',
    ],
    related: [1, 4, 5],
  },
  {
    id: 3,
    title: 'Bitcoin & Crypto: Halal or Haram in 2025?',
    excerpt: 'Scholars remain divided on cryptocurrency. We examine the strongest arguments from both sides and what major Islamic bodies have ruled.',
    category: 'crypto',
    categoryLabel: 'Crypto',
    pillClass: 'pill--crypto',
    author: 'Mufti Faraz Adam',
    authorInitials: 'FA',
    date: 'January 15, 2025',
    readTime: '13 min read',
    emoji: '₿',
    bgColor: '#f0e8fd',
    verdict: 'caution',
    verdictTitle: 'Scholarly Disagreement — Proceed with Caution',
    verdictText: 'Opinions vary significantly by coin, use-case, and trading method. Speculation (maisir) and highly volatile trading are generally discouraged. Consult a qualified Shariah scholar.',
    body: `
      <h2>The Core Debate</h2>
      <p>Few topics have generated as much scholarly debate in contemporary Islamic finance as cryptocurrency. The disagreement is genuine and reflects deep questions about the nature of money, speculation, and the role of decentralized technology in Islamic economic thought.</p>

      <h2>Arguments Supporting Permissibility</h2>
      <p>Scholars who permit cryptocurrency — including some at Al-Azhar and several prominent Shariah fintech advisors — argue:</p>
      <ul>
        <li>Cryptocurrency can function as a medium of exchange, fulfilling the Islamic conditions for valid currency</li>
        <li>The underlying blockchain technology is neutral and can facilitate halal transactions</li>
        <li>Owning Bitcoin is analogous to owning a commodity — permissible if bought and sold honestly</li>
        <li>Decentralization aligns with Islamic rejection of monopolistic banking structures</li>
      </ul>

      <h2>Arguments Against Permissibility</h2>
      <p>Scholars who prohibit cryptocurrency — including Turkey's Directorate of Religious Affairs and some Pakistani ulema — cite:</p>
      <ul>
        <li><strong>Excessive speculation (gharar):</strong> Price volatility far exceeds what is acceptable in Islamic trade</li>
        <li><strong>Maisir (gambling):</strong> Short-term crypto trading resembles gambling more than legitimate commerce</li>
        <li><strong>Lack of intrinsic value:</strong> Some argue crypto lacks the backing required for Islamic currency</li>
        <li><strong>Anonymity enabling haram:</strong> Untraceable transactions facilitate money laundering and illicit finance</li>
      </ul>

      <h2>A Practical Framework</h2>
      <p>Given the scholarly disagreement, a cautious approach is warranted. Holding a small percentage of proven digital assets (like Bitcoin) as a store of value is generally viewed more favorably than active day-trading, leveraged positions, or speculative altcoin purchases.</p>
      <p>Absolutely avoid: interest-bearing crypto lending platforms, synthetic derivatives, and any DeFi protocol that replicates conventional interest structures (often called "yield farming").</p>
    `,
    references: [
      "Dar al-Ifta al-Misriyyah, Fatwa on Cryptocurrency (2018).",
      'Faraz Adam, M. (2020). Bitcoin: Shariah Compliant? Amanah Finance.',
      'Usmani, T. — Various scholarly opinions on digital assets.',
    ],
    related: [1, 2, 6],
  },
  {
    id: 4,
    title: 'Islamic Home Financing: Murabaha vs Diminishing Musharakah',
    excerpt: 'Buying a home without a conventional mortgage is now possible in many countries. Here is how the two main halal home financing structures work.',
    category: 'banking',
    categoryLabel: 'Banking & Loans',
    pillClass: 'pill--banking',
    author: 'Dr. Hina Hussain',
    authorInitials: 'HH',
    date: 'December 5, 2024',
    readTime: '10 min read',
    emoji: '🏡',
    bgColor: '#fdf5e8',
    verdict: 'halal',
    verdictTitle: 'Both structures are Halal when correctly implemented',
    verdictText: 'Murabaha and Diminishing Musharakah (MM) are Shariah-certified structures. Verify that your provider has an active Shariah board and independent audit process.',
    body: `
      <h2>Why Not a Conventional Mortgage?</h2>
      <p>A conventional mortgage charges interest on a loan — a straightforward form of riba. Even if the rate appears small, the principle is the same. Islamic scholars universally agree this is impermissible.</p>

      <h2>Murabaha (Cost-Plus Sale)</h2>
      <p>In a Murabaha arrangement, the bank purchases the property outright and then sells it to you at an agreed markup, paid in fixed installments. Key features:</p>
      <ul>
        <li>The bank takes genuine ownership of the property before selling it to you</li>
        <li>The markup is fixed at contract signing — it cannot increase over time</li>
        <li>You know the total cost upfront, providing certainty (no hidden fees)</li>
        <li>The bank bears real property risk during the brief ownership period</li>
      </ul>

      <h2>Diminishing Musharakah (Partnership)</h2>
      <p>This is the more sophisticated and arguably more authentic Islamic structure. You and the bank co-own the property from the start:</p>
      <ul>
        <li>You make regular payments that buy out the bank's share over time</li>
        <li>You pay rent to the bank on its remaining share (the portion you don't yet own)</li>
        <li>As your ownership increases, the rental component decreases</li>
        <li>True partnership means the bank shares in both profit and loss</li>
      </ul>

      <h2>Which Is Better?</h2>
      <p>Diminishing Musharakah is generally considered more aligned with the spirit of Islamic finance because it involves genuine risk-sharing. Murabaha, while valid, has been criticized by some scholars as being economically close to a conventional loan. However, both are widely certified as permissible.</p>
    `,
    references: [
      'AAOIFI Shariah Standard No. 12 — Sharikah and Modern Corporations.',
      'El-Gamal, M.A. (2006). Islamic Finance: Law, Economics, and Practice. Cambridge.',
      'Usmani, M.T. (2002). An Introduction to Islamic Finance. Kluwer Law International.',
    ],
    related: [1, 2, 6],
  },
  {
    id: 5,
    title: 'Zakat on Investments: Stocks, Gold & Savings Accounts',
    excerpt: 'Many Muslims are unsure how to calculate Zakat on modern financial assets. This guide covers every asset class with clear worked examples.',
    category: 'zakat',
    categoryLabel: 'Zakat & Charity',
    pillClass: 'pill--zakat',
    author: 'Sheikh Yusuf Al-Qaradawi',
    authorInitials: 'YQ',
    date: 'November 20, 2024',
    readTime: '9 min read',
    emoji: '🌙',
    bgColor: '#faf0d8',
    verdict: 'halal',
    verdictTitle: 'Zakat is Obligatory on Zakatable Assets',
    verdictText: 'Zakat is due on gold, silver, cash, stocks, business inventory, and agricultural produce — when they exceed the nisab threshold and have been held for one lunar year (hawl).',
    body: `
      <h2>The Nisab Threshold in 2025</h2>
      <p>Before calculating Zakat, determine whether your assets exceed the nisab. The nisab is either 85 grams of gold or 595 grams of silver. Most scholars recommend using the silver nisab as it includes more people and is more consistent with the Prophet's (ﷺ) original intent.</p>

      <h2>Zakat on Cash & Savings</h2>
      <p>If the total cash you've held for a complete lunar year exceeds nisab, you owe 2.5% of that amount as Zakat. This includes money in conventional savings accounts (though you should donate any interest received to charity separately).</p>

      <h2>Zakat on Stocks</h2>
      <p>There are two main scholarly positions on stocks:</p>
      <ul>
        <li><strong>Trading portfolio:</strong> Zakat is due on the full market value at 2.5% — treating shares like trade goods</li>
        <li><strong>Long-term investment:</strong> Some scholars say Zakat is only on the proportionate zakatable assets of the company (its cash, receivables, and inventory), not the full share price</li>
      </ul>
      <p>Many contemporary scholars prefer the simpler first method for modern retail investors.</p>

      <h2>Zakat on Gold & Silver</h2>
      <p>Physical gold and silver have the most straightforward Zakat calculation. Simply calculate 2.5% of the current market value of your gold and silver holdings that have been in your possession for a full year.</p>

      <h2>What About Debt?</h2>
      <p>If you have debts, you may deduct short-term liabilities (debts due within the year) from your zakatable assets before calculating. Long-term debts (like a halal mortgage) are treated differently across scholarly opinions.</p>
    `,
    references: [
      'Al-Qaradawi, Y. (1999). Fiqh al-Zakat. Dar Al Taqwa.',
      'National Zakat Foundation — Contemporary Zakat Guidance (2024).',
      'Hidaya Foundation — Nisab and Zakat Calculator Methodology.',
    ],
    related: [1, 3, 4],
  },
  {
    id: 6,
    title: 'Takaful vs Conventional Insurance: What Muslims Need to Know',
    excerpt: 'Conventional insurance involves elements of gharar and maisir. Takaful offers a cooperative, Shariah-compliant alternative — but not all products are equal.',
    category: 'banking',
    categoryLabel: 'Banking & Loans',
    pillClass: 'pill--banking',
    author: 'Dr. Hina Hussain',
    authorInitials: 'HH',
    date: 'October 10, 2024',
    readTime: '7 min read',
    emoji: '🛡️',
    bgColor: '#fdf5e8',
    verdict: 'caution',
    verdictTitle: 'Conventional Insurance is Problematic; Takaful is Preferred',
    verdictText: 'Conventional insurance contains gharar (uncertainty) and maisir (gambling). Where Takaful is available, it should be preferred. In the absence of any alternative, many scholars allow necessary conventional insurance.',
    body: `
      <h2>Why Is Conventional Insurance Problematic?</h2>
      <p>Islamic scholars identify three main objections to conventional insurance:</p>
      <ul>
        <li><strong>Gharar (uncertainty):</strong> You pay premiums but may receive nothing, or far more than you paid — the outcome is fundamentally uncertain</li>
        <li><strong>Maisir (gambling):</strong> The zero-sum element of insurance resembles gambling</li>
        <li><strong>Riba:</strong> Insurance companies typically invest premiums in interest-bearing instruments</li>
      </ul>

      <h2>How Takaful Works</h2>
      <p>Takaful is a cooperative mutual guarantee scheme based on the principle of tabarru (donation). Participants contribute to a shared pool, and the pool pays out to members who experience loss. Key features:</p>
      <ul>
        <li>Contributions are framed as donations, not premiums</li>
        <li>Any surplus in the pool is returned to participants (not retained by the company)</li>
        <li>Investments are made only in Shariah-compliant instruments</li>
        <li>Managed by a Takaful operator who earns a fee (wakalah) rather than profit from risk</li>
      </ul>

      <h2>Types of Takaful</h2>
      <p>Takaful products now cover life insurance (Family Takaful), general insurance (General Takaful), health, motor, property, and even marine cargo. The industry has grown significantly in Malaysia, the Gulf states, and increasingly in Western markets.</p>
    `,
    references: [
      'AAOIFI Shariah Standard No. 26 — Islamic Insurance.',
      'Billah, M.M. (2007). Islamic Insurance (Takaful). Sweet & Maxwell Asia.',
      'Islamic Financial Services Board — Takaful Standards (2023).',
    ],
    related: [1, 4, 5],
  },
];

// ============================================================
// STATE
// ============================================================

let currentFilter = 'all';
let currentArticleId = null;

// ============================================================
// DOM REFERENCES
// ============================================================

const homeView    = document.getElementById('home-view');
const articleView = document.getElementById('article-view');
const progressBar = document.getElementById('progress-bar');

// ============================================================
// NAVIGATION
// ============================================================

/** Show the home feed, hide article */
function showHome() {
  homeView.classList.add('is-active');
  articleView.classList.remove('is-active');
  progressBar.classList.remove('is-visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  currentArticleId = null;
}

/** Render and show a specific article by id */
function showArticle(id) {
  const article = ARTICLES.find(a => a.id === id);
  if (!article) return;

  currentArticleId = id;
  renderArticle(article);

  homeView.classList.remove('is-active');
  articleView.classList.add('is-active');
  progressBar.classList.add('is-visible');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ============================================================
// RENDER: HOME
// ============================================================

function renderHome() {
  renderFeaturedCards();
  renderCategoriesGrid();
  renderFilterBar();
  renderLatestArticles('all');
}

/** Three featured article cards (first three in array) */
function renderFeaturedCards() {
  const container = document.getElementById('featured-cards');
  const featured = ARTICLES.slice(0, 3);

  container.innerHTML = featured.map((a, i) => `
    <article class="card reveal" onclick="showArticle(${a.id})" tabindex="0" role="button" aria-label="Read: ${a.title}">
      <div class="card__thumb" style="background:${a.bgColor};">
        <div class="card__thumb-pattern">${a.emoji}</div>
        <span class="card__category-pill ${a.pillClass}">${a.categoryLabel}</span>
      </div>
      <div class="card__body">
        <h3 class="card__title">${a.title}</h3>
        <p class="card__excerpt">${a.excerpt}</p>
        <div class="card__meta">
          <span>${a.author.split(' ').slice(-1)[0]}</span>
          <span class="card__meta-dot"></span>
          <span>${a.date}</span>
          <span class="card__meta-dot"></span>
          <span class="card__read-time">${a.readTime}</span>
        </div>
      </div>
    </article>
  `).join('');

  // Keyboard support
  container.querySelectorAll('.card').forEach(card => {
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') card.click(); });
  });

  observeReveal(container.querySelectorAll('.reveal'));
}

/** Categories grid in the dark green strip */
function renderCategoriesGrid() {
  const catData = [
    { id: 'halal-haram', label: 'Halal vs Haram', icon: '⚖️', count: 12 },
    { id: 'investments', label: 'Investments',    icon: '📈', count: 18 },
    { id: 'banking',    label: 'Banking & Loans', icon: '🏦', count: 14 },
    { id: 'crypto',     label: 'Crypto',          icon: '₿',  count: 9  },
    { id: 'zakat',      label: 'Zakat & Charity', icon: '🌙', count: 7  },
  ];

  const container = document.getElementById('categories-grid');
  container.innerHTML = catData.map(c => `
    <button class="category-card reveal" onclick="filterByCategory('${c.id}')" aria-label="Browse ${c.label}">
      <div class="category-card__icon">${c.icon}</div>
      <span class="category-card__name">${c.label}</span>
      <span class="category-card__count">${c.count} articles</span>
    </button>
  `).join('');

  observeReveal(container.querySelectorAll('.reveal'));
}

/** Filter pills above the latest articles list */
function renderFilterBar() {
  const bar = document.getElementById('filter-bar');
  bar.innerHTML = CATEGORIES.map(c => `
    <button class="filter-btn ${c.id === currentFilter ? 'is-active' : ''}"
            onclick="setFilter('${c.id}')"
            aria-pressed="${c.id === currentFilter}">
      ${c.label}
    </button>
  `).join('');
}

/** Latest articles list — optionally filtered by category */
function renderLatestArticles(filter) {
  const list = document.getElementById('articles-list');
  const filtered = filter === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === filter);

  if (filtered.length === 0) {
    list.innerHTML = `<p style="color:var(--text-muted);font-family:var(--font-ui);padding:2rem 0;">No articles in this category yet.</p>`;
    return;
  }

  list.innerHTML = filtered.map((a, i) => `
    <article class="article-row reveal" onclick="showArticle(${a.id})" tabindex="0" role="button" aria-label="Read: ${a.title}">
      <span class="article-row__num">${String(i + 1).padStart(2, '0')}</span>
      <div class="article-row__content">
        <p class="article-row__category">${a.categoryLabel}</p>
        <h3 class="article-row__title">${a.title}</h3>
        <p class="article-row__meta">${a.author} · ${a.date} · ${a.readTime}</p>
      </div>
      <div class="article-row__thumb" style="background:${a.bgColor};">${a.emoji}</div>
    </article>
  `).join('');

  list.querySelectorAll('.article-row').forEach(row => {
    row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') row.click(); });
  });

  observeReveal(list.querySelectorAll('.reveal'));
}

/** Called when a filter button or category card is clicked */
function setFilter(cat) {
  currentFilter = cat;
  renderFilterBar();
  renderLatestArticles(cat);
  // Smooth scroll to latest section
  document.getElementById('latest-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** Called from category grid cards */
function filterByCategory(cat) {
  setFilter(cat);
}

// ============================================================
// RENDER: ARTICLE VIEW
// ============================================================

function renderArticle(a) {
  const verdictClass = `verdict-box--${a.verdict}`;
  const verdictEmoji = a.verdict === 'halal' ? '✅' : a.verdict === 'haram' ? '🚫' : '⚠️';
  const verdictLabel = a.verdict === 'halal' ? 'Islamic Verdict: Permissible'
                     : a.verdict === 'haram' ? 'Islamic Verdict: Prohibited'
                     : 'Islamic Verdict: Scholarly Disagreement';

  // Build related articles
  const relatedHTML = a.related.map(rid => {
    const rel = ARTICLES.find(x => x.id === rid);
    if (!rel) return '';
    return `
      <div class="related-card" onclick="showArticle(${rel.id})" tabindex="0" role="button" aria-label="Read: ${rel.title}">
        <p class="related-card__category">${rel.categoryLabel}</p>
        <h4 class="related-card__title">${rel.title}</h4>
      </div>
    `;
  }).join('');

  // References list
  const refsHTML = a.references.map(r => `<li>${r}</li>`).join('');

  document.getElementById('article-content').innerHTML = `
    <!-- Back button -->
    <button class="article-back" onclick="showHome()" aria-label="Back to home">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 13L5 8l5-5"/>
      </svg>
      Back to all articles
    </button>

    <!-- Header -->
    <header class="article-header">
      <p class="article-header__category">${a.categoryLabel}</p>
      <h1 class="article-header__title">${a.title}</h1>
      <div class="article-header__byline">
        <div class="article-header__avatar">${a.authorInitials}</div>
        <div>
          <p class="article-header__author-name">${a.author}</p>
          <p>${a.date} &nbsp;·&nbsp; ${a.readTime}</p>
        </div>
      </div>
    </header>

    <hr class="article-divider">

    <!-- Verdict box -->
    <div class="verdict-box ${verdictClass}" role="note">
      <p class="verdict-box__label">${verdictEmoji} ${verdictLabel}</p>
      <h2 class="verdict-box__title">${a.verdictTitle}</h2>
      <p class="verdict-box__text">${a.verdictText}</p>
    </div>

    <!-- Body -->
    <div class="article-body">
      ${a.body}
    </div>

    <!-- References -->
    <section class="references-section">
      <h3>References & Sources</h3>
      <ol class="references-list">${refsHTML}</ol>
    </section>

    <!-- Related -->
    <section class="related-section">
      <h2>Related Articles</h2>
      <div class="related-grid">${relatedHTML}</div>
    </section>
  `;

  // Keyboard support for related cards
  document.querySelectorAll('.related-card').forEach(card => {
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') card.click(); });
  });
}

// ============================================================
// READING PROGRESS BAR
// ============================================================

function updateProgressBar() {
  if (!progressBar.classList.contains('is-visible')) return;
  const doc = document.documentElement;
  const scrolled = doc.scrollTop;
  const total = doc.scrollHeight - doc.clientHeight;
  const pct = total > 0 ? (scrolled / total) * 100 : 0;
  progressBar.style.width = pct.toFixed(1) + '%';
}

// ============================================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================================

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function observeReveal(elements) {
  elements.forEach(el => revealObserver.observe(el));
}

// ============================================================
// MOBILE NAVBAR TOGGLE
// ============================================================

function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// NEWSLETTER FORM (cosmetic demo)
// ============================================================

function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');
    const btn   = form.querySelector('button');
    btn.textContent = '✓ Subscribed!';
    btn.style.background = 'var(--green-soft)';
    input.value = '';
    setTimeout(() => {
      btn.textContent = 'Subscribe';
      btn.style.background = '';
    }, 3000);
  });
}

// ============================================================
// SMOOTH NAV LINK SCROLLING
// ============================================================

function initSmoothNav() {
  document.querySelectorAll('a[data-section]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.dataset.section;
      // If on article view, go home first
      if (articleView.classList.contains('is-active')) {
        showHome();
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ============================================================
// OBSERVE STATIC REVEAL ELEMENTS
// ============================================================

function observeStaticReveals() {
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    revealObserver.observe(el);
  });
}

// ============================================================
// BOOT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  initNavbar();
  initNewsletter();
  initSmoothNav();
  observeStaticReveals();
});

window.addEventListener('scroll', updateProgressBar, { passive: true });
