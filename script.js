/* ============================================
   FALAH FINANCE — JavaScript (Premium)
   ============================================ */

const GOOGLE_SHEETS_WEB_APP_URL = '';

// ---- Hadith Data ----
const hadiths = [
  {
    text: "The truthful, honest merchant will be with the Prophets, the truthful, and the martyrs on the Day of Resurrection.",
    source: "Tirmidhi 1209 — Sahih"
  },
  {
    text: "Whoever of you wakes up in the morning secure in his home, healthy in body, and having enough food for that day — it is as if the entire world has been gathered for him.",
    source: "Tirmidhi 2346 — Hasan"
  },
  {
    text: "There will come upon the people a time when a man will not care how he earns his money, whether from lawful or forbidden means.",
    source: "Sahih Bukhari 2059"
  },
  {
    text: "Allah has permitted trade and has forbidden interest (riba).",
    source: "Quran 2:275"
  },
  {
    text: "Whoever pays zakat on his wealth, the evil of his wealth is gone from him.",
    source: "Sahih Bukhari — Book of Zakat"
  },
  {
    text: "The hand of the giver is the upper hand, and the lower hand is the hand of the receiver.",
    source: "Sahih Bukhari 1429"
  },
  {
    text: "Do not let your love of wealth lead you away from what Allah has made lawful for you.",
    source: "Musnad Ahmad — Authenticated"
  },
  {
    text: "Be wary of transactions that involve uncertainty (gharar), for it is a form of gambling.",
    source: "Sahih Muslim 1513"
  },
  {
    text: "Every body that was nourished with haram will have the Fire as its more rightful place.",
    source: "Tirmidhi 614 — Sahih"
  },
  {
    text: "The believer is not one who eats his fill when his neighbour beside him is hungry.",
    source: "Al-Adab Al-Mufrad 112 — Authenticated"
  },
  {
    text: "Seek the lawful sustenance even if it leads you to the farthest corners of the earth.",
    source: "Bayhaqi — Shu'ab al-Iman"
  },
  {
    text: "Allah is pure and accepts only that which is pure. Allah has commanded the believers what He commanded the messengers.",
    source: "Sahih Muslim 1015"
  }
];

// ---- Articles Data ----
const articles = [
  {
    id: "is-stock-trading-halal",
    title: "Is Stock Trading Halal? A Comprehensive Guide",
    description: "Explore the Islamic rulings on stock trading, which companies are permissible to invest in, and the screening criteria scholars recommend.",
    category: "Investments",
    author: "Dr. Ahmed Al-Rashid",
    date: "January 15, 2025",
    verdict: "Conditional",
    icon: "📈",
    content: `
      <p>Stock trading is one of the most discussed topics in Islamic finance. Muslims around the world want to grow their wealth while staying within the boundaries set by Shariah law. The good news is that stock trading is not inherently haram — but it comes with important conditions.</p>

      <h2>The Basic Ruling</h2>
      <p>According to the majority of Islamic scholars, buying and selling shares of companies is permissible in principle. When you buy a stock, you are purchasing partial ownership of a real business — and owning a business is clearly halal in Islam.</p>

      <blockquote>"Trade is permitted, and interest (riba) is forbidden." — Quran 2:275</blockquote>

      <h2>Shariah Screening Criteria</h2>
      <p>Not every company's stock is halal to invest in. Scholars have developed screening criteria to determine whether a stock is permissible:</p>

      <h3>Business Activity Screen</h3>
      <ul>
        <li>The company's primary business must be halal (not alcohol, gambling, pork, conventional banking, etc.)</li>
        <li>If a small portion of revenue (typically under 5%) comes from impermissible activities, some scholars allow it with purification of dividends</li>
      </ul>

      <h3>Financial Ratio Screen</h3>
      <ul>
        <li><strong>Debt ratio:</strong> Total interest-bearing debt should be less than 33% of market capitalization</li>
        <li><strong>Interest income:</strong> Should be less than 5% of total revenue</li>
        <li><strong>Accounts receivable:</strong> Should be less than 49% of total assets</li>
      </ul>

      <div class="info-box caution">
        <p><strong>⚠ Important:</strong> Day trading and excessive speculation (gharar) are generally discouraged or considered haram by most scholars. The intention should be investment, not gambling on price movements.</p>
      </div>

      <h2>Purification of Earnings</h2>
      <p>Even when investing in screened stocks, a small percentage of the company's income may come from impermissible sources. Scholars recommend calculating this percentage and donating that portion of your dividends to charity — a process known as "purification."</p>

      <h2>Practical Steps for Muslim Investors</h2>
      <ol>
        <li>Use a Shariah screening tool or consult indices like the Dow Jones Islamic Market Index</li>
        <li>Avoid companies whose primary business is haram</li>
        <li>Check the financial ratios regularly</li>
        <li>Purify your dividends by donating the impermissible portion</li>
        <li>Invest with the intention of long-term ownership, not speculation</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Stock trading is conditionally halal. As long as Muslims follow proper Shariah screening, avoid speculative behavior, and purify their earnings, investing in stocks can be a legitimate and rewarding way to build wealth in accordance with Islamic principles.</p>
    `,
    references: [
      "AAOIFI Shariah Standards on Investment",
      "Dow Jones Islamic Market Index Methodology",
      "Dr. Monzer Kahf — 'Islamic Finance: Principles and Practice'",
      "Quran 2:275 — On the permissibility of trade"
    ]
  },
  {
    id: "conventional-mortgage-ruling",
    title: "Are Conventional Mortgages Haram? Understanding Riba in Home Loans",
    description: "A detailed analysis of why conventional mortgages involve riba (interest) and what halal alternatives exist for Muslim homebuyers.",
    category: "Banking & Loans",
    author: "Sheikh Yusuf Ibrahim",
    date: "February 3, 2025",
    verdict: "Haram",
    icon: "🏠",
    content: `
      <p>Buying a home is one of the most significant financial decisions in anyone's life. For Muslims, the question of how to finance a home purchase while avoiding riba (interest) is critically important. This article examines the ruling on conventional mortgages and explores halal alternatives.</p>

      <h2>What is Riba?</h2>
      <p>Riba literally means "increase" or "excess." In Islamic finance, it refers to any guaranteed increase in a loan — essentially what modern finance calls "interest." The prohibition of riba is one of the clearest and most emphasized rulings in the Quran and Sunnah.</p>

      <blockquote>"Allah has permitted trade and has forbidden riba (interest)." — Quran 2:275</blockquote>

      <div class="info-box warning">
        <p><strong>🚫 Clear Ruling:</strong> The overwhelming majority of scholars agree that conventional mortgages involve riba and are therefore haram. The Prophet (peace be upon him) cursed the one who pays interest, the one who receives it, the one who writes it, and the two witnesses — saying they are all equal in sin (Sahih Muslim).</p>
      </div>

      <h2>Why Conventional Mortgages are Considered Haram</h2>
      <p>A conventional mortgage is fundamentally a loan with interest. The bank lends you money to buy a house, and you pay back significantly more than you borrowed over 15-30 years. This excess is riba, regardless of what name it is given.</p>

      <ul>
        <li>You borrow a fixed amount from the bank</li>
        <li>You repay a significantly larger amount due to interest charges</li>
        <li>The bank profits from lending money — not from any real economic activity</li>
        <li>This fits the exact definition of riba al-nasi'ah (riba of delay)</li>
      </ul>

      <h2>Halal Alternatives for Home Financing</h2>

      <h3>1. Murabaha (Cost-Plus Financing)</h3>
      <p>The bank purchases the property and sells it to you at a higher price, payable in installments. The profit margin is agreed upon upfront. While the end result may seem similar, the structure involves a real sale — the bank takes ownership risk, even if briefly.</p>

      <h3>2. Ijara (Lease-to-Own)</h3>
      <p>The bank buys the property and leases it to you. A portion of your monthly payment goes toward rent, and another portion goes toward gradually purchasing equity in the property. Over time, you own the home entirely.</p>

      <h3>3. Diminishing Musharakah</h3>
      <p>You and the bank co-own the property. You gradually buy out the bank's share while paying rent on the portion you don't own. This is considered by many scholars to be the most Shariah-compliant model.</p>

      <h2>The Necessity Exception</h2>
      <p>Some scholars, including the European Council for Fatwa and Research, have issued a minority opinion that Muslims living in non-Muslim countries where Islamic financing is unavailable may use conventional mortgages under the principle of necessity (darurah). However, this is a minority position and is disputed by many scholars.</p>

      <h2>Conclusion</h2>
      <p>Conventional mortgages are haram due to the clear involvement of riba. Muslims should make every effort to find halal alternatives such as Islamic banks offering Murabaha, Ijara, or Diminishing Musharakah products. Where these options exist, there is no excuse to resort to interest-based financing.</p>
    `,
    references: [
      "Quran 2:275-280 — Verses on the prohibition of riba",
      "Sahih Muslim — Hadith on the curse of riba",
      "European Council for Fatwa and Research — Resolution on Mortgages",
      "AAOIFI Shariah Standard No. 8 — Murabaha",
      "Dr. Muhammad Taqi Usmani — 'An Introduction to Islamic Finance'"
    ]
  },
  {
    id: "cryptocurrency-islamic-view",
    title: "Is Cryptocurrency Halal or Haram? An Islamic Perspective",
    description: "Examining Bitcoin, Ethereum, and other cryptocurrencies through the lens of Islamic jurisprudence — the arguments for and against.",
    category: "Crypto",
    author: "Dr. Fatima Hassan",
    date: "March 10, 2025",
    verdict: "Conditional",
    icon: "₿",
    content: `
      <p>Cryptocurrency has taken the financial world by storm, and Muslim investors are eager to understand whether digital currencies like Bitcoin and Ethereum are permissible under Islamic law. The topic has generated significant debate among scholars, with opinions ranging from complete prohibition to conditional permissibility.</p>

      <h2>Understanding Cryptocurrency</h2>
      <p>Cryptocurrency is a decentralized digital currency that uses blockchain technology for secure transactions. Unlike conventional money, it is not issued by any central authority. Key characteristics include:</p>
      <ul>
        <li>Decentralized — no central bank or government controls it</li>
        <li>Uses cryptographic technology for security</li>
        <li>Supply is often limited (e.g., Bitcoin is capped at 21 million)</li>
        <li>Transactions are recorded on a public ledger (blockchain)</li>
      </ul>

      <h2>Arguments That Crypto is Halal</h2>
      <h3>1. It Functions as a Medium of Exchange</h3>
      <p>Some scholars argue that cryptocurrency meets the definition of "mal" (property/wealth) in Islamic law because it has value, can be stored, and can be exchanged. If people accept it as payment, it can serve as a legitimate medium of exchange.</p>

      <h3>2. Blockchain Technology is Neutral</h3>
      <p>The underlying technology is simply a tool — like the internet itself. It can be used for halal or haram purposes. The technology itself is not the issue.</p>

      <h3>3. No Riba Involved</h3>
      <p>Basic cryptocurrency transactions do not involve interest. Buying Bitcoin and holding it, or using it for trade, does not inherently involve riba.</p>

      <div class="info-box">
        <p><strong>✅ Scholarly Support:</strong> Dr. Monzer Kahf and several scholars from the Islamic Finance Advisory Board have argued that Bitcoin can be halal when used as a currency or long-term investment, provided certain conditions are met.</p>
      </div>

      <h2>Arguments That Crypto is Haram</h2>
      <h3>1. Excessive Speculation (Gharar)</h3>
      <p>The extreme price volatility of most cryptocurrencies raises serious concerns about gharar (uncertainty/speculation). When people buy crypto primarily hoping for price increases, it can resemble gambling.</p>

      <h3>2. No Intrinsic Value</h3>
      <p>Some scholars argue that cryptocurrencies have no tangible underlying asset, making them unsuitable as money or property under Islamic law.</p>

      <h3>3. Used for Illicit Activities</h3>
      <p>The anonymity of crypto transactions has made them popular for money laundering and other illegal activities, which are clearly haram.</p>

      <div class="info-box warning">
        <p><strong>🚫 Scholarly Opposition:</strong> The Grand Mufti of Egypt, Shawki Allam, has declared Bitcoin and similar currencies as haram. Turkey's Directorate of Religious Affairs has also ruled against cryptocurrency.</p>
      </div>

      <h2>Conditions for Permissibility</h2>
      <p>Many scholars take a middle position, allowing cryptocurrency under certain conditions:</p>
      <ol>
        <li>It must be used as an investment or currency, not for speculation/gambling</li>
        <li>The specific cryptocurrency should have a real use case or utility</li>
        <li>Avoid crypto staking platforms that pay guaranteed returns (resembles riba)</li>
        <li>Do not invest more than you can afford to lose</li>
        <li>Ensure the platform and specific token are not involved in haram activities</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The ruling on cryptocurrency is nuanced and depends on how it is used. As a long-term investment in established coins with real utility, many scholars consider it permissible. However, speculative trading, meme coins, and interest-bearing crypto products should be avoided. Muslims should consult knowledgeable scholars and exercise caution.</p>
    `,
    references: [
      "Dr. Monzer Kahf — Fatwa on Bitcoin (2018)",
      "Dar al-Ifta al-Misriyyah — Ruling on Bitcoin",
      "AAOIFI — Discussion Paper on Cryptocurrency",
      "Mufti Faraz Adam — 'Is Bitcoin Halal?' Research Paper",
      "Journal of Islamic Banking and Finance — Vol. 36"
    ]
  },
  {
    id: "zakat-calculation-guide",
    title: "Complete Guide to Calculating Zakat on Modern Assets",
    description: "Learn how to calculate zakat on savings, investments, gold, property, and business assets with practical examples.",
    category: "Zakat & Charity",
    author: "Dr. Ahmed Al-Rashid",
    date: "April 5, 2025",
    verdict: "Halal",
    icon: "🤲",
    content: `
      <p>Zakat is one of the five pillars of Islam and a fundamental obligation for every Muslim who meets the nisab threshold. In today's complex financial world, calculating zakat requires understanding how it applies to modern assets. This guide provides a comprehensive overview.</p>

      <h2>The Basics of Zakat</h2>
      <p>Zakat is an annual obligation of 2.5% on qualifying wealth that has been held for one lunar year (hawl). It is not merely charity — it is a right that the poor have over the wealthy.</p>

      <blockquote>"Take from their wealth a charity by which you purify them and cause them increase." — Quran 9:103</blockquote>

      <h2>Nisab Threshold</h2>
      <p>Nisab is the minimum amount of wealth a Muslim must possess before zakat becomes obligatory. It is calculated based on one of two standards:</p>
      <ul>
        <li><strong>Gold:</strong> 85 grams of gold (approximately $5,500-7,000 depending on market price)</li>
        <li><strong>Silver:</strong> 595 grams of silver (approximately $400-500)</li>
      </ul>

      <div class="info-box">
        <p><strong>✅ Best Practice:</strong> Most scholars recommend using the silver nisab, as it is lower and thus more people can fulfill this obligation. This ensures more people benefit from zakat distribution.</p>
      </div>

      <h2>Calculating Zakat on Different Assets</h2>

      <h3>1. Cash and Savings</h3>
      <p>All cash in bank accounts, savings accounts, and cash on hand is subject to zakat. Simply multiply your total cash holdings by 2.5%.</p>

      <h3>2. Gold and Silver</h3>
      <p>Gold and silver — whether jewelry, coins, or bars — are subject to zakat. Calculate the current market value and apply 2.5%. Note: there is scholarly disagreement about whether jewelry worn regularly by women is subject to zakat.</p>

      <h3>3. Stocks and Investments</h3>
      <p>For stocks held as investments, calculate zakat on the current market value of your portfolio. For stocks held for trading, the full market value is zakatable. For long-term investments, some scholars say zakat is only on the dividends received.</p>

      <h3>4. Business Assets</h3>
      <p>For business owners, zakat is due on inventory (goods for sale) and cash/receivables. Fixed assets (equipment, property used in business) are generally exempt.</p>

      <h3>5. Rental Property</h3>
      <p>Property held for rental income is not subject to zakat on its value — only the rental income saved is zakatable. Property held for resale (investment/flipping) is fully zakatable.</p>

      <h2>What is NOT Subject to Zakat</h2>
      <ul>
        <li>Your primary residence</li>
        <li>Personal vehicles</li>
        <li>Furniture and personal belongings</li>
        <li>Fixed assets used in business operations</li>
      </ul>

      <h2>Practical Zakat Calculation Example</h2>
      <p>Suppose on your zakat due date you have:</p>
      <ul>
        <li>Savings account: $15,000</li>
        <li>Cash on hand: $500</li>
        <li>Gold jewelry: $3,000 market value</li>
        <li>Stock portfolio: $20,000</li>
        <li>Debts owed to you: $2,000</li>
        <li>Less: debts you owe: -$5,000</li>
      </ul>
      <p><strong>Total zakatable wealth:</strong> $35,500<br>
      <strong>Zakat due (2.5%):</strong> $887.50</p>

      <h2>Conclusion</h2>
      <p>Calculating zakat in the modern world requires diligence, but the principle remains simple: 2.5% on qualifying wealth held for one year. Set a consistent date, make a thorough inventory of your assets, and fulfill this blessed obligation with sincerity.</p>
    `,
    references: [
      "Quran 9:103 — On the obligation of Zakat",
      "Fiqh al-Zakat by Dr. Yusuf al-Qaradawi",
      "AAOIFI Shariah Standard No. 35 — Zakat",
      "IslamQA — Rulings on Zakat Calculation"
    ]
  },
  {
    id: "halal-vs-haram-investments",
    title: "Halal vs Haram: A Clear Guide to Permissible Investments",
    description: "A comprehensive breakdown of which investment types are halal, haram, or conditional according to Islamic scholars.",
    category: "Halal vs Haram",
    author: "Sheikh Yusuf Ibrahim",
    date: "May 18, 2025",
    verdict: "Halal",
    icon: "⚖️",
    content: `
      <p>One of the most common questions Muslims ask about their finances is: "Is this investment halal?" With the proliferation of investment options available today, it's crucial to have a clear understanding of what Islamic law permits and prohibits.</p>

      <h2>Core Principles of Halal Investing</h2>
      <p>Islamic finance is built on several fundamental principles that guide all financial transactions:</p>
      <ul>
        <li><strong>No Riba (Interest):</strong> Any guaranteed return on a loan is prohibited</li>
        <li><strong>No Gharar (Excessive Uncertainty):</strong> Contracts must be clear and transparent</li>
        <li><strong>No Maysir (Gambling):</strong> Returns must come from real economic activity</li>
        <li><strong>Ethical Screening:</strong> Cannot profit from industries harmful to society</li>
        <li><strong>Risk Sharing:</strong> Both profit and loss should be shared between parties</li>
      </ul>

      <h2>Clearly Halal Investments</h2>

      <h3>Real Estate</h3>
      <p>Buying property — whether for personal use, rental income, or resale — is one of the most straightforward halal investments. Property is a tangible asset with real value.</p>

      <h3>Shariah-Compliant Stocks</h3>
      <p>Stocks that pass Shariah screening criteria (halal business activity, acceptable financial ratios) are permissible to invest in.</p>

      <h3>Islamic Mutual Funds and ETFs</h3>
      <p>These are professionally managed funds that only invest in Shariah-compliant assets. They undergo regular screening by Shariah boards.</p>

      <h3>Halal Business Ownership</h3>
      <p>Starting or investing in a business that provides halal goods and services is one of the best forms of halal investment.</p>

      <div class="info-box">
        <p><strong>✅ Key Principle:</strong> The best halal investments involve real economic activity, tangible assets, and shared risk. When your money is tied to real productivity, it aligns perfectly with Islamic principles.</p>
      </div>

      <h2>Clearly Haram Investments</h2>

      <h3>Conventional Bonds</h3>
      <p>Bonds are essentially loans that pay interest — pure riba. This includes government bonds, corporate bonds, and treasury bills.</p>

      <h3>Conventional Banking Products</h3>
      <p>Fixed deposits, savings accounts with interest, and CDs at conventional banks all involve riba.</p>

      <h3>Companies in Haram Industries</h3>
      <p>Investing in companies primarily involved in alcohol, gambling, pork, pornography, weapons manufacturing, or conventional financial services is haram.</p>

      <div class="info-box warning">
        <p><strong>🚫 Warning:</strong> Even if a haram investment generates significant returns, the income is considered impure and must not be consumed. It should be given away to charity without expecting reward.</p>
      </div>

      <h2>Conditional/Gray Area Investments</h2>
      <ul>
        <li><strong>Cryptocurrency:</strong> Conditionally halal if used properly (see our detailed article)</li>
        <li><strong>Options and Futures:</strong> Generally considered haram due to gharar, though some structured products may be permissible</li>
        <li><strong>REITs:</strong> Halal if the underlying properties and financing are Shariah-compliant</li>
        <li><strong>Sukuk:</strong> Generally halal but must be properly structured — not all sukuk are truly Shariah-compliant</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The key to halal investing is knowledge and intention. Educate yourself on the principles, screen your investments carefully, consult knowledgeable scholars when in doubt, and always prioritize the purity of your wealth over the size of your returns. Allah provides from sources we never expect.</p>
    `,
    references: [
      "AAOIFI Shariah Standards — Complete Collection",
      "Securities Commission Malaysia — Islamic Capital Market Guidelines",
      "Dr. Muhammad Taqi Usmani — 'An Introduction to Islamic Finance'",
      "Quran 2:275 and 2:278-279 — Prohibition of Riba"
    ]
  },
  {
    id: "islamic-banking-explained",
    title: "How Islamic Banking Works: A Complete Overview",
    description: "Understand the fundamental principles, products, and mechanisms that make Islamic banking different from conventional banking.",
    category: "Banking & Loans",
    author: "Dr. Fatima Hassan",
    date: "June 22, 2025",
    verdict: "Halal",
    icon: "🏦",
    content: `
      <p>Islamic banking has grown into a multi-trillion dollar global industry, offering Muslims (and non-Muslims) an alternative to conventional interest-based banking. But how exactly does it work? This article explains the core concepts and products.</p>

      <h2>Fundamental Principles</h2>
      <p>Islamic banking operates on principles derived from the Quran and Sunnah:</p>
      <ul>
        <li><strong>Prohibition of Riba:</strong> No charging or paying interest</li>
        <li><strong>Risk Sharing:</strong> The bank and customer share profits and losses</li>
        <li><strong>Asset-Backed Transactions:</strong> Every transaction must be linked to a real asset</li>
        <li><strong>Ethical Investment:</strong> Money cannot be used to finance harmful activities</li>
        <li><strong>Transparency:</strong> All terms must be clear and agreed upon upfront</li>
      </ul>

      <h2>Key Islamic Banking Products</h2>

      <h3>Mudarabah (Profit-Sharing)</h3>
      <p>One party provides capital (the bank or depositor), while the other provides expertise and management. Profits are shared according to a pre-agreed ratio, but losses are borne by the capital provider only (unless due to negligence).</p>

      <h3>Musharakah (Joint Venture)</h3>
      <p>Both parties contribute capital and share profits and losses proportionally. This is considered the purest form of Islamic financing because both parties share risk equally.</p>

      <h3>Murabaha (Cost-Plus Sale)</h3>
      <p>The bank purchases an asset and sells it to the customer at a disclosed markup, payable in installments. The profit margin is fixed and known upfront — it is not interest because it involves a real sale.</p>

      <h3>Ijara (Leasing)</h3>
      <p>Similar to conventional leasing, the bank purchases an asset and leases it to the customer. The bank retains ownership and bears maintenance responsibilities. The lease can include an option to purchase at the end.</p>

      <div class="info-box">
        <p><strong>✅ Key Difference:</strong> The fundamental difference between Islamic and conventional banking is that Islamic banks must engage in real economic activity. They cannot simply lend money and charge interest — they must buy, sell, lease, or partner in actual assets and businesses.</p>
      </div>

      <h2>Islamic Bank Accounts</h2>

      <h3>Current Accounts (Qard Hasan)</h3>
      <p>These function like conventional checking accounts. The bank holds your money as a trust (amanah) or interest-free loan (qard). No interest is paid, but the bank may give voluntary gifts (hibah).</p>

      <h3>Savings/Investment Accounts (Mudarabah)</h3>
      <p>Your deposits are invested by the bank, and you share in the profits (or losses) according to a pre-agreed ratio. Unlike conventional savings accounts, the return is not guaranteed.</p>

      <h2>Challenges and Criticisms</h2>
      <p>Islamic banking is not without its critics. Some argue that certain products merely replicate conventional banking with different labels. Others point out that the profit rates often mirror interest rates. The industry continues to evolve, and scholars regularly review products for genuine compliance.</p>

      <h2>Conclusion</h2>
      <p>Islamic banking provides a viable alternative to conventional banking for those seeking to avoid riba. While not perfect, it represents a genuine effort to align financial services with Islamic principles. As the industry matures, products continue to become more innovative and authentically Shariah-compliant.</p>
    `,
    references: [
      "Islamic Financial Services Board (IFSB) — Standards",
      "Bank Negara Malaysia — Islamic Banking Guidelines",
      "AAOIFI — Shariah Standards for Islamic Financial Institutions",
      "Dr. Muhammad Taqi Usmani — 'An Introduction to Islamic Finance'"
    ]
  },
  {
    id: "insurance-takaful-guide",
    title: "Is Insurance Haram? Understanding Takaful (Islamic Insurance)",
    description: "Why conventional insurance is considered haram by most scholars and how Takaful provides a Shariah-compliant alternative.",
    category: "Halal vs Haram",
    author: "Sheikh Yusuf Ibrahim",
    date: "July 8, 2025",
    verdict: "Conditional",
    icon: "🛡️",
    content: `
      <p>Insurance is a necessity in modern life — from health coverage to car insurance to protecting your home. But is conventional insurance permissible in Islam? And what is the alternative? Let's explore this important topic.</p>

      <h2>Why Conventional Insurance is Problematic</h2>
      <p>The majority of Islamic scholars consider conventional insurance haram due to three main issues:</p>

      <h3>1. Gharar (Excessive Uncertainty)</h3>
      <p>In a conventional insurance contract, you pay premiums but may never receive anything in return. Alternatively, you might receive far more than you paid. This uncertainty in the exchange is a form of gharar that invalidates the contract according to many scholars.</p>

      <h3>2. Riba (Interest)</h3>
      <p>Insurance companies invest premiums in interest-bearing instruments. The returns generated involve riba, tainting the entire arrangement.</p>

      <h3>3. Maysir (Gambling)</h3>
      <p>Some scholars argue that conventional insurance resembles gambling — you pay a small amount hoping to receive a large payout if a specific event occurs.</p>

      <div class="info-box warning">
        <p><strong>🚫 Scholarly Consensus:</strong> The Islamic Fiqh Academy of the OIC, in its resolution of 1985, declared conventional commercial insurance impermissible due to the presence of gharar, riba, and maysir.</p>
      </div>

      <h2>What is Takaful?</h2>
      <p>Takaful is the Islamic alternative to conventional insurance. The word comes from the Arabic root "kafala," meaning to guarantee or take care of one another. It is based on the principles of mutual cooperation and shared responsibility.</p>

      <h3>How Takaful Works</h3>
      <ol>
        <li>Participants contribute to a common pool (fund) with the intention of mutual assistance</li>
        <li>The contributions are considered tabarru' (donations), eliminating gharar</li>
        <li>Claims are paid from this pool</li>
        <li>Surplus is distributed back to participants or donated to charity</li>
        <li>The Takaful operator manages the fund for a fee (wakala) or share of profit (mudarabah)</li>
      </ol>

      <div class="info-box">
        <p><strong>✅ Key Difference:</strong> In Takaful, participants are helping each other, not buying a product from a company. The relationship is cooperative, not commercial. This eliminates the gharar and maysir concerns.</p>
      </div>

      <h2>Types of Takaful</h2>
      <ul>
        <li><strong>Family Takaful:</strong> Equivalent to life insurance and savings plans</li>
        <li><strong>General Takaful:</strong> Covers motor, health, property, and other general insurance needs</li>
        <li><strong>Re-Takaful:</strong> Takaful for Takaful operators (equivalent to reinsurance)</li>
      </ul>

      <h2>When Conventional Insurance May Be Permitted</h2>
      <p>In situations where Takaful is unavailable and insurance is legally required (such as car insurance in many countries), some scholars allow conventional insurance under the principle of necessity (darurah). However, one should use only the minimum required coverage and actively seek Takaful alternatives.</p>

      <h2>Conclusion</h2>
      <p>While conventional insurance is considered haram by the majority of scholars, Takaful provides a genuine Shariah-compliant alternative. Muslims should seek out Takaful providers where available and advocate for the growth of this important industry.</p>
    `,
    references: [
      "Islamic Fiqh Academy (OIC) — Resolution on Insurance (1985)",
      "AAOIFI Shariah Standard No. 26 — Islamic Insurance",
      "Malaysian Takaful Association Guidelines",
      "Dr. Engku Rabiah — 'Takaful: Principles and Practice'"
    ]
  },
  {
    id: "forex-trading-ruling",
    title: "Is Forex Trading Halal? The Islamic Ruling Explained",
    description: "An in-depth look at currency trading in Islam — when it's permissible, when it's not, and the conditions scholars have set.",
    category: "Investments",
    author: "Dr. Ahmed Al-Rashid",
    date: "August 14, 2025",
    verdict: "Conditional",
    icon: "💱",
    content: `
      <p>Foreign exchange (forex) trading is the largest financial market in the world, with over $6 trillion traded daily. Many Muslims are drawn to forex trading for its accessibility and potential profitability. But what does Islam say about it?</p>

      <h2>Currency Exchange in Islamic Law</h2>
      <p>Islam permits currency exchange — the Prophet (peace be upon him) explicitly allowed it. However, he set strict conditions based on the hadith known as the "hadith of the six commodities":</p>

      <blockquote>"Gold for gold, silver for silver, wheat for wheat... like for like, equal for equal, hand to hand. If the types differ, then sell however you like, provided it is hand to hand." — Sahih Muslim</blockquote>

      <h2>Conditions for Halal Forex Trading</h2>
      <p>Based on scholarly analysis, forex trading may be permissible under the following conditions:</p>

      <h3>1. Immediate Exchange (Taqabud)</h3>
      <p>When exchanging different currencies, the transaction must be settled immediately. In modern terms, this means spot transactions that settle within the standard T+2 settlement period are generally acceptable. Forward contracts and futures on currencies are not permitted.</p>

      <h3>2. No Swap or Overnight Interest</h3>
      <p>Conventional forex accounts charge or pay "swap" fees for holding positions overnight. This is essentially interest and is haram. Muslim traders must use "Islamic forex accounts" or "swap-free accounts" that do not charge overnight interest.</p>

      <h3>3. No Excessive Leverage</h3>
      <p>Most forex brokers offer extreme leverage (100:1 or even 500:1). This creates excessive risk and uncertainty (gharar). While some leverage may be permissible, extreme leverage resembles gambling.</p>

      <div class="info-box caution">
        <p><strong>⚠ Important:</strong> Using 100:1 leverage means a 1% move against you wipes out your entire investment. This level of risk is akin to gambling (maysir) and should be avoided. Scholars recommend using minimal leverage or none at all.</p>
      </div>

      <h2>What Makes Forex Trading Haram?</h2>
      <ul>
        <li>Using conventional accounts with swap/rollover interest</li>
        <li>Excessive leverage that makes it akin to gambling</li>
        <li>Trading currency futures or options</li>
        <li>Pure speculation without any analysis or strategy</li>
        <li>Trading with money you cannot afford to lose</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Forex trading is conditionally halal when conducted through Islamic accounts, with minimal leverage, based on analysis rather than speculation, and using spot transactions. Muslims interested in forex should educate themselves thoroughly and ensure every aspect of their trading complies with Shariah principles.</p>
    `,
    references: [
      "Sahih Muslim — Hadith on Currency Exchange",
      "Islamic Fiqh Academy — Resolution on Currency Trading",
      "Dr. Monzer Kahf — Fatwa on Forex Trading",
      "AAOIFI Shariah Standards on Trading"
    ]
  },
  {
    id: "credit-cards-islamic-ruling",
    title: "Are Credit Cards Halal? What Every Muslim Should Know",
    description: "The nuanced ruling on using credit cards — when it becomes haram and how to use them in a Shariah-compliant way.",
    category: "Banking & Loans",
    author: "Dr. Fatima Hassan",
    date: "September 2, 2025",
    verdict: "Conditional",
    icon: "💳",
    content: `
      <p>Credit cards are ubiquitous in modern life. From online shopping to hotel bookings to building a credit score — they seem almost essential. But for Muslims, the question remains: can we use credit cards without falling into riba?</p>

      <h2>The Core Issue: Interest</h2>
      <p>The fundamental concern with credit cards is the interest charged on unpaid balances. When you don't pay your full balance by the due date, the bank charges interest on the remaining amount. This interest is riba — and it is unquestionably haram.</p>

      <h2>When Credit Cards Are Permissible</h2>
      <p>Many scholars permit the use of credit cards under strict conditions:</p>

      <h3>1. Full Monthly Payment</h3>
      <p>If you pay your entire balance before the due date every single month, you never incur interest charges. In this case, the credit card functions essentially as a deferred payment tool — which is permissible.</p>

      <h3>2. No Cash Advances</h3>
      <p>Cash advances on credit cards almost always incur immediate interest charges with no grace period. These should be completely avoided.</p>

      <h3>3. Annual Fees Are Acceptable</h3>
      <p>A fixed annual fee for the card is considered a service fee (ujrah), not interest. This is permissible according to most scholars.</p>

      <div class="info-box">
        <p><strong>✅ The Key Rule:</strong> A credit card is merely a tool. If you use it as a convenient payment method and always pay in full, it is permissible. The moment you carry a balance and pay interest, it becomes haram.</p>
      </div>

      <h2>Islamic Credit Cards</h2>
      <p>Several Islamic banks offer Shariah-compliant credit cards that operate differently:</p>
      <ul>
        <li><strong>Bai' al-Inah:</strong> The bank sells an asset to you on credit and buys it back for less — generating the credit line</li>
        <li><strong>Tawarruq:</strong> Similar concept using commodity trading</li>
        <li><strong>Ujrah (Fee-based):</strong> The bank charges a fixed fee instead of interest</li>
        <li><strong>Charge Cards:</strong> No credit extended — must pay in full each month</li>
      </ul>

      <div class="info-box caution">
        <p><strong>⚠ Caution:</strong> Not all "Islamic credit cards" are truly Shariah-compliant. Some replicate interest under different names. Research the specific structure and check if it has Shariah board approval.</p>
      </div>

      <h2>Conclusion</h2>
      <p>Credit cards are conditionally permissible in Islam. The condition is clear and non-negotiable: you must never pay interest. Use credit cards as a payment convenience, not as a borrowing tool. Those who lack the discipline to pay in full each month should avoid credit cards entirely and use debit cards instead.</p>
    `,
    references: [
      "Islamic Fiqh Academy — Resolution on Credit Cards",
      "Dr. Wahbah al-Zuhayli — 'Financial Transactions in Islamic Jurisprudence'",
      "AAOIFI Shariah Standard No. 2 — Debit and Credit Cards",
      "Mufti Taqi Usmani — Fatwa on Credit Card Usage"
    ]
  }
];

// ---- Verdict helpers ----
function getVerdictClass(verdict) {
  const v = verdict.toLowerCase();
  if (v === 'halal') return 'halal';
  if (v === 'haram') return 'haram';
  return 'conditional';
}

function getVerdictIcon(verdict) {
  const v = verdict.toLowerCase();
  if (v === 'halal') return '✅';
  if (v === 'haram') return '🚫';
  return '⚠️';
}

// ---- Hadith Overlay ----
function initHadithOverlay() {
  const overlay = document.getElementById('hadith-overlay');
  if (!overlay) return;

  // Pick random hadith
  const hadith = hadiths[Math.floor(Math.random() * hadiths.length)];
  const textEl = document.getElementById('hadith-text');
  const sourceEl = document.getElementById('hadith-source');
  const enterBtn = document.getElementById('hadith-enter-btn');

  if (textEl) textEl.textContent = `"${hadith.text}"`;
  if (sourceEl) sourceEl.textContent = `— ${hadith.source}`;

  // Prevent body scroll while overlay is showing
  document.body.style.overflow = 'hidden';

  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      overlay.classList.add('hide');
      setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }, 700);
    });
  }
}

// ---- Card Rendering ----
function createArticleCard(article) {
  const card = document.createElement('a');
  card.href = `article.html?id=${article.id}`;
  card.className = 'article-card fade-in-up';

  card.innerHTML = `
    <div class="article-card-image">
      <span class="card-icon">${article.icon}</span>
      <div class="card-image-label">
        <span class="verdict-badge ${getVerdictClass(article.verdict)}">${getVerdictIcon(article.verdict)} ${article.verdict}</span>
      </div>
    </div>
    <div class="article-card-body">
      <div class="card-meta">
        <span class="card-category">${article.category}</span>
        <span class="card-date">${article.date}</span>
      </div>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <div class="card-footer">
        <span class="card-author">${article.author}</span>
        <span class="card-read-more">Read More <span class="arrow">→</span></span>
      </div>
    </div>
  `;

  return card;
}

// ---- Homepage Rendering ----
function renderFeaturedArticles() {
  const container = document.getElementById('featured-articles');
  if (!container) return;
  articles.slice(0, 3).forEach(article => container.appendChild(createArticleCard(article)));
}

function renderLatestArticles() {
  const container = document.getElementById('latest-articles');
  if (!container) return;
  articles.forEach(article => container.appendChild(createArticleCard(article)));
}

function renderCategories() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  const categories = [
    { name: "Halal vs Haram", icon: "⚖️", desc: "Clear rulings" },
    { name: "Investments", icon: "📈", desc: "Grow your wealth" },
    { name: "Banking & Loans", icon: "🏦", desc: "Halal banking" },
    { name: "Crypto", icon: "₿", desc: "Digital assets" },
    { name: "Zakat & Charity", icon: "🤲", desc: "Give back" }
  ];

  categories.forEach(cat => {
    const count = articles.filter(a => a.category === cat.name).length;
    const card = document.createElement('div');
    card.className = 'category-card fade-in-up';
    card.innerHTML = `
      <span class="category-icon">${cat.icon}</span>
      <h3>${cat.name}</h3>
      <p class="cat-count">${count} article${count !== 1 ? 's' : ''}</p>
    `;
    card.addEventListener('click', () => {
      document.getElementById('latest')?.scrollIntoView({ behavior: 'smooth' });
    });
    container.appendChild(card);
  });
}

// ---- Article Page ----
function getArticleIdFromURL() {
  return new URLSearchParams(window.location.search).get('id');
}

function renderArticlePage() {
  const headerEl = document.getElementById('article-header');
  const contentEl = document.getElementById('article-content');
  const referencesEl = document.getElementById('article-references');
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
      const originalText = submitButton ? submitButton.textContent : '';
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
      }

      try {
        await submitLeadToGoogleSheets(buildLeadPayload(form));
        form.reset();
        form.dispatchEvent(new CustomEvent('lead:success', { bubbles: true }));
      } catch (error) {
        console.error(error);
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
