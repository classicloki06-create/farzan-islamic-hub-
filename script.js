/* ============================================
   HALAL FINANCE HUB — Main JavaScript
   ============================================ */

'use strict';

/* ============================================
   ARTICLES DATA
   ============================================ */
const articles = [
  {
    id: 'is-crypto-halal',
    title: 'Is Cryptocurrency Halal? A Comprehensive Islamic Finance Analysis',
    description: 'An in-depth look at whether Bitcoin, Ethereum, and other cryptocurrencies comply with Shariah law, examining the key principles of gharar, maysir, and riba.',
    category: 'Crypto',
    author: 'Dr. Yusuf Al-Qardawi',
    authorInitials: 'YQ',
    date: 'December 12, 2024',
    readTime: '9 min read',
    verdict: 'Conditional',
    icon: '₿',
    tags: ['Bitcoin', 'Blockchain', 'Shariah'],
    featured: true,
    content: `
      <p>The question of cryptocurrency's permissibility in Islamic law has become one of the most debated topics in contemporary Islamic finance. As digital assets continue to reshape the global financial landscape, Muslims worldwide are seeking clear guidance on whether they can participate in this revolution while remaining faithful to their religious principles.</p>

      <h2>The Core Islamic Finance Principles at Stake</h2>
      <p>Before determining the permissibility of cryptocurrency, we must understand the fundamental Islamic finance principles that apply:</p>
      <ul>
        <li><strong>Riba (Interest):</strong> Any predetermined, fixed return on financial transactions is prohibited. This is non-negotiable in Islamic law.</li>
        <li><strong>Gharar (Uncertainty):</strong> Excessive uncertainty or ambiguity in contracts and transactions is forbidden. Speculation beyond a reasonable level is discouraged.</li>
        <li><strong>Maysir (Gambling):</strong> Any transaction that resembles gambling — where one party's gain is directly another's loss without creating real value — is prohibited.</li>
        <li><strong>Halal Underlying Activity:</strong> The asset must derive value from, or be backed by, a permissible underlying activity or commodity.</li>
      </ul>

      <h2>Arguments Supporting Cryptocurrency as Halal</h2>
      <p>Several prominent Islamic scholars and Shariah boards have conditionally approved cryptocurrency for the following reasons:</p>

      <blockquote>
        <p>"Cryptocurrency, when used as a medium of exchange for legitimate goods and services, functions similarly to conventional currency and does not inherently involve riba." — Islamic Finance Advisory Board, 2021</p>
      </blockquote>

      <h3>1. Medium of Exchange Argument</h3>
      <p>Bitcoin and other cryptocurrencies can function as a medium of exchange — similar to how gold and silver functioned historically. The Quran does not restrict the form of money used in transactions. What matters is the nature of the transaction itself, not the currency used.</p>

      <h3>2. Real Value and Utility</h3>
      <p>Unlike pure speculation instruments, many cryptocurrencies provide genuine utility — Bitcoin secures a decentralized payment network, while Ethereum powers smart contracts. This underlying utility provides a basis for real value creation.</p>

      <h3>3. No Inherent Riba</h3>
      <p>Simply holding or transacting in cryptocurrency does not involve interest. The prohibition of riba applies to lending and borrowing with predetermined returns, not to currencies themselves.</p>

      <h2>Arguments Against Cryptocurrency as Halal</h2>
      <p>Many scholars raise serious concerns that cannot be dismissed:</p>

      <div class="highlight-box">
        <strong>Key Concern:</strong> The extreme volatility and speculative nature of most cryptocurrency markets bears strong resemblance to maysir (gambling). When purchasing purely for speculative gain rather than utility, the transaction may cross into prohibited territory.
      </div>

      <h3>1. Excessive Gharar</h3>
      <p>Cryptocurrency prices can fluctuate 20-30% in a single day. This extreme uncertainty (gharar) in value makes it difficult to justify most crypto purchases as anything other than pure speculation. The Hadith warns clearly against transactions with excessive uncertainty.</p>

      <h3>2. Lack of Intrinsic Value</h3>
      <p>Some scholars argue that unlike gold (which has physical utility), most cryptocurrencies have no intrinsic value independent of market speculation. This lack of underlying tangible asset raises Shariah concerns.</p>

      <h3>3. Maysir Resemblance</h3>
      <p>Day trading, highly leveraged crypto positions, and meme coin purchases show characteristics of gambling — the primary motive is profit at another's expense, with no underlying value creation.</p>

      <h2>The Conditional Verdict</h2>
      <p>Based on the scholarly consensus emerging in 2023-2024, cryptocurrency can be considered <strong>conditionally permissible</strong> under the following conditions:</p>
      <ol>
        <li>It is used as a genuine medium of exchange, not purely for speculation</li>
        <li>Leverage and margin trading are strictly avoided (these introduce riba)</li>
        <li>Investment is based on fundamental analysis, not pure price speculation</li>
        <li>The specific cryptocurrency has real utility or underlying value</li>
        <li>Staking rewards that function as interest (riba) are avoided</li>
        <li>Transactions involving alcohol, gambling, or other haram industries are refused</li>
      </ol>

      <h2>What to Avoid</h2>
      <p>The following crypto activities are widely considered <strong>haram</strong> by Islamic scholars:</p>
      <ul>
        <li>Margin trading and leveraged positions (involves riba)</li>
        <li>Interest-bearing lending protocols in DeFi</li>
        <li>Meme coins with no utility (pure gambling/maysir)</li>
        <li>Crypto gambling platforms</li>
        <li>NFT speculation without utility</li>
        <li>Yield farming that mimics interest</li>
      </ul>

      <h2>Practical Guidance for Muslim Investors</h2>
      <p>If you choose to invest in cryptocurrency while adhering to Islamic principles, consider these guidelines from Shariah-compliant fintech platforms and scholars:</p>
      <ul>
        <li>Use established screening platforms like Zoya or IslamicCryptoRating</li>
        <li>Focus on use-case driven cryptocurrencies with real utility</li>
        <li>Avoid all forms of leverage and margin</li>
        <li>Invest only what you can afford to lose</li>
        <li>Consult a qualified Islamic finance scholar for personalized guidance</li>
      </ul>

      <p>The landscape of Islamic finance rulings on cryptocurrency continues to evolve. As the technology matures and scholars deepen their understanding, more refined guidance will emerge. For now, the conditional permissibility approach represents the most balanced scholarly position available.</p>
    `,
    references: [
      'AAOIFI Shariah Standards on Digital Currencies, 2023 Update',
      'Mufti Faraz Adam, "Bitcoin: Shariah Compliant?" — Amanah Finance, 2021',
      'Dr. Monzer Kahf, Islamic Economics and Finance, 2nd Ed.',
      'OIC Fiqh Academy Resolution No. 215 on Digital Assets',
      'Darul Iftaa UK: Cryptocurrency Fatwa Compendium, 2022'
    ]
  },
  {
    id: 'halal-mortgages-guide',
    title: 'Halal Mortgages Explained: How to Buy a Home Without Riba',
    description: 'A complete guide to Islamic home financing structures including Murabaha, Diminishing Musharakah, and Ijara — with a comparison of UK and US providers.',
    category: 'Banking & Loans',
    author: 'Sheikh Mufti Ibrahim Hassan',
    authorInitials: 'IH',
    date: 'November 28, 2024',
    readTime: '11 min read',
    verdict: 'Halal',
    icon: '🏠',
    tags: ['Mortgage', 'Home Finance', 'Riba'],
    featured: true,
    content: `
      <p>Owning a home is a fundamental aspiration for most people — and for Muslims, navigating this dream while avoiding riba (interest) has historically been one of the greatest financial challenges. Conventional mortgages, by definition, involve the payment of interest, making them impermissible under Islamic law.</p>

      <p>However, Islamic finance has developed sophisticated, Shariah-compliant alternatives that allow Muslim families to purchase homes without compromising their faith. This comprehensive guide explores the three main structures available today.</p>

      <h2>Why Conventional Mortgages Are Haram</h2>
      <p>The prohibition of riba is one of the most unambiguous rulings in Islamic law. Allah says in the Quran:</p>

      <blockquote>
        <p>"Allah has permitted trade and forbidden riba." — Surah Al-Baqarah, 2:275</p>
      </blockquote>

      <p>A conventional mortgage involves borrowing money from a bank and repaying it with interest. The bank profits from the time-value of money — a concept Islam explicitly rejects. The total interest paid on a 30-year mortgage can often exceed the original loan amount, making conventional home finance deeply problematic from an Islamic perspective.</p>

      <h2>Structure 1: Diminishing Musharakah (Declining Partnership)</h2>
      <p>This is the most popular and widely considered best Islamic home financing structure. It works as follows:</p>

      <div class="highlight-box">
        <strong>How it works:</strong> The bank and customer jointly purchase the home. The customer pays rent for the bank's share while gradually buying out that share. As ownership shifts, rent decreases. Eventually, the customer owns 100% of the property.
      </div>

      <h3>Step-by-Step Process</h3>
      <ol>
        <li><strong>Joint Purchase:</strong> Bank contributes 80-90%, customer contributes 10-20% deposit</li>
        <li><strong>Rental Payment:</strong> Customer pays fair market rent on the bank's share monthly</li>
        <li><strong>Unit Purchase:</strong> Customer buys additional units (portions) of ownership each month</li>
        <li><strong>Declining Balance:</strong> As ownership percentage increases, rental payments decrease</li>
        <li><strong>Full Ownership:</strong> After the agreed term, customer owns 100% of the property</li>
      </ol>

      <p>The key difference from a conventional mortgage: the bank's return comes from rental income (a legitimate economic activity) rather than interest (money lending). The risk of property damage and market fluctuation is also genuinely shared.</p>

      <h2>Structure 2: Murabaha (Cost-Plus Financing)</h2>
      <p>In a Murabaha arrangement, the bank purchases the property and immediately resells it to the customer at a marked-up price, with repayment in installments.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Bank genuinely purchases and takes ownership of the property first</li>
        <li>Resale price is agreed upfront and cannot be changed (no compounding)</li>
        <li>Customer owns the property from day one of the resale</li>
        <li>No penalty interest on late payments (though fees may apply)</li>
      </ul>

      <p>Critics note that the profit margin in Murabaha is often calculated with reference to LIBOR or equivalent benchmark rates, raising questions about whether this is truly distinct from interest in substance. However, most major Shariah boards accept Murabaha as valid when structured correctly.</p>

      <h2>Structure 3: Ijara (Leasing)</h2>
      <p>Ijara functions like a lease-to-own arrangement. The bank purchases the property and leases it to the customer for a fixed term, at the end of which ownership transfers.</p>

      <h3>Ijara wa-Iqtina (Lease and Ownership)</h3>
      <ul>
        <li>Bank purchases and retains legal ownership</li>
        <li>Customer pays monthly rent and a separate purchase commitment</li>
        <li>Rent is paid only for actual use of the property</li>
        <li>Ownership transfers at the end of the lease term</li>
      </ul>

      <h2>Comparing Islamic Mortgage Providers</h2>
      <p>The availability of Islamic home financing has grown significantly. Here are the major providers by region:</p>

      <h3>United Kingdom</h3>
      <ul>
        <li><strong>Al Rayan Bank</strong> — The UK's oldest and largest Islamic bank. Offers Diminishing Musharakah. Fully regulated by the FCA and PRA.</li>
        <li><strong>HSBC Amanah</strong> — Offers Shariah-compliant home finance through its Amanah division</li>
        <li><strong>Gatehouse Bank</strong> — Competitive rates on Diminishing Musharakah products</li>
      </ul>

      <h3>United States</h3>
      <ul>
        <li><strong>Guidance Residential</strong> — The largest Islamic mortgage provider in the US, using the Declining Balance Co-ownership model</li>
        <li><strong>UIF Corporation</strong> — Murabaha and Musharakah-based home financing</li>
        <li><strong>Ameen Housing Co-op</strong> — Community-based Islamic home financing</li>
      </ul>

      <h2>Common Questions</h2>
      <h3>Is Islamic mortgage always more expensive?</h3>
      <p>Not necessarily. While the structure differs, the total cost is often comparable to conventional mortgages. The key is shopping around and comparing the Effective Annual Rate (EAR) across providers. Some studies show Islamic mortgages can be cost-competitive or even cheaper over the full term.</p>

      <h3>Are Islamic mortgages Shariah-certified?</h3>
      <p>Reputable Islamic mortgage providers have their products reviewed and certified by independent Shariah Supervisory Boards composed of qualified Islamic scholars. Always check for this certification before proceeding.</p>

      <h2>Conclusion</h2>
      <p>Halal home financing is not only possible — it is increasingly accessible, competitive, and well-regulated. Whether you choose Diminishing Musharakah, Murabaha, or Ijara, the key is working with a reputable, Shariah-certified institution and understanding the specific structure of your agreement.</p>

      <p>The path to home ownership without riba requires more research than a conventional mortgage, but for Muslims committed to Islamic financial principles, the peace of mind is worth it. Consult with both a qualified Islamic finance adviser and an independent Shariah scholar before making your decision.</p>
    `,
    references: [
      'AAOIFI Shariah Standard No. 12: Sharikah (Musharakah) and Modern Corporations',
      'AAOIFI Shariah Standard No. 9: Ijarah and Ijarah Muntahia Bittamleek',
      'Al Rayan Bank: Guide to Home Purchase Plans, 2024',
      'Guidance Residential: Understanding the Co-ownership Model, 2023',
      'Islamic Finance Council UK (UKIFC): Retail Islamic Finance Report, 2024'
    ]
  },
  {
    id: 'halal-stocks-screening',
    title: 'How to Screen Stocks for Halal Investing: A Step-by-Step Guide',
    description: 'Learn the exact criteria used by Islamic scholars and Shariah-compliant funds to evaluate whether individual stocks are permissible for Muslim investors.',
    category: 'Investments',
    author: 'Ustadh Bilal Philips',
    authorInitials: 'BP',
    date: 'November 15, 2024',
    readTime: '8 min read',
    verdict: 'Halal',
    icon: '📈',
    tags: ['Stocks', 'Screening', 'Portfolio'],
    featured: false,
    content: `
      <p>Investing in the stock market is not inherently haram in Islamic law. Owning a share of a legitimate business — participating in its profits and losses — is fundamentally consistent with the Islamic economic model that encourages risk-sharing and the productive use of capital.</p>

      <p>However, the modern stock market contains companies across every industry, including many involved in prohibited activities. The challenge for Muslim investors is distinguishing the permissible from the impermissible — and this is where stock screening comes in.</p>

      <h2>The Two Categories of Screening</h2>
      <p>Islamic stock screening involves two distinct levels of analysis:</p>

      <div class="highlight-box">
        <strong>1. Business Activity Screening (Qualitative)</strong> — Does the company's primary business involve prohibited activities?<br><br>
        <strong>2. Financial Ratio Screening (Quantitative)</strong> — Even if the business is permissible, does the company's financial structure comply with Islamic finance principles?
      </div>

      <h2>Step 1: Business Activity Screening</h2>
      <p>The first and most fundamental test. A company must be immediately excluded if its primary business involves:</p>

      <h3>Absolutely Prohibited (Hard Exclusions)</h3>
      <ul>
        <li>Alcohol production, distribution, or retail</li>
        <li>Pork and non-halal meat production</li>
        <li>Conventional banking and interest-based financial services</li>
        <li>Gambling and betting operations</li>
        <li>Adult entertainment and pornography</li>
        <li>Weapons manufacturing (particularly weapons targeting civilians)</li>
        <li>Tobacco products</li>
      </ul>

      <h3>The "Tolerable" Grey Areas</h3>
      <p>Most Shariah boards allow investment in companies where prohibited activities represent a minor portion of revenue, subject to financial screening. A hotel chain that earns 3% revenue from alcohol may be permissible; one that earns 30% would not be.</p>

      <blockquote>
        <p>"The principle is that if the haram activity is incidental and not the core of the business, scholars have generally permitted investment with purification of the relevant portion of dividends." — AAOIFI Shariah Standard No. 21</p>
      </blockquote>

      <h2>Step 2: Financial Ratio Screening</h2>
      <p>Even companies with permissible business activities must pass financial filters to ensure they are not deeply involved in interest-based financing. The three key ratios are:</p>

      <h3>1. Debt-to-Assets Ratio (Leverage Screen)</h3>
      <ul>
        <li>Interest-bearing debt must be less than 33% of total assets (most common standard)</li>
        <li>Some scholars use 30% or even 25% as their threshold</li>
        <li>Rationale: Excessive debt indicates heavy reliance on riba-based financing</li>
      </ul>

      <h3>2. Interest Income Screen</h3>
      <ul>
        <li>Interest income (and other non-compliant income) must be less than 5% of total revenue</li>
        <li>Even Apple and Amazon earn some interest on their cash reserves — this small amount is generally tolerated</li>
        <li>Dividends attributable to this portion should be purified (donated to charity)</li>
      </ul>

      <h3>3. Receivables Screen</h3>
      <ul>
        <li>Accounts receivable and cash must be less than 70-90% of total assets (depending on the standard used)</li>
        <li>This ensures the stock represents ownership in real assets, not just paper claims</li>
      </ul>

      <h2>Step 3: Dividend Purification</h2>
      <p>Even after passing screening, if a company earns some prohibited income, the investor must purify their dividends. This involves:</p>
      <ol>
        <li>Calculating the percentage of non-compliant income to total revenue</li>
        <li>Applying that percentage to your dividend received</li>
        <li>Donating that amount to charity (without expecting reward)</li>
      </ol>

      <p>For example, if a company earns 2% of revenue from interest and you receive £500 in dividends, you would donate £10 to charity as purification.</p>

      <h2>Useful Screening Tools</h2>
      <p>Several platforms make Islamic stock screening accessible:</p>
      <ul>
        <li><strong>Zoya</strong> — iOS/Android app with AAOIFI-compliant screening of US stocks</li>
        <li><strong>Musaffa</strong> — Comprehensive global stock screening platform</li>
        <li><strong>IdealRatings</strong> — Institutional-grade Islamic index construction</li>
        <li><strong>Saturna Capital</strong> — Offers pre-screened halal mutual funds (AMANA funds)</li>
        <li><strong>Wahed Invest</strong> — Robo-advisor with fully Shariah-compliant portfolios</li>
      </ul>

      <h2>Major Islamic Indices</h2>
      <p>For passive investors, several major indices apply Islamic screening:</p>
      <ul>
        <li>MSCI Islamic Index Series (widely used by Islamic ETFs)</li>
        <li>Dow Jones Islamic Market Index (DJIMI)</li>
        <li>S&P Shariah Indices</li>
        <li>FTSE Global Islamic Index Series</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Halal stock investing is achievable with the right tools and knowledge. The key is applying both qualitative business screening and quantitative financial ratio screening consistently. Use established screening platforms, consult Shariah-compliant fund methodologies, and when in doubt, consult a qualified Islamic finance scholar.</p>

      <p>The reward is the ability to grow your wealth in a manner consistent with your faith — participating in the success of halal businesses while maintaining your Islamic financial principles.</p>
    `,
    references: [
      'AAOIFI Shariah Standard No. 21: Financial Papers (Stocks)',
      'DJIMI Methodology and Screening Criteria, S&P Global, 2023',
      'Mufti Faraz Adam: Shariah Screening of Equities, Amanah Finance Consultancy',
      'MSCI Islamic Index Methodology, MSCI Inc., 2024',
      'Zoya App: Shariah Screening Methodology Documentation, 2024'
    ]
  },
  {
    id: 'zakat-on-investments',
    title: 'Zakat on Investments: Stocks, Gold, Property, and Crypto',
    description: 'A detailed guide on how to calculate and pay zakat on different types of investments, including modern asset classes that classical scholars never encountered.',
    category: 'Zakat & Charity',
    author: 'Mufti Menk',
    authorInitials: 'MM',
    date: 'October 30, 2024',
    readTime: '7 min read',
    verdict: 'Halal',
    icon: '💰',
    tags: ['Zakat', 'Calculation', 'Investments'],
    featured: false,
    content: `
      <p>Zakat is one of the five pillars of Islam — an obligatory act of worship that purifies wealth and redistributes it to those in need. While the classical fiqh texts provide clear guidance on zakat for traditional assets like gold, silver, and trade goods, modern Muslims face the challenge of applying these principles to contemporary investment vehicles.</p>

      <p>This guide provides clear, scholarly-backed guidance on zakat calculation for the most common modern investment types.</p>

      <h2>The Basic Rules of Zakat on Wealth</h2>
      <p>Before examining specific assets, let's establish the foundational principles:</p>

      <div class="highlight-box">
        <strong>Nisab (Minimum Threshold):</strong> Zakat is only due when your total wealth exceeds the nisab. The nisab is equivalent to 85 grams of gold or 595 grams of silver (as of writing, approximately £4,500 or $5,500 — check current gold prices).<br><br>
        <strong>Hawl (Lunar Year):</strong> The wealth must have been held above the nisab for one full Islamic lunar year (approximately 354 days).<br><br>
        <strong>Rate:</strong> 2.5% of all zakatable wealth is due annually.
      </div>

      <h2>Zakat on Gold and Silver</h2>
      <p>Gold and silver are the most straightforward assets for zakat calculation:</p>
      <ul>
        <li><strong>Physical gold/silver:</strong> 2.5% of the current market value</li>
        <li><strong>Gold jewelry worn regularly:</strong> Scholars differ — Hanafi madhab says zakat is due on all gold/silver; other madhabs exempt jewelry in regular use</li>
        <li><strong>Gold ETFs:</strong> Treated as physical gold — 2.5% of market value</li>
      </ul>

      <h2>Zakat on Stocks</h2>
      <p>This is one of the most complex areas in contemporary zakat scholarship. There are two main scholarly positions:</p>

      <h3>Position 1: Zakat on Trade Value (Majority View)</h3>
      <p>If you are an active trader (regularly buying and selling stocks for profit), your entire stock portfolio is treated as trade goods. Zakat is due at 2.5% of the market value of all shares held at your zakat date.</p>

      <h3>Position 2: Zakat on Underlying Assets (Minority View)</h3>
      <p>If you are a long-term investor, some scholars say you should look through to the company's underlying zakatable assets (cash, receivables, inventory) and pay zakat only on your proportional share of those.</p>

      <blockquote>
        <p>"The scholarly consensus leans toward treating stocks as trade goods and paying 2.5% on their market value — this is simpler and more prudent." — Sheikh Yusuf DeLorenzo, Shariah Board, Dow Jones Islamic Market Index</p>
      </blockquote>

      <p><strong>Practical guidance:</strong> Most modern Islamic scholars and zakat calculators recommend paying 2.5% on the current market value of your stock portfolio on your designated zakat date. This is the safest and most straightforward approach.</p>

      <h2>Zakat on Cryptocurrency</h2>
      <p>Cryptocurrency is treated similarly to trade goods by most contemporary scholars:</p>
      <ul>
        <li>2.5% of the current market value of all cryptocurrency holdings</li>
        <li>Value is calculated on your zakat date using the prevailing market rate</li>
        <li>Holdings must have exceeded the nisab for one full lunar year</li>
        <li>Staking rewards and mining income: treated as income and subject to zakat immediately upon receipt (no hawl required, per some scholars)</li>
      </ul>

      <h2>Zakat on Property</h2>
      <p>Real estate zakat depends heavily on the purpose of ownership:</p>

      <h3>Personal Residence</h3>
      <p>Your primary home is <strong>not</strong> subject to zakat. This is a clear, unanimous ruling across all madhabs.</p>

      <h3>Rental Property (Investment)</h3>
      <ul>
        <li>The property itself (the bricks and mortar) is NOT subject to zakat</li>
        <li>Rental income received IS subject to zakat once you have held it above the nisab for a hawl</li>
        <li>Cash savings from rental income accumulate with other cash for zakat purposes</li>
      </ul>

      <h3>Property Held for Resale (Trade Goods)</h3>
      <ul>
        <li>If you purchased a property explicitly to resell it, it is treated as trade goods</li>
        <li>2.5% of the current market value is due as zakat</li>
      </ul>

      <h2>Zakat on Pension and Retirement Funds</h2>
      <p>This is another area of scholarly discussion:</p>
      <ul>
        <li>If you have full access and control of the funds: treat as regular savings, pay 2.5%</li>
        <li>If funds are locked until retirement age: many scholars say zakat is due only when funds become accessible</li>
        <li>Company pension contributions: consult a scholar for personalized guidance</li>
      </ul>

      <h2>How to Calculate Your Total Zakat</h2>
      <ol>
        <li>Choose a consistent zakat date (e.g., the first day of Ramadan each year)</li>
        <li>List all zakatable assets: cash, gold, stocks, crypto, business inventory, receivables</li>
        <li>Deduct short-term liabilities (bills due within one month, immediate debts)</li>
        <li>If the net amount exceeds the nisab, pay 2.5%</li>
        <li>Ensure payment reaches eligible recipients (the eight categories mentioned in Surah At-Tawbah, 9:60)</li>
      </ol>

      <h2>Recommended Zakat Calculators</h2>
      <ul>
        <li>National Zakat Foundation (NZF) — UK-based, scholar-supervised calculator</li>
        <li>Zakat Foundation of America</li>
        <li>Islamic Relief Zakat Calculator</li>
        <li>Muslim Aid Zakat Calculator</li>
      </ul>

      <p>Remember: when in doubt about whether an asset is zakatable, it is better to pay zakat on it. The Prophet Muhammad ﷺ said, "Give zakat on your wealth, for it is a purification that purifies you." — Ahmad</p>
    `,
    references: [
      'AAOIFI Shariah Standard No. 35: Zakah',
      'Sheikh Yusuf Al-Qaradawi: Fiqh al-Zakah (Jurisprudence of Zakat)',
      'National Zakat Foundation UK: Contemporary Zakat Issues, 2023',
      'Mufti Faraz Adam: Modern Day Zakat Issues, Amanah Finance, 2022',
      'Surah At-Tawbah, 9:60 — The Eight Categories of Zakat Recipients'
    ]
  },
  {
    id: 'day-trading-haram',
    title: 'Is Day Trading Haram? Understanding Maysir in Modern Markets',
    description: 'Many Muslims engage in day trading without realizing it may cross into forbidden territory. We examine the Islamic legal perspective on short-term speculative trading.',
    category: 'Halal vs Haram',
    author: 'Dr. Yusuf Al-Qardawi',
    authorInitials: 'YQ',
    date: 'October 15, 2024',
    readTime: '6 min read',
    verdict: 'Haram',
    icon: '📉',
    tags: ['Day Trading', 'Maysir', 'Speculation'],
    featured: false,
    content: `
      <p>Day trading — the practice of buying and selling financial instruments within the same trading day to profit from short-term price movements — has exploded in popularity since the rise of commission-free trading apps. For Muslim investors, the question is urgent: does this practice cross into the territory of maysir (gambling) that Islam explicitly prohibits?</p>

      <p>After careful analysis of the relevant Islamic legal principles, the scholarly majority's position is clear: pure speculative day trading, as practiced by most retail traders, is <strong>not permissible</strong> in Islamic law.</p>

      <h2>What is Day Trading?</h2>
      <p>Day trading involves:</p>
      <ul>
        <li>Opening and closing positions within the same trading session</li>
        <li>Profiting primarily from price fluctuations, not business performance</li>
        <li>Often using technical analysis, charts, and market momentum</li>
        <li>Frequently using leverage (borrowed money) to amplify positions</li>
        <li>Creating no real economic value — wealth transfers from losers to winners</li>
      </ul>

      <h2>The Islamic Legal Analysis</h2>

      <h3>1. The Maysir Problem</h3>
      <p>The Quran explicitly prohibits maysir:</p>

      <blockquote>
        <p>"O you who have believed, indeed, intoxicants, gambling, [sacrificing on] stone altars, and divining arrows are but defilement from the work of Satan, so avoid it that you may be successful." — Surah Al-Maidah, 5:90</p>
      </blockquote>

      <p>Day trading shares the core characteristic of gambling: <strong>one party's financial gain is directly another party's loss</strong>, without any creation of underlying value. The day trader who profits does so because another trader on the other side of the trade loses. This zero-sum dynamic is fundamentally similar to gambling.</p>

      <h3>2. The Gharar Problem</h3>
      <p>Day traders by definition are speculating on short-term price movements that are fundamentally unpredictable. Studies consistently show that 70-90% of day traders lose money. The excessive uncertainty (gharar) in these transactions, combined with the intent to profit purely from price speculation, makes this impermissible.</p>

      <h3>3. The Riba Problem</h3>
      <p>Most day traders use margin accounts — borrowing money from brokers to amplify their trading positions. This borrowed money comes with interest charges (financing fees), making leveraged day trading doubly impermissible: it involves both maysir AND riba.</p>

      <div class="highlight-box">
        <strong>Scholar's Verdict:</strong> The Islamic Fiqh Academy, AAOIFI, and the majority of contemporary Islamic finance scholars consider pure speculative day trading to be impermissible due to the combination of maysir (speculation), gharar (excessive uncertainty), and the frequent use of riba-based leverage.
      </div>

      <h2>Is ALL Short-Term Trading Haram?</h2>
      <p>This is where important nuance is required. Not all short-term stock activity is haram:</p>

      <h3>Generally Permissible (if other conditions are met)</h3>
      <ul>
        <li>Purchasing shares in Shariah-compliant companies for genuine ownership</li>
        <li>Selling shares when you believe the business is overvalued (based on fundamentals)</li>
        <li>Responding to material company news or changes in business outlook</li>
        <li>Rebalancing a portfolio based on investment principles</li>
      </ul>

      <h3>Generally Impermissible</h3>
      <ul>
        <li>Trading solely based on chart patterns without regard to business fundamentals</li>
        <li>Momentum trading — buying simply because the price is going up</li>
        <li>Short selling (selling shares you don't own)</li>
        <li>Forex trading with overnight interest (swap fees)</li>
        <li>CFDs (Contracts for Difference) — these are not genuine ownership</li>
        <li>Options and futures (in most forms)</li>
      </ul>

      <h2>The Difference Between Investing and Speculation</h2>
      <p>Islam encourages the productive use of capital and legitimate risk-taking in business. The key distinction:</p>

      <ul>
        <li><strong>Investing:</strong> You become a part-owner of a real business. You share in its genuine profits and losses. The value of your investment is tied to real economic activity.</li>
        <li><strong>Speculation:</strong> You are betting on price movements. Your profit or loss has no connection to underlying economic value creation. You contribute nothing to the business.</li>
      </ul>

      <h2>What Should Muslim Investors Do Instead?</h2>
      <p>If you are attracted to day trading, consider these Shariah-compliant alternatives:</p>

      <ol>
        <li><strong>Long-term value investing</strong> in Shariah-screened stocks (minimum 1-year holding period recommended)</li>
        <li><strong>Islamic ETFs</strong> tracking MSCI Islamic or Dow Jones Islamic indices</li>
        <li><strong>Sukuk (Islamic bonds)</strong> for fixed-income exposure</li>
        <li><strong>Real estate investment</strong> through REITs or direct property</li>
        <li><strong>Halal business investment</strong> through ethical crowdfunding platforms</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The evidence against pure speculative day trading from an Islamic perspective is compelling. The maysir principle alone is sufficient to prohibit most day trading activity, and when combined with the widespread use of leverage (riba) and extreme uncertainty (gharar), the case becomes overwhelming.</p>

      <p>This does not mean Muslim investors cannot participate in financial markets — quite the opposite. Islam fully supports productive investment in legitimate businesses. The key is ensuring your market activity is rooted in genuine ownership and business participation, not pure price speculation.</p>

      <p>May Allah guide us to wealth that is halal, blessed, and beneficial to our communities.</p>
    `,
    references: [
      'Islamic Fiqh Academy Resolution on Financial Markets, 1997',
      'AAOIFI Shariah Standard No. 21: Financial Papers (Stocks)',
      'Dr. Mohd Daud Bakar: Islamic Finance: Principles and Practices',
      'Surah Al-Maidah, 5:90 — Quran',
      'SEC Study on Day Trading Outcomes: 85% of Day Traders Lose Money, 2023'
    ]
  },
  {
    id: 'islamic-savings-accounts',
    title: 'Islamic Savings Accounts: How They Work and the Best Options in 2024',
    description: 'Discover how Shariah-compliant savings accounts use profit-sharing instead of interest, and compare the best Islamic bank savings products available today.',
    category: 'Banking & Loans',
    author: 'Sheikh Mufti Ibrahim Hassan',
    authorInitials: 'IH',
    date: 'September 22, 2024',
    readTime: '7 min read',
    verdict: 'Halal',
    icon: '🏦',
    tags: ['Savings', 'Islamic Banking', 'Mudarabah'],
    featured: false,
    content: `
      <p>Keeping your money in a conventional savings account might seem like a minor matter, but for observant Muslims, the interest paid on such accounts is riba — strictly forbidden in Islamic law. Fortunately, Islamic banks have developed Shariah-compliant savings products that allow Muslims to save money and earn a return without violating their religious principles.</p>

      <h2>The Problem with Conventional Savings Accounts</h2>
      <p>When you deposit money in a conventional savings account, the bank:</p>
      <ol>
        <li>Lends your money to other customers at a higher interest rate</li>
        <li>Pays you a predetermined percentage of your balance as interest</li>
        <li>Keeps the difference as profit</li>
      </ol>
      <p>This is the classic riba model — you earn money purely from the time-value of your money, without taking any risk or participating in any productive economic activity.</p>

      <h2>How Islamic Savings Accounts Work</h2>
      <p>Islamic savings accounts are typically structured using one of two contracts:</p>

      <h3>1. Mudarabah (Profit-Sharing)</h3>
      <p>The most common structure for Islamic savings accounts:</p>
      <ul>
        <li>You provide capital (as the Rabb al-Mal — capital provider)</li>
        <li>The bank manages the funds (as the Mudarib — entrepreneur)</li>
        <li>Profits are shared according to a pre-agreed ratio (e.g., 70% to customer, 30% to bank)</li>
        <li>If the bank makes a loss, you bear the financial loss; the bank loses its time and effort</li>
        <li>The return is not guaranteed — it varies based on actual bank performance</li>
      </ul>

      <div class="highlight-box">
        <strong>Key distinction from interest:</strong> In Mudarabah, your return is genuinely linked to real economic performance. If the bank's investments perform well, you earn more. If they perform poorly, you earn less (or potentially nothing). This genuine risk-sharing is what makes it Shariah-compliant.
      </div>

      <h3>2. Wadiah (Safekeeping)</h3>
      <p>A simpler structure for current/checking accounts:</p>
      <ul>
        <li>You deposit money for safekeeping (amanah)</li>
        <li>The bank guarantees the return of your full deposit</li>
        <li>The bank may use the funds but with your permission</li>
        <li>The bank may (but is not obligated to) give you a gift (hibah) from profits</li>
        <li>You cannot demand a specific return — any payment is voluntary from the bank</li>
      </ul>

      <h2>What to Look for in an Islamic Savings Account</h2>
      <ul>
        <li><strong>Shariah Supervisory Board:</strong> Ensure the bank has an independent, qualified SSB certifying its products</li>
        <li><strong>Profit-sharing ratio:</strong> Compare the expected profit rates across providers</li>
        <li><strong>Deposit protection:</strong> In the UK, FSCS protection applies to Islamic bank deposits like any other</li>
        <li><strong>Access:</strong> Some accounts have notice periods; others offer instant access</li>
        <li><strong>Transparency:</strong> The bank should clearly explain how profits are calculated and distributed</li>
      </ul>

      <h2>Best Islamic Savings Accounts in 2024</h2>

      <h3>United Kingdom</h3>
      <ul>
        <li><strong>Al Rayan Bank:</strong> Expected profit rate around 5.0% on fixed-term deposits. UK's oldest Islamic bank. FSCS protected up to £85,000.</li>
        <li><strong>Gatehouse Bank:</strong> Competitive rates on notice and fixed-term savings. Mudarabah-based.</li>
        <li><strong>Abu Dhabi Islamic Bank UK:</strong> Profit-sharing savings with competitive rates for larger deposits.</li>
      </ul>

      <h3>United States</h3>
      <ul>
        <li><strong>University Islamic Financial:</strong> Profit-sharing savings products for US customers</li>
        <li><strong>Saturna Capital:</strong> Shariah-compliant investment accounts (not traditional savings)</li>
      </ul>

      <h3>Global Options</h3>
      <ul>
        <li><strong>Wahed Invest:</strong> Digital Islamic investment accounts available globally</li>
        <li><strong>Niyah:</strong> UK-based Islamic financial super-app with savings features</li>
      </ul>

      <h2>Understanding Profit Rate vs. Interest Rate</h2>
      <p>A common question: "If the profit rate on my Islamic savings account is similar to the interest rate on a conventional account, is it really different?"</p>
      <p>Yes — the key difference is not the number itself, but the contractual structure:</p>
      <ul>
        <li>Interest: Guaranteed, predetermined, not linked to actual performance</li>
        <li>Profit: Variable, based on actual bank performance, with genuine risk-sharing</li>
      </ul>
      <p>In practice, Islamic banks do refer to conventional benchmark rates (like SONIA in the UK) when setting their expected profit rates — this is a practical market reality that most scholars accept as long as the underlying contract structure is genuinely Shariah-compliant.</p>

      <h2>Conclusion</h2>
      <p>Islamic savings accounts provide a genuine, Shariah-compliant alternative to conventional interest-bearing accounts. With fully regulated Islamic banks now operating in major markets, there is no reason for Muslims to keep their savings in conventional riba-based accounts. The returns are competitive, the deposits are protected, and most importantly, your savings are managed in accordance with Islamic principles.</p>
    `,
    references: [
      'AAOIFI Shariah Standard No. 3: Mudarabah',
      'Al Rayan Bank: Understanding Islamic Savings, 2024',
      'Islamic Finance Council UK: Consumer Islamic Finance Guide',
      'Financial Services Compensation Scheme: Islamic Banks and FSCS, 2023',
      'Bank of England: Islamic Finance in the United Kingdom, 2022'
    ]
  },
  {
    id: 'halal-investment-funds',
    title: 'The Best Halal Investment Funds and ETFs for Muslim Investors in 2024',
    description: 'A curated guide to Shariah-compliant ETFs, mutual funds, and robo-advisors — with performance data and fee comparison to help you choose wisely.',
    category: 'Investments',
    author: 'Ustadh Bilal Philips',
    authorInitials: 'BP',
    date: 'September 8, 2024',
    readTime: '10 min read',
    verdict: 'Halal',
    icon: '💹',
    tags: ['ETF', 'Mutual Funds', 'Portfolio'],
    featured: false,
    content: `
      <p>For Muslim investors who want market exposure without the burden of individually screening each stock, Shariah-compliant funds and ETFs offer an elegant solution. These products do the hard work of screening for you, maintaining portfolios that comply with Islamic finance principles.</p>

      <h2>Types of Halal Funds Available</h2>
      <p>The Islamic finance industry has developed several types of collective investment vehicles:</p>

      <h3>1. Islamic ETFs (Exchange-Traded Funds)</h3>
      <p>ETFs that track Islamic indices, automatically excluding non-compliant companies. They offer:</p>
      <ul>
        <li>Low fees (typically 0.4-0.85% annual expense ratio)</li>
        <li>Instant diversification</li>
        <li>Stock exchange liquidity</li>
        <li>Transparency of holdings</li>
      </ul>

      <h3>2. Islamic Mutual Funds</h3>
      <p>Actively managed funds with Islamic mandates, run by professional fund managers. Higher fees but potential for outperformance through active security selection.</p>

      <h3>3. Islamic Robo-Advisors</h3>
      <p>Automated investment platforms that build and manage Shariah-compliant portfolios based on your risk profile.</p>

      <h2>Top Islamic ETFs</h2>

      <h3>iShares MSCI World Islamic UCITS ETF (ISWD)</h3>
      <ul>
        <li><strong>Index:</strong> MSCI World Islamic Index</li>
        <li><strong>Expense Ratio:</strong> 0.60%</li>
        <li><strong>Holdings:</strong> ~700 global developed market stocks</li>
        <li><strong>Available on:</strong> London Stock Exchange</li>
        <li><strong>Shariah Advisor:</strong> Ratings Intelligence Partners</li>
      </ul>

      <h3>iShares MSCI Emerging Markets Islamic UCITS ETF (ISEM)</h3>
      <ul>
        <li><strong>Index:</strong> MSCI Emerging Markets Islamic Index</li>
        <li><strong>Expense Ratio:</strong> 0.85%</li>
        <li><strong>Exposure:</strong> Shariah-compliant EM stocks</li>
        <li><strong>Available on:</strong> London Stock Exchange</li>
      </ul>

      <h3>Wahed FTSE USA Shariah ETF (HLAL)</h3>
      <ul>
        <li><strong>Index:</strong> FTSE USA Shariah Index</li>
        <li><strong>Expense Ratio:</strong> 0.50%</li>
        <li><strong>Exchange:</strong> NASDAQ</li>
        <li><strong>Focus:</strong> US large-cap Shariah-compliant stocks</li>
      </ul>

      <h3>SP Funds S&P 500 Sharia Industry Exclusions ETF (SPUS)</h3>
      <ul>
        <li><strong>Index:</strong> S&P 500 Shariah</li>
        <li><strong>Expense Ratio:</strong> 0.45%</li>
        <li><strong>Exchange:</strong> NYSE Arca</li>
        <li><strong>Advantage:</strong> Lowest-cost Shariah ETF available in the US</li>
      </ul>

      <h2>Top Islamic Mutual Funds</h2>

      <h3>AMANA Income Fund (AMANX)</h3>
      <ul>
        <li><strong>Manager:</strong> Saturna Capital</li>
        <li><strong>Expense Ratio:</strong> 1.04%</li>
        <li><strong>Strategy:</strong> Dividend-focused, large-cap Islamic stocks</li>
        <li><strong>Track Record:</strong> One of the oldest Islamic funds in the US (est. 1986)</li>
      </ul>

      <h3>AMANA Growth Fund (AMAGX)</h3>
      <ul>
        <li><strong>Manager:</strong> Saturna Capital</li>
        <li><strong>Expense Ratio:</strong> 0.95%</li>
        <li><strong>Strategy:</strong> Growth-oriented Islamic stock selection</li>
      </ul>

      <h2>Islamic Robo-Advisors</h2>

      <h3>Wahed Invest</h3>
      <ul>
        <li>Available in US, UK, and multiple other markets</li>
        <li>Fully Shariah-compliant, supervised by independent Shariah board</li>
        <li>Annual fee: 0.39-0.49% depending on balance</li>
        <li>Invests in a mix of Islamic ETFs, Sukuk, and gold</li>
        <li>Minimum investment: $100 / £100</li>
      </ul>

      <h3>Niyah (UK)</h3>
      <ul>
        <li>UK-focused Islamic investment app</li>
        <li>Certified by scholars at Darul Iftaa Birmingham</li>
        <li>Transparent screening methodology</li>
        <li>Competitive annual fees</li>
      </ul>

      <h2>How to Choose the Right Fund</h2>
      <p>Consider these factors when selecting an Islamic investment fund:</p>

      <ol>
        <li><strong>Shariah Certification:</strong> Who is the Shariah supervisory board? Are they reputable, independent scholars?</li>
        <li><strong>Expense Ratio:</strong> Fees compound over time — lower is generally better for long-term investors</li>
        <li><strong>Diversification:</strong> Geographic and sector diversification reduces concentration risk</li>
        <li><strong>Liquidity:</strong> ETFs offer daily liquidity; some mutual funds have redemption restrictions</li>
        <li><strong>Track Record:</strong> How has the fund performed over 3, 5, and 10 year periods?</li>
        <li><strong>Dividend Purification:</strong> Does the fund handle purification automatically?</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The halal investment fund universe has expanded dramatically over the past decade. Whether you prefer passive index-tracking ETFs, actively managed mutual funds, or automated robo-advisory services, there are excellent Shariah-compliant options available. Start with low-cost ETFs if you are beginning your investment journey, and consider adding specialized funds as your portfolio grows.</p>
    `,
    references: [
      'iShares by BlackRock: Islamic ETF Product Documentation, 2024',
      'Saturna Capital: AMANA Funds Annual Report, 2023',
      'Wahed Invest: Shariah Supervisory Board Certification, 2024',
      'FTSE Russell: FTSE Shariah Index Series Methodology, 2024',
      'S&P Global: S&P Shariah Indices Methodology, 2024'
    ]
  },
  {
    id: 'riba-in-everyday-life',
    title: 'Riba in Everyday Life: Recognizing and Avoiding Interest in Modern Finance',
    description: 'Most Muslims know riba is forbidden, but many encounter it unknowingly in credit cards, buy-now-pay-later schemes, and even some insurance products. A practical guide.',
    category: 'Halal vs Haram',
    author: 'Dr. Yusuf Al-Qardawi',
    authorInitials: 'YQ',
    date: 'August 20, 2024',
    readTime: '8 min read',
    verdict: 'Haram',
    icon: '⚠️',
    tags: ['Riba', 'Credit Cards', 'BNPL'],
    featured: false,
    content: `
      <p>Riba — the Arabic term broadly translated as "interest" or "usury" — is one of the most serious prohibitions in Islamic law. The Quran warns that those who deal in riba are at war with Allah and His Messenger (2:279). Yet in modern life, riba is embedded so deeply in financial systems that many Muslims encounter it without even realizing it.</p>

      <p>This guide helps you identify riba in its many modern forms and provides practical alternatives for each.</p>

      <h2>What Exactly is Riba?</h2>
      <p>Islamic scholars identify two main types of riba:</p>

      <h3>Riba al-Nasiah (Interest on Loans)</h3>
      <p>Any predetermined increase on a loan over and above the principal amount. This is the most common form of riba in modern life — the interest charged on mortgages, car loans, credit cards, and personal loans.</p>

      <h3>Riba al-Fadl (Exchange Riba)</h3>
      <p>The exchange of goods of the same type in unequal quantities, or with a time delay. This is more relevant to commodity trading and currency exchange.</p>

      <blockquote>
        <p>"Allah has permitted trade and has forbidden riba. Whoever receives an admonition from his Lord and desists may have what has passed, and his affair rests with Allah. But whoever returns to it — those are the companions of the Fire; they will abide therein eternally." — Surah Al-Baqarah, 2:275</p>
      </blockquote>

      <h2>Riba in Credit Cards</h2>
      <p>This is where many Muslims unknowingly engage with riba. The key distinction:</p>

      <div class="highlight-box">
        <strong>Halal use:</strong> Using a credit card and paying the FULL balance before the due date. You are essentially using the card as a deferred payment tool with no interest charged.<br><br>
        <strong>Haram use:</strong> Carrying a balance from month to month, thereby paying interest on the outstanding amount. Any interest payment — even a small one — is riba.
      </div>

      <h3>The Annual Fee Question</h3>
      <p>Annual fees on credit cards are permissible — they are a fee for a service, not interest on a loan. Many reward cards charge annual fees, and using such cards (while paying in full each month) is generally considered permissible.</p>

      <h3>Cashback and Rewards</h3>
      <p>Cashback and points rewards earned from spending are generally considered permissible by most contemporary scholars, as they are promotional incentives from the card company, not interest income.</p>

      <h2>Riba in Buy-Now-Pay-Later (BNPL)</h2>
      <p>The explosion of BNPL services (Klarna, Afterpay, Affirm, etc.) has created new riba concerns:</p>

      <ul>
        <li><strong>0% installment plans:</strong> If there is genuinely no interest or hidden fees charged for the installment period — permissible</li>
        <li><strong>Deferred interest plans:</strong> If interest accrues during the deferred period and is charged if not paid in full by the deadline — <strong>haram</strong></li>
        <li><strong>Late payment fees:</strong> If late fees function as penalty interest — <strong>haram</strong></li>
      </ul>

      <p>Read the fine print carefully. Many "0%" plans charge deferred interest that can be substantial.</p>

      <h2>Riba in Insurance (Takaful vs. Conventional)</h2>
      <p>Conventional insurance has elements that Islamic scholars consider impermissible:</p>
      <ul>
        <li><strong>Gharar (uncertainty):</strong> You pay premiums without knowing if you will ever claim</li>
        <li><strong>Maysir (gambling):</strong> The insurance company profits when policyholders don't claim</li>
        <li><strong>Riba:</strong> Conventional insurers invest premium income in interest-bearing instruments</li>
      </ul>

      <p>However, most contemporary Islamic scholars make a pragmatic exception for mandatory insurances (like car insurance required by law) while encouraging Muslims to use Takaful (Islamic insurance) alternatives where available.</p>

      <h2>Riba in Overdrafts and Unauthorized Borrowing</h2>
      <p>Overdraft facilities that charge interest are clearly riba. Options to consider:</p>
      <ul>
        <li>Maintain a sufficient buffer in your account to avoid overdrafts</li>
        <li>Use Islamic bank accounts that don't offer interest-based overdrafts</li>
        <li>If facing financial difficulty, seek qard hasan (benevolent loans) from family, community, or Islamic charitable organizations</li>
      </ul>

      <h2>Riba in Student Loans</h2>
      <p>This is a nuanced area:</p>
      <ul>
        <li><strong>UK-style income-contingent repayments:</strong> Some scholars consider these closer to a graduate tax than a loan — the repayment amount is tied to income, not to a fixed debt with compound interest</li>
        <li><strong>US student loans:</strong> These are clearly interest-bearing and most scholars would advise seeking alternatives (scholarships, halal financing, etc.)</li>
      </ul>

      <h2>Practical Steps to Minimize Riba in Your Life</h2>
      <ol>
        <li>Audit your current financial products — identify any interest-bearing elements</li>
        <li>Pay credit card balances in full every month, without exception</li>
        <li>Switch to an Islamic bank for your main savings and current accounts</li>
        <li>When taking out a loan, explore Islamic finance alternatives first</li>
        <li>For insurance, explore Takaful options in your region</li>
        <li>Build an emergency fund to avoid needing interest-based credit in emergencies</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Completely avoiding riba in the modern financial world requires conscious effort and planning. But it is entirely achievable. The Islamic finance industry has developed alternatives for virtually every conventional riba-based product. The first step is awareness — understanding where riba hides in everyday financial transactions.</p>

      <p>May Allah protect us from what is forbidden and facilitate for us what is halal.</p>
    `,
    references: [
      'Surah Al-Baqarah, 2:275-280 — Quran',
      'AAOIFI Shariah Standard No. 23: Agency',
      'Islamic Finance Council UK: Consumer Guidance on Riba, 2023',
      'Mufti Taqi Usmani: An Introduction to Islamic Finance',
      'Dr. Monzer Kahf: Riba in Contemporary Applications, IIUM Journal of Economics'
    ]
  }
];

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */
function getVerdictClass(verdict) {
  const map = {
    'Halal': 'verdict-badge--halal',
    'Haram': 'verdict-badge--haram',
    'Conditional': 'verdict-badge--conditional'
  };
  return map[verdict] || 'verdict-badge--conditional';
}

function getVerdictIcon(verdict) {
  const map = {
    'Halal': '✓',
    'Haram': '✗',
    'Conditional': '~'
  };
  return map[verdict] || '~';
}

function getArticleById(id) {
  return articles.find(a => a.id === id) || null;
}

function getRelatedArticles(currentId, category, limit = 4) {
  return articles
    .filter(a => a.id !== currentId && a.category === category)
    .slice(0, limit)
    .concat(
      articles.filter(a => a.id !== currentId && a.category !== category)
    )
    .slice(0, limit);
}

function getURLParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function formatInitials(name) {
  return name.split(' ').filter(w => w.match(/^[A-Z]/)).map(w => w[0]).join('').slice(0, 2);
}

/* ============================================
   CARD RENDERING
   ============================================ */
function renderVerdictBadge(verdict, size = 'sm') {
  return `<span class="verdict-badge ${getVerdictClass(verdict)}">
    <span class="badge-dot"></span>
    ${verdict}
  </span>`;
}

function renderCategoryTag(category) {
  return `<span class="category-tag">${category}</span>`;
}

function renderAuthorAvatar(initials) {
  return `<div class="card-author-avatar">${initials}</div>`;
}

function renderFeaturedCard(article, isMain = false) {
  return `
    <div class="featured-card ${isMain ? 'featured-card--main' : ''}" 
         onclick="navigateToArticle('${article.id}')"
         role="article" tabindex="0"
         onkeydown="if(event.key==='Enter') navigateToArticle('${article.id}')">
      <div class="featured-card-image">
        <div class="card-image-pattern">${article.icon}</div>
        <div class="card-image-overlay">
          ${renderVerdictBadge(article.verdict)}
        </div>
      </div>
      <div class="featured-card-body">
        <div class="featured-card-meta">
          ${renderCategoryTag(article.category)}
          <span class="card-read-time">⏱ ${article.readTime}</span>
        </div>
        <h3 class="featured-card-title">${article.title}</h3>
        <p class="featured-card-desc">${article.description}</p>
        <div class="featured-card-footer">
          <div class="card-author">
            ${renderAuthorAvatar(article.authorInitials)}
            <span class="card-author-name">${article.author}</span>
          </div>
          <span class="card-date">${article.date}</span>
        </div>
      </div>
    </div>
  `;
}

function renderArticleCard(article) {
  return `
    <div class="article-card" 
         onclick="navigateToArticle('${article.id}')"
         role="article" tabindex="0"
         onkeydown="if(event.key==='Enter') navigateToArticle('${article.id}')">
      <div class="article-card-image">
        <span class="icon">${article.icon}</span>
        <div class="article-card-image-overlay">
          ${renderVerdictBadge(article.verdict)}
        </div>
      </div>
      <div class="article-card-body">
        <div class="article-card-meta">
          ${renderCategoryTag(article.category)}
        </div>
        <h3 class="article-card-title">${article.title}</h3>
        <p class="article-card-desc">${article.description}</p>
        <div class="article-card-footer">
          <div class="card-author">
            ${renderAuthorAvatar(article.authorInitials)}
            <span class="card-author-name">${article.author}</span>
          </div>
          <span class="card-read-time">⏱ ${article.readTime}</span>
        </div>
      </div>
    </div>
  `;
}

/* ============================================
   NAVIGATION
   ============================================ */
function navigateToArticle(id) {
  window.location.href = `article.html?id=${id}`;
}

/* ============================================
   HOMEPAGE — INIT
   ============================================ */
function initHomepage() {
  renderFeaturedSection();
  renderCategorySection();
  renderLatestArticles();
  initFilters();
  initNavbar();
  initScrollAnimations();
  initNewsletter();
  updateHeroStats();
}

function updateHeroStats() {
  const statEl = document.getElementById('stat-articles');
  if (statEl) statEl.textContent = articles.length + '+';
}

function renderFeaturedSection() {
  const container = document.getElementById('featured-articles');
  if (!container) return;

  const featured = articles.filter(a => a.featured).slice(0, 3);
  const rest = articles.filter(a => !a.featured).slice(0, 2);
  const display = featured.length >= 3 ? featured : [...featured, ...rest].slice(0, 3);

  if (display.length === 0) return;

  const [main, ...secondary] = display;

  container.innerHTML = `
    ${renderFeaturedCard(main, true)}
    ${secondary.map(a => renderFeaturedCard(a, false)).join('')}
  `;
}

let currentFilter = 'All';
let visibleCount = 6;
const PAGE_SIZE = 6;

function renderLatestArticles(filter = 'All') {
  const container = document.getElementById('articles-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (!container) return;

  const filtered = filter === 'All'
    ? articles
    : articles.filter(a => a.category === filter || a.verdict === filter);

  const visible = filtered.slice(0, visibleCount);

  if (visible.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <div style="font-size: 3rem; margin-bottom: 16px;">🔍</div>
        <p>No articles found in this category yet. Check back soon!</p>
      </div>
    `;
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  container.innerHTML = visible.map(renderArticleCard).join('');

  if (loadMoreBtn) {
    loadMoreBtn.style.display = filtered.length > visibleCount ? 'inline-block' : 'none';
  }
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      visibleCount = PAGE_SIZE;
      renderLatestArticles(currentFilter);
    });
  });

  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += PAGE_SIZE;
      renderLatestArticles(currentFilter);
    });
  }
}

function renderCategorySection() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  const categories = [
    { name: 'Halal vs Haram', icon: '⚖️', color: '#1a4731' },
    { name: 'Investments', icon: '📈', color: '#2d6a4f' },
    { name: 'Banking & Loans', icon: '🏦', color: '#1a4731' },
    { name: 'Crypto', icon: '₿', color: '#0f2d1f' },
    { name: 'Zakat & Charity', icon: '🕌', color: '#2d6a4f' }
  ];

  container.innerHTML = categories.map(cat => {
    const count = articles.filter(a => a.category === cat.name).length;
    return `
      <div class="category-card" onclick="filterByCategory('${cat.name}')" 
           role="button" tabindex="0"
           onkeydown="if(event.key==='Enter') filterByCategory('${cat.name}')">
        <span class="category-card-icon">${cat.icon}</span>
        <div class="category-card-name">${cat.name}</div>
        <div class="category-card-count">${count} article${count !== 1 ? 's' : ''}</div>
      </div>
    `;
  }).join('');
}

function filterByCategory(category) {
  const section = document.getElementById('latest-section');
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  setTimeout(() => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === category);
    });
    currentFilter = category;
    visibleCount = PAGE_SIZE;
    renderLatestArticles(currentFilter);
  }, 300);
}

/* ============================================
   NAVBAR
   ============================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ============================================
   NEWSLETTER
   ============================================ */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    const btn = form.querySelector('button');
    if (!input.value.trim()) return;

    btn.textContent = 'Subscribed! ✓';
    btn.style.background = '#10b981';
    input.value = '';
    input.disabled = true;
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Subscribe';
      btn.style.background = '';
      input.disabled = false;
      btn.disabled = false;
    }, 4000);
  });
}

/* ============================================
   ARTICLE PAGE — INIT
   ============================================ */
function initArticlePage() {
  const id = getURLParam('id');
  const container = document.getElementById('article-container');
  if (!container) return;

  if (!id) {
    renderNotFound(container);
    return;
  }

  const article = getArticleById(id);
  if (!article) {
    renderNotFound(container);
    return;
  }

  document.title = `${article.title} — Halal Finance Hub`;

  const related = getRelatedArticles(article.id, article.category, 4);
  container.innerHTML = renderArticleDetail(article, related);

  initNavbar();
  initScrollAnimations();
  updateMetaTags(article);
}

function renderArticleDetail(article, related) {
  return `
    <div class="article-page fade-in">
      <a href="index.html" class="back-btn">
        ← Back to Home
      </a>

      <div class="article-category-line">
        ${renderCategoryTag(article.category)}
        ${article.tags ? article.tags.map(t => `<span class="category-tag" style="opacity:0.6">${t}</span>`).join('') : ''}
      </div>

      <h1 class="article-title">${article.title}</h1>

      <div class="article-byline">
        <div class="article-byline-avatar">${article.authorInitials}</div>
        <div class="article-byline-info">
          <div class="article-byline-author">${article.author}</div>
          <div class="article-byline-meta">${article.date} · ${article.readTime}</div>
        </div>
        <span class="verdict-badge ${getVerdictClass(article.verdict)} article-verdict-large">
          <span class="badge-dot"></span>
          Verdict: ${article.verdict}
        </span>
      </div>

      <div class="article-content">
        ${article.content}
      </div>

      ${article.references && article.references.length ? `
        <div class="references-section">
          <h2 class="references-title">📚 References & Sources</h2>
          <div class="references-list">
            ${article.references.map((ref, i) => `
              <div class="reference-item">
                <div class="reference-num">${i + 1}</div>
                <div class="reference-text">${ref}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${related.length ? `
        <div class="related-section">
          <h2 class="related-title">Continue Reading</h2>
          <div class="related-grid">
            ${related.map(a => `
              <div class="related-card" onclick="navigateToArticle('${a.id}')" 
                   role="link" tabindex="0"
                   onkeydown="if(event.key==='Enter') navigateToArticle('${a.id}')">
                <div class="related-card-icon">${a.icon}</div>
                <div>
                  <div class="related-card-title">${a.title}</div>
                  <div class="related-card-meta">
                    ${a.category} · ${a.readTime}
                    &nbsp;&nbsp;${renderVerdictBadge(a.verdict)}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderNotFound(container) {
  container.innerHTML = `
    <div class="not-found">
      <div class="not-found-icon">📄</div>
      <h2>Article Not Found</h2>
      <p>The article you're looking for doesn't exist or may have been moved.</p>
      <a href="index.html" class="btn btn-primary" style="display:inline-flex; margin:0 auto;">
        ← Return to Homepage
      </a>
    </div>
  `;
}

function updateMetaTags(article) {
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = article.description;
}

/* ============================================
   PAGE DETECTION & INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const isArticlePage = document.body.classList.contains('article-page-body')
    || document.getElementById('article-container') !== null;

  if (isArticlePage) {
    initArticlePage();
  } else {
    initHomepage();
  }
});
