/**
 * data.js — Central article store for Meezan Journal
 * All articles, categories, and authors live here.
 */

export const AUTHORS = {
  ibrahim: {
    id: 'ibrahim',
    name: 'Dr. Ibrahim Al-Rashid',
    title: 'Islamic Finance Scholar',
    bio: 'PhD in Islamic Economics from International Islamic University Malaysia. 15+ years advising financial institutions on Shariah compliance.',
    avatar: null
  },
  fatima: {
    id: 'fatima',
    name: 'Fatima Zahra Mansour',
    title: 'Shariah Auditor & Writer',
    bio: 'Certified Shariah Auditor with expertise in banking, fintech, and capital markets. Based in Kuala Lumpur.',
    avatar: null
  },
  yusuf: {
    id: 'yusuf',
    name: 'Yusuf Karim',
    title: 'Economist & Researcher',
    bio: 'Research Fellow at the Institute of Islamic Banking and Finance. Specializes in macroeconomic policy and waqf institutions.',
    avatar: null
  },
  aisha: {
    id: 'aisha',
    name: 'Aisha Bint Noor',
    title: 'Legal & Finance Analyst',
    bio: 'Dual-qualified solicitor specialising in Islamic finance structuring across GCC and UK jurisdictions.',
    avatar: null
  }
};

export const CATEGORIES = [
  { id: 'banking', label: 'Islamic Banking', icon: '🏦', description: 'Shariah-compliant banking products and structures' },
  { id: 'investing', label: 'Halal Investing', icon: '📈', description: 'Permissible investment vehicles and screening methods' },
  { id: 'fintech', label: 'FinTech & Crypto', icon: '⚡', description: 'Modern financial technology through an Islamic lens' },
  { id: 'insurance', label: 'Takaful', icon: '🛡️', description: 'Islamic alternatives to conventional insurance' },
  { id: 'realestate', label: 'Real Estate', icon: '🏡', description: 'Halal mortgages, REITs, and property financing' },
  { id: 'economy', label: 'Islamic Economy', icon: '🌍', description: 'Macro-level principles of an Islamic economic order' }
];

export const ARTICLES = [
  {
    id: 'sukuk-explained',
    title: 'Sukuk Explained: How Islamic Bonds Work Without Interest',
    slug: 'sukuk-explained',
    category: 'investing',
    verdict: 'halal',
    featured: true,
    excerpt: 'Sukuk are asset-backed securities structured to generate returns without violating the prohibition on riba. Here\'s a deep dive into how they function and why scholars consider them permissible.',
    author: 'ibrahim',
    date: '2025-03-18',
    readTime: '9 min',
    tags: ['sukuk', 'bonds', 'fixed income', 'riba'],
    content: [
      {
        type: 'intro',
        text: 'In the global Islamic finance landscape, sukuk represent one of the most sophisticated financial innovations of the last century. Unlike conventional bonds — which are fundamentally debt instruments generating interest — sukuk derive their returns from ownership stakes in tangible assets. As of 2024, the global sukuk market has surpassed $800 billion in outstanding issuance, cementing its role as a cornerstone of Islamic capital markets.'
      },
      {
        type: 'heading',
        text: 'What Exactly Is a Sukuk?'
      },
      {
        type: 'paragraph',
        text: 'The word sukuk (صكوك) is the Arabic plural of sakk, meaning "legal instrument" or "certificate." In modern Islamic finance, sukuk are certificates that represent proportional ownership in an underlying asset, project, business, or investment activity. The holder of a sukuk does not merely hold a debt claim — they hold a beneficial ownership interest in something real.'
      },
      {
        type: 'paragraph',
        text: 'This distinction is crucial. Conventional bonds create a creditor-debtor relationship, with the bondholder entitled to fixed interest regardless of how the underlying business performs. Sukuk, by contrast, structure returns as rental income, profit shares, or proceeds from the underlying asset — all of which are permissible in Islam.'
      },
      {
        type: 'heading',
        text: 'The Most Common Sukuk Structures'
      },
      {
        type: 'paragraph',
        text: 'Scholars and practitioners have developed several sukuk structures, each based on a recognized Islamic contract. The most widely used are Ijarah (lease-based), Murabaha (cost-plus sale), Musharakah (partnership), and Mudarabah (profit-sharing). Each carries its own risk profile and accounting treatment.'
      },
      {
        type: 'subheading',
        text: 'Ijarah Sukuk'
      },
      {
        type: 'paragraph',
        text: 'Ijarah sukuk are the most prevalent globally. In this structure, an originator sells a tangible asset (an aircraft, a building, infrastructure) to a Special Purpose Vehicle (SPV). The SPV issues certificates to investors, who collectively own the asset. The originator then leases the asset back from the SPV, making periodic lease payments. These payments flow through to investors as their "return." At maturity, the originator repurchases the asset at a predetermined price.'
      },
      {
        type: 'subheading',
        text: 'Musharakah Sukuk'
      },
      {
        type: 'paragraph',
        text: 'Musharakah sukuk represent partnership interests in a jointly-owned enterprise. Returns are distributed as profit shares, and losses — crucially — must also be shared proportionally. This reflects the Islamic principle that reward and risk must go together. Musharakah sukuk are often considered more genuinely Islamic because the return is truly uncertain and tied to real economic performance.'
      },
      {
        type: 'heading',
        text: 'The Shariah Compliance Question'
      },
      {
        type: 'paragraph',
        text: 'Not all sukuk are equal from a Shariah perspective. In 2008, Sheikh Muhammad Taqi Usmani — one of the world\'s foremost Islamic finance authorities — caused significant market turbulence when he declared that approximately 85% of sukuk at the time were not genuinely Shariah-compliant. His concern: many structures contained implicit interest-like guarantees that undermined the asset-ownership premise.'
      },
      {
        type: 'paragraph',
        text: 'The key tests for Shariah compliance are: (1) the underlying asset must be real and tangible; (2) the investor must bear genuine ownership risk; (3) returns must not be predetermined in a way that replicates interest; and (4) any repurchase undertaking must be at market value, not a pre-agreed fixed price that guarantees capital.'
      },
      {
        type: 'heading',
        text: 'Practical Guidance for Retail Investors'
      },
      {
        type: 'paragraph',
        text: 'For ordinary Muslim investors looking to include sukuk in their portfolios, the safest approach is to invest through Shariah-screened funds managed by reputable Islamic asset managers with active Shariah supervisory boards. Retail sukuk are increasingly available in Malaysia, GCC countries, and through international platforms — but due diligence on the underlying structure remains essential.'
      }
    ],
    references: [
      'AAOIFI Shariah Standard No. 17 on Investment Sukuk',
      'Usmani, M.T. (2008). "Sukuk and their Contemporary Applications." AAOIFI.',
      'IIFM Sukuk Report, 14th Edition (2024)',
      'Securities Commission Malaysia, Islamic Securities Guidelines'
    ],
    related: ['murabaha-home-financing', 'halal-etf-guide', 'islamic-reit-ruling']
  },

  {
    id: 'crypto-ruling',
    title: 'Bitcoin & Crypto: The Definitive Islamic Finance Ruling',
    slug: 'crypto-ruling',
    category: 'fintech',
    verdict: 'disputed',
    featured: true,
    excerpt: 'Scholars remain divided on cryptocurrency. We examine the strongest arguments on all sides, the key Shariah principles at stake, and what guidance exists for Muslims navigating digital assets.',
    author: 'fatima',
    date: '2025-02-27',
    readTime: '12 min',
    tags: ['bitcoin', 'cryptocurrency', 'digital assets', 'maysir', 'gharar'],
    content: [
      {
        type: 'intro',
        text: 'Few questions have generated more debate in contemporary Islamic jurisprudence than the permissibility of cryptocurrencies. From Bitcoin to DeFi protocols, digital assets challenge classical fiqh categories in ways that expose deep disagreements about what constitutes "māl" (property), "thamaniyyah" (monetary quality), and impermissible speculation.'
      },
      {
        type: 'heading',
        text: 'The Core Shariah Questions'
      },
      {
        type: 'paragraph',
        text: 'Before examining scholarly opinions, we must identify the precise Shariah questions crypto raises: Does cryptocurrency constitute legitimate māl (property) that can be owned and traded? Does it possess thamaniyyah — the quality of being genuine currency? Does its trading involve prohibited gharar (uncertainty) or maysir (gambling)? Can it be used in permissible contracts?'
      },
      {
        type: 'heading',
        text: 'The Prohibition Position'
      },
      {
        type: 'paragraph',
        text: 'Egypt\'s Dar al-Ifta, under former Grand Mufti Shawki Allam, issued fatwas characterizing Bitcoin trading as haram. Their primary concerns: extreme price volatility creating maysir-like speculation; lack of regulatory backing making it a tool for facilitating illicit transactions; and the absence of intrinsic value or government guarantee undermining its claim to be legitimate currency.'
      },
      {
        type: 'paragraph',
        text: 'The Turkish Directorate of Religious Affairs (Diyanet) has also expressed reservations, emphasizing that cryptocurrency\'s anonymous nature facilitates haram transactions, and that its speculative trading mirrors prohibited gambling activity under the maysir prohibition.'
      },
      {
        type: 'heading',
        text: 'The Permissibility Position'
      },
      {
        type: 'paragraph',
        text: 'A growing number of scholars, particularly those with deep engagement with financial technology, have argued for conditional permissibility. Sheikh Assim Al-Hakeem, while generally cautious, has noted that if cryptocurrency is used as a medium of exchange for genuine goods and services rather than pure speculation, the analysis changes significantly.'
      },
      {
        type: 'paragraph',
        text: 'The Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI) has begun developing standards for digital assets, implicitly acknowledging that blanket prohibition may be premature. Some Malaysian scholars have argued that Bitcoin, having achieved widespread acceptance and economic utility, may now qualify as \'urf-based māl — property recognized by custom and practice.'
      },
      {
        type: 'heading',
        text: 'The Question of Gharar and Maysir'
      },
      {
        type: 'paragraph',
        text: 'The strongest Shariah objection is not to cryptocurrency per se, but to speculative trading in it. Classical scholars define maysir as any transaction where one party\'s gain necessarily comes at another\'s loss, driven by chance rather than skill or productive activity. Highly leveraged crypto trading, perpetual futures, and many DeFi protocols arguably satisfy this definition. Holding Bitcoin as a store of value is categorically different from trading 100x leverage derivatives.'
      },
      {
        type: 'heading',
        text: 'Practical Guidance'
      },
      {
        type: 'paragraph',
        text: 'Given genuine scholarly disagreement, Muslims should approach crypto with significant caution and consult qualified scholars for their personal situation. The following principles enjoy broad scholarly consensus: (1) highly leveraged speculative trading is impermissible; (2) using crypto for Shariah-prohibited transactions remains haram; (3) DeFi protocols involving riba (lending with interest) are not permissible. Pure holding as a speculative investment occupies disputed territory that each person should resolve with a qualified scholar.'
      }
    ],
    references: [
      'Dar al-Ifta al-Misriyyah, Fatwa on Bitcoin (2018)',
      'AAOIFI Working Group on Digital Assets (2023)',
      'Laldin, M.A. & Furqani, H. (2019). "Fintech and Islamic Finance." ISRA International Journal.',
      'Al-Suwailem, S. (2006). "Hedging in Islamic Finance." Occasional Paper No. 10, IRTI.'
    ],
    related: ['sukuk-explained', 'halal-etf-guide', 'defi-islamic-analysis']
  },

  {
    id: 'murabaha-home-financing',
    title: 'Murabaha vs. Diminishing Musharakah: Which Is Truly Halal for Home Buying?',
    slug: 'murabaha-home-financing',
    category: 'realestate',
    verdict: 'halal',
    featured: true,
    excerpt: 'Two dominant structures compete for the Islamic mortgage market. Understanding their differences — and why one has stronger scholarly support — could change how you finance your home.',
    author: 'aisha',
    date: '2025-01-14',
    readTime: '10 min',
    tags: ['mortgage', 'murabaha', 'musharakah', 'home buying'],
    content: [
      {
        type: 'intro',
        text: 'For Muslims in Western countries, home ownership has long presented a painful dilemma: conventional mortgages involve riba, yet renting indefinitely is financially and practically difficult. The emergence of Islamic home finance products has been transformative, but not all structures are created equal. Understanding the difference between Murabaha and Diminishing Musharakah — and their respective scholarly support — matters enormously.'
      },
      {
        type: 'heading',
        text: 'Murabaha: The Cost-Plus Sale'
      },
      {
        type: 'paragraph',
        text: 'In a Murabaha home financing arrangement, the bank purchases the property outright from the seller, then resells it to the customer at a disclosed mark-up, payable in installments. The total price — original cost plus profit — is fixed at the outset. The customer knows exactly what they\'re paying from day one.'
      },
      {
        type: 'paragraph',
        text: 'The Shariah validity of Murabaha rests on several conditions: the bank must genuinely purchase the property before selling it (not simply extend credit); the mark-up must be agreed upon openly; and there must be no penalty interest on late payments (though scholars permit a "charitable penalty" donated to approved causes). When these conditions are met, Murabaha is considered halal by most contemporary scholars.'
      },
      {
        type: 'heading',
        text: 'Diminishing Musharakah: The Partnership Model'
      },
      {
        type: 'paragraph',
        text: 'Diminishing Musharakah (DM) is widely regarded as a more sophisticated and authentically Islamic structure. Here, the bank and customer co-purchase the property as partners. The customer gradually buys out the bank\'s share over time. The customer pays the bank rental on the bank\'s remaining share — since the bank is a co-owner, it\'s entitled to rent on its portion. As the customer\'s ownership grows, rental payments decrease, while ownership payments stay constant.'
      },
      {
        type: 'heading',
        text: 'Why Scholars Prefer Diminishing Musharakah'
      },
      {
        type: 'paragraph',
        text: 'The strongest argument for DM\'s superiority lies in its authentic risk-sharing nature. In a genuine Musharakah, both parties are co-owners who bear ownership risk. If the property value drops, both parties absorb the loss proportionally. Murabaha, by contrast, creates a fixed obligation that must be paid regardless of the property\'s performance — which some scholars argue begins to resemble a debt instrument more than an authentic sale.'
      },
      {
        type: 'paragraph',
        text: 'Furthermore, many Murabaha home finance products in practice involve back-to-back arrangements where the bank never physically takes possession of the property, creating Shariah concerns about whether a genuine sale truly occurred. Well-structured DM products tend to avoid this issue because co-ownership is clearly established from the beginning.'
      }
    ],
    references: [
      'AAOIFI Shariah Standard No. 12 on Sharikah (Musharakah) and Modern Corporations',
      'Usmani, M.T. (2002). "An Introduction to Islamic Finance." Kluwer Law International.',
      'Hasan, Z. (2011). "Islamic Home Finance in the Social Mirror." ISRA International Journal.',
      'UK Islamic Finance Council, Guidance Note on Home Purchase Plans (2022)'
    ],
    related: ['sukuk-explained', 'islamic-reit-ruling', 'takaful-explained']
  },

  {
    id: 'halal-etf-guide',
    title: 'The Complete Guide to Shariah-Compliant ETFs in 2025',
    slug: 'halal-etf-guide',
    category: 'investing',
    verdict: 'halal',
    featured: false,
    excerpt: 'Halal ETFs have grown dramatically in the past five years. This guide covers the major screening methodologies, leading funds, purification calculations, and what to look for in a Shariah board.',
    author: 'yusuf',
    date: '2025-03-01',
    readTime: '11 min',
    tags: ['ETF', 'index fund', 'screening', 'purification'],
    content: [
      {
        type: 'intro',
        text: 'Exchange-traded funds have democratized investing for a generation. For Muslim investors, the question has always been: which funds can I hold with confidence? The halal ETF market has matured significantly, and with it, the sophistication of Shariah screening methodologies.'
      },
      {
        type: 'heading',
        text: 'Understanding Shariah Screening'
      },
      {
        type: 'paragraph',
        text: 'Shariah screening operates at two levels: qualitative (business activity) and quantitative (financial ratios). Qualitative screens exclude companies deriving material revenue from alcohol, tobacco, pork, conventional finance, weapons, pornography, and gambling. Once a company passes qualitative screens, quantitative thresholds assess its financial structure.'
      },
      {
        type: 'heading',
        text: 'Key Financial Ratio Thresholds'
      },
      {
        type: 'paragraph',
        text: 'AAOIFI standards require that debt-to-total-assets remain below 30%, interest-bearing securities below 30% of total assets, and that impermissible income (excluding screened-out sectors) not exceed 5% of total revenues. MSCI applies slightly different thresholds. Understanding which methodology your ETF uses matters, as it affects which companies are included.'
      },
      {
        type: 'heading',
        text: 'Dividend Purification'
      },
      {
        type: 'paragraph',
        text: 'Even Shariah-screened funds may receive incidental impermissible income — a tech company might earn some interest on its cash holdings, for instance. This doesn\'t make the investment haram, but it creates an obligation to "purify" returns. Most Shariah ETF providers publish an annual purification ratio — a percentage of dividends that should be donated to charity. This typically ranges from 0.5% to 3%.'
      }
    ],
    references: [
      'AAOIFI Shariah Standard No. 21 on Financial Papers',
      'MSCI Islamic Index Methodology (2024)',
      'Derigs, U. & Marzban, S. (2008). "Review and Analysis of Current Shariah-Compliant Equity Screening Practices."'
    ],
    related: ['sukuk-explained', 'crypto-ruling', 'islamic-reit-ruling']
  },

  {
    id: 'takaful-explained',
    title: 'Takaful: How Islamic Insurance Actually Works',
    slug: 'takaful-explained',
    category: 'insurance',
    verdict: 'halal',
    featured: false,
    excerpt: 'Conventional insurance is prohibited in Islamic law due to elements of riba, gharar, and maysir. Takaful offers an alternative based on mutual solidarity. Here\'s the full picture.',
    author: 'fatima',
    date: '2025-02-10',
    readTime: '8 min',
    tags: ['takaful', 'insurance', 'mutual', 'solidarity'],
    content: [
      {
        type: 'intro',
        text: 'The Arabic word takaful derives from the root kafala, meaning "to guarantee" or "to take responsibility for." In Islamic finance, takaful describes a system of mutual insurance where participants contribute to a common pool, and those who suffer losses draw from it — in line with the prophetic hadith: "The believers in their mutual kindness, compassion and sympathy are just like one body."'
      },
      {
        type: 'heading',
        text: 'Why Conventional Insurance Is Problematic'
      },
      {
        type: 'paragraph',
        text: 'Classical scholars identify three main prohibitions in conventional insurance: gharar (excessive uncertainty) in the insurance contract itself; maysir (gambling-like speculation) since the policyholder may receive far more or far less than they paid; and riba in the investment of insurance premiums. The combination of these three elements renders conventional insurance impermissible according to most scholars.'
      },
      {
        type: 'heading',
        text: 'The Takaful Model'
      },
      {
        type: 'paragraph',
        text: 'In takaful, participants make contributions (not "premiums") to a Takaful fund. These contributions are conceived as tabarru — voluntary donations for mutual assistance. When a participant suffers a loss, they are compensated from this pool, not from any contractual obligation of the operator. The operator manages the fund for a fee (Wakala model) or shares in the profit (Mudarabah model).'
      }
    ],
    references: [
      'AAOIFI Shariah Standard No. 26 on Islamic Insurance',
      'Khan, A. & Bhatti, I. (2008). "Development in Islamic Banking." Palgrave Macmillan.',
      'IFSB-8: Guiding Principles on Governance for Takaful Undertakings'
    ],
    related: ['murabaha-home-financing', 'sukuk-explained', 'crypto-ruling']
  },

  {
    id: 'islamic-reit-ruling',
    title: 'Are Real Estate Investment Trusts (REITs) Halal?',
    slug: 'islamic-reit-ruling',
    category: 'realestate',
    verdict: 'disputed',
    featured: false,
    excerpt: 'REITs offer attractive yields and real estate exposure — but do their structures satisfy Shariah requirements? We examine the conditions for permissibility and which types of REITs scholars find most acceptable.',
    author: 'yusuf',
    date: '2025-01-28',
    readTime: '7 min',
    tags: ['REIT', 'real estate', 'dividend', 'screening'],
    content: [
      {
        type: 'intro',
        text: 'Real Estate Investment Trusts pool investor capital to own income-producing properties — from shopping malls to logistics warehouses to apartment complexes. For Muslim investors, REITs present a nuanced case: they involve tangible, productive assets (broadly permissible) but are often structured with significant leverage and may own or lease to impermissible tenants.'
      },
      {
        type: 'heading',
        text: 'The Case for Permissibility'
      },
      {
        type: 'paragraph',
        text: 'The foundational activity of a REIT — owning property and earning rental income — is clearly halal. Rental income (ujrah) from permissible properties is among the most straightforwardly lawful forms of income in Islamic law. To the extent a REIT owns permissible property and earns rental income from halal tenants, the underlying economic activity is sound.'
      },
      {
        type: 'heading',
        text: 'The Complications'
      },
      {
        type: 'paragraph',
        text: 'Most conventional REITs carry debt (often 40-50% loan-to-value) that bears interest — potentially failing the quantitative screens applied to equities. Additionally, many REITs own mixed-use properties with tenants including restaurants serving alcohol, conventional banks, or other prohibited businesses. Scholars generally permit incidental impermissible tenancy below 5% of rental income, but the investor must purify that portion of dividends.'
      }
    ],
    references: [
      'Securities Commission Malaysia: Guidelines on Islamic REITs (2021)',
      'AAOIFI Shariah Standard No. 17',
      'Nasir, N.M. & Ali, N.A.M. (2018). "Islamic REIT in Malaysia." Journal of Islamic Finance.'
    ],
    related: ['murabaha-home-financing', 'halal-etf-guide', 'sukuk-explained']
  },

  {
    id: 'waqf-revival',
    title: 'The Revival of Waqf: Islamic Endowments as a Development Tool',
    slug: 'waqf-revival',
    category: 'economy',
    verdict: 'halal',
    featured: false,
    excerpt: 'The ancient institution of waqf — the Islamic endowment — is experiencing a global renaissance, from fintech-enabled micro-waqf to sovereign wealth integration. Here\'s why it matters.',
    author: 'ibrahim',
    date: '2025-03-05',
    readTime: '9 min',
    tags: ['waqf', 'endowment', 'Islamic economy', 'social finance'],
    content: [
      {
        type: 'intro',
        text: 'At its peak, the waqf institution funded hospitals, universities, water systems, and caravanserais across the Muslim world. The Ottoman waqf system at one point reportedly held one-third of all productive land in Anatolia. Then colonialism, nationalization policies, and legal reforms dismantled much of this infrastructure. Today, a deliberate global effort is underway to revive waqf as a 21st-century development institution.'
      },
      {
        type: 'heading',
        text: 'What Is a Waqf?'
      },
      {
        type: 'paragraph',
        text: 'A waqf (plural: awqaf) is a perpetual religious endowment — an asset donated for charitable purposes with the principal locked in perpetuity. The donor (waqif) dedicates an asset "for the sake of God," specifying its purpose. Only the usufruct (the income or use) is distributed; the asset itself may never be sold or transferred. This creates permanently productive charitable capital.'
      },
      {
        type: 'heading',
        text: 'Modern Waqf Innovation'
      },
      {
        type: 'paragraph',
        text: 'Contemporary waqf development includes cash waqf (where monetary donations are pooled and invested, with returns going to charitable purposes), corporate waqf (where companies dedicate shares to charitable endowments), and blockchain-enabled waqf platforms that allow micro-contributions from small donors worldwide. Malaysia has been particularly innovative, developing Waqf REITs and integrating waqf into its national development planning.'
      }
    ],
    references: [
      'Cizakca, M. (2000). "A History of Philanthropic Foundations: The Islamic World from the Seventh Century to the Present." Bogazici University Press.',
      'ISRA Research Paper: Contemporary Waqf Issues (2023)',
      'World Bank & INCEIF. (2019). "Maximizing Social Impact Through Waqf Solutions."'
    ],
    related: ['sukuk-explained', 'takaful-explained', 'halal-etf-guide']
  }
];

/**
 * Utility: get article by id
 */
export function getArticleById(id) {
  return ARTICLES.find(a => a.id === id) || null;
}

/**
 * Utility: get articles by category
 */
export function getArticlesByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return ARTICLES;
  return ARTICLES.filter(a => a.category === categoryId);
}

/**
 * Utility: get featured articles
 */
export function getFeaturedArticles() {
  return ARTICLES.filter(a => a.featured);
}

/**
 * Utility: get related articles
 */
export function getRelatedArticles(article) {
  if (!article.related) return [];
  return article.related
    .map(id => ARTICLES.find(a => a.id === id))
    .filter(Boolean)
    .slice(0, 3);
}

/**
 * Utility: get author by id
 */
export function getAuthor(authorId) {
  return AUTHORS[authorId] || null;
}

/**
 * Utility: format date
 */
export function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
