/* article-data.jsx — Full article content for all blog posts */

const ARTICLES = [
  {
    slug: 'licensed-moneylender-vs-bank-loan',
    category: 'Borrowing basics',
    title: 'Licensed moneylender vs bank loan: what\'s the real difference?',
    excerpt: 'A clear comparison of how licensed moneylenders and banks differ in terms of eligibility, speed, rates, and regulation in Singapore.',
    readTime: '5 min read',
    image: 'assets/blog/receptionist-at-financial-office.jpg',
    keyTakeaways: [
      'Both licensed moneylenders and banks are regulated — moneylenders by MinLaw under the Moneylenders Act, and banks by MAS.',
      'Banks typically offer lower interest rates but have stricter eligibility criteria and longer processing times.',
      'Licensed moneylenders can assess applications more flexibly and disburse funds faster, sometimes within 24 hours.',
      'Property-backed loans from a licensed moneylender can bridge the gap — offering competitive rates with faster turnaround.',
    ],
    sections: [
      {
        id: 'regulation',
        heading: 'Both are regulated — differently',
        content: '<p>A common misconception is that licensed moneylenders operate in a grey area. They don\'t. Licensed moneylenders in Singapore are regulated by the <strong>Ministry of Law (MinLaw)</strong> under the Moneylenders Act. They must hold a valid licence, comply with advertising rules, and follow prescribed limits on fees and charges.</p><p>Banks, on the other hand, are regulated by the <strong>Monetary Authority of Singapore (MAS)</strong>. Both systems exist to protect borrowers — the regulatory frameworks are simply different.</p><p>You can verify any licensed moneylender on the <a href="https://rom.mlaw.gov.sg/information-for-borrowers/list-of-licensed-moneylenders-in-singapore/" target="_blank" rel="noopener">MinLaw Registry of Moneylenders</a>.</p>',
      },
      {
        id: 'eligibility',
        heading: 'How eligibility differs',
        content: '<p>Banks assess loan applications primarily using <strong>credit scores, income documentation, and debt-to-income ratios</strong>. If your credit score is below a certain threshold, or if your income structure is non-standard (freelance, self-employed, commission-based), your application may be declined — regardless of your actual ability to repay.</p><p>Licensed moneylenders typically take a <strong>more holistic view</strong>. While they still assess your financial situation, they can consider factors beyond a credit score: property equity, overall asset position, and the specific circumstances around your borrowing need.</p><p>This makes licensed moneylenders a practical option for borrowers who have been declined by banks but are otherwise financially capable.</p>',
      },
      {
        id: 'speed',
        heading: 'Speed of approval and disbursement',
        content: '<p>Bank personal loan applications can take <strong>3–7 business days</strong> for approval, and sometimes longer if additional documentation is requested. Disbursement may take another 1–3 business days after approval.</p><p>Licensed moneylenders are generally faster. At TBS Union, for example, we aim to provide an indicative assessment within the same business day once documents are submitted, and <strong>funds can be disbursed within 24 hours of approval</strong>.</p><p>If your need is time-sensitive — a medical expense, a business opportunity, or a bridging situation — this speed difference can matter significantly.</p>',
      },
      {
        id: 'rates',
        heading: 'Interest rates and costs',
        content: '<p>Banks typically offer lower headline interest rates on personal loans, often in the range of <strong>3–6% per annum (EIR)</strong>. However, bank loans may come with processing fees, early repayment penalties, and other charges that affect the total cost.</p><p>Licensed moneylender rates are generally higher, but the gap narrows with <strong>property-backed loans</strong>. Because the loan is secured against real property, lenders can offer more competitive rates than a typical unsecured moneylender loan.</p><p>The key is to compare the <strong>total cost of borrowing</strong> — not just the headline rate. Look at all fees, charges, and the total repayment amount over the loan tenure.</p>',
      },
      {
        id: 'when-to-choose',
        heading: 'When each option makes sense',
        content: '<p><strong>A bank loan may suit you better if:</strong></p><ul><li>You have a strong credit score and stable salaried income</li><li>You don\'t need the funds urgently</li><li>You\'re looking for the lowest possible interest rate</li></ul><p><strong>A licensed moneylender may suit you better if:</strong></p><ul><li>You\'ve been declined by a bank</li><li>You have a complex income structure (self-employed, freelance, variable)</li><li>You need funds quickly</li><li>You have property equity that can serve as collateral</li><li>You value a more personalised assessment process</li></ul>',
      },
    ],
    faq: [
      { q: 'Are licensed moneylenders legal in Singapore?', a: 'Yes. Licensed moneylenders are regulated by the Ministry of Law under the Moneylenders Act. You can verify any lender\'s licence on the MinLaw Registry.' },
      { q: 'Is borrowing from a moneylender worse than borrowing from a bank?', a: 'Not necessarily. The right choice depends on your circumstances. Licensed moneylenders offer faster processing, more flexible assessment, and can be the better option if you\'ve been declined by a bank or need funds urgently.' },
      { q: 'Can a licensed moneylender offer competitive rates?', a: 'Yes — especially for property-backed loans. Collateral reduces the lender\'s risk, which translates to more competitive rates for the borrower.' },
    ],
    related: ['how-property-backed-loans-work', 'what-to-check-before-borrowing', 'understanding-interest-rates'],
  },
  {
    slug: 'how-property-backed-loans-work',
    category: 'Property-backed loans',
    title: 'How property-backed personal loans work at TBS Union',
    excerpt: 'An overview of how pledging your property as collateral can help you access higher loan amounts at more competitive rates.',
    readTime: '4 min read',
    image: 'assets/blog/property-investment-cash-house-3d.jpg',
    keyTakeaways: [
      'A property-backed personal loan uses your private residential or commercial property as collateral.',
      'Because the loan is secured, you can typically access higher amounts and more competitive rates than unsecured alternatives.',
      'A caveat is lodged on your property title during the loan — it is removed upon full repayment.',
      'You continue to own, live in, and use your property as normal throughout the loan.',
    ],
    sections: [
      {
        id: 'what-it-is',
        heading: 'What is a property-backed personal loan?',
        content: '<p>A property-backed personal loan is a <strong>secured loan</strong> where your property serves as collateral. Unlike a mortgage (which finances the purchase of property), this is a personal loan — the funds can be used for any legitimate personal purpose.</p><p>The property backing gives the lender security, which means they can offer <strong>better terms</strong> than a typical unsecured personal loan: higher loan amounts, more competitive interest rates, and more flexible eligibility criteria.</p>',
      },
      {
        id: 'how-it-works',
        heading: 'How the process works',
        content: '<p>Here\'s what to expect when applying for a property-backed personal loan at TBS Union:</p><ol><li><strong>Initial discussion</strong> — You share your property details and borrowing needs. We provide an initial indication of what may be possible.</li><li><strong>Document submission</strong> — You provide identification, proof of income, and property documents. We arrange a valuation of your property.</li><li><strong>Assessment and offer</strong> — We assess your application and issue an offer letter with all terms fully disclosed: loan amount, interest rate, repayment schedule, and all fees.</li><li><strong>Caveat lodgement</strong> — Upon acceptance, a caveat is lodged on your property title. This is a standard security measure.</li><li><strong>Disbursement</strong> — Funds are released, typically within 24 hours of loan completion.</li></ol>',
      },
      {
        id: 'what-properties',
        heading: 'What types of property are accepted?',
        content: '<p>TBS Union accepts the following property types as collateral:</p><ul><li><strong>Private residential property</strong> — Condominiums, apartments, landed houses (terrace, semi-detached, detached, bungalows)</li><li><strong>Commercial property</strong> — Offices, shophouses, retail units, industrial property</li></ul><p>HDB flats are generally <strong>not accepted</strong> as collateral for licensed moneylender loans due to regulatory restrictions on HDB property. See our separate article on <a href="Article.html?slug=hdb-as-collateral">HDB as collateral</a> for details.</p>',
      },
      {
        id: 'what-happens-to-property',
        heading: 'What happens to your property?',
        content: '<p>Your property remains <strong>fully yours</strong>. You continue to own it, live in it (or rent it out), and use it as you normally would. The only change is that a caveat is lodged on the property title — this is a legal record that the lender has an interest in the property.</p><p>The caveat is <strong>removed upon full repayment</strong> of the loan. It does not affect your day-to-day use of the property.</p><p>If you wish to sell the property during the loan tenure, the outstanding loan would need to be settled from the sale proceeds.</p>',
      },
      {
        id: 'benefits',
        heading: 'Why choose a property-backed loan?',
        content: '<ul><li><strong>Higher loan amounts</strong> — Property collateral allows for significantly higher borrowing limits than unsecured loans</li><li><strong>More competitive rates</strong> — Secured loans carry lower risk for the lender, resulting in better rates for you</li><li><strong>Flexible eligibility</strong> — We assess your full financial picture, not just your credit score</li><li><strong>Speed</strong> — Assessment within the same business day; funds disbursed within 24 hours of approval</li><li><strong>Transparency</strong> — All terms disclosed upfront in your offer letter before you commit</li></ul>',
      },
    ],
    faq: [
      { q: 'Will I lose my property?', a: 'No. You retain full ownership and use of your property. A caveat is lodged as security and removed upon full repayment. The lender would only enforce against the property in the event of a serious default after all other avenues have been exhausted.' },
      { q: 'How much can I borrow?', a: 'The loan amount depends on several factors including your property value, existing encumbrances, income, and overall financial position. Contact us for an indicative assessment.' },
      { q: 'How long does the process take?', a: 'We aim to provide an assessment within the same business day once documents are submitted. Funds are typically disbursed within 24 hours of approval.' },
    ],
    related: ['licensed-moneylender-vs-bank-loan', 'hdb-as-collateral', 'caveats-explained'],
  },
  {
    slug: 'what-to-check-before-borrowing',
    category: 'Borrowing basics',
    title: 'What to check before borrowing from a licensed moneylender',
    excerpt: 'A practical checklist covering licence verification, fee disclosure, contract terms, and your rights as a borrower under the Moneylenders Act.',
    readTime: '6 min read',
    image: 'assets/blog/couple-signing-home-loan-documents.jpg',
    keyTakeaways: [
      'Always verify the lender\'s licence on the MinLaw Registry before proceeding.',
      'All fees, interest rates, and repayment terms must be disclosed before you sign any contract.',
      'You have specific rights under the Moneylenders Act — including the right to a full copy of your loan contract.',
      'A responsible lender will never rush you into signing or ask for upfront payment before loan approval.',
    ],
    sections: [
      {
        id: 'verify-licence',
        heading: 'Verify the licence first',
        content: '<p>This is the most important step. Before engaging with any moneylender, check that they hold a valid licence issued by the Ministry of Law.</p><p>You can do this on the <a href="https://rom.mlaw.gov.sg/information-for-borrowers/list-of-licensed-moneylenders-in-singapore/" target="_blank" rel="noopener">Registry of Moneylenders</a>. Look for:</p><ul><li>The company name and licence number</li><li>The registered business address</li><li>Whether the licence is current and valid</li></ul><p><strong>Never borrow from an unlicensed lender.</strong> Unlicensed moneylending (loan sharking) is illegal, and borrowers who engage with unlicensed lenders have no legal protection.</p>',
      },
      {
        id: 'fee-disclosure',
        heading: 'Understand the full cost',
        content: '<p>A licensed moneylender must disclose all costs before you sign. Make sure you understand:</p><ul><li><strong>Interest rate</strong> — The rate charged and how it is calculated (flat rate vs. effective rate)</li><li><strong>Administrative fee</strong> — Typically up to 10% of the loan principal</li><li><strong>Late payment fee</strong> — The maximum allowed under the Moneylenders Act</li><li><strong>Total repayment amount</strong> — The full amount you will repay over the loan tenure</li><li><strong>Monthly instalment</strong> — The exact amount due each month</li></ul><p>If any lender is vague or evasive about fees, treat that as a red flag.</p>',
      },
      {
        id: 'contract-terms',
        heading: 'Read the contract carefully',
        content: '<p>Before signing any loan agreement, you should receive a complete offer letter or contract that includes:</p><ul><li>Loan amount and disbursement details</li><li>Interest rate and how it is applied</li><li>Repayment schedule with dates and amounts</li><li>All fees and charges</li><li>Consequences of late or missed payments</li><li>Early repayment terms</li><li>Any security or collateral arrangements</li></ul><p>You are entitled to a <strong>copy of the signed contract</strong>. If the lender does not provide one, ask for it — it\'s your right.</p><p>We encourage all borrowers to seek <strong>independent legal advice</strong> before signing, especially for secured loans.</p>',
      },
      {
        id: 'red-flags',
        heading: 'Red flags to watch out for',
        content: '<p>Be cautious if a lender:</p><ul><li>Asks for payment or deposits before the loan is approved</li><li>Pressures you to sign immediately without time to review</li><li>Refuses to provide written terms or a contract copy</li><li>Is not listed on the MinLaw Registry</li><li>Contacts you through unsolicited SMS, WhatsApp, or social media messages</li><li>Asks you to sign blank or incomplete documents</li></ul><p>A legitimate licensed moneylender will never engage in these practices.</p>',
      },
      {
        id: 'your-rights',
        heading: 'Your rights as a borrower',
        content: '<p>Under the Moneylenders Act, you have the right to:</p><ul><li>Receive a copy of your loan contract</li><li>Know the full cost of your loan before signing</li><li>Not be harassed or threatened</li><li>Repay your loan and have any security released</li><li>Lodge a complaint with MinLaw if a licensed moneylender violates the rules</li></ul><p>For more information, read the <a href="https://rom.mlaw.gov.sg/information-for-borrowers/guide-to-borrowing-from-licensed-moneylenders-english/" target="_blank" rel="noopener">MinLaw Guide to Borrowing from Licensed Moneylenders</a>.</p>',
      },
    ],
    faq: [
      { q: 'Can a moneylender charge any interest rate they want?', a: 'No. The Moneylenders Act prescribes maximum rates and fees that licensed moneylenders can charge. All rates must be disclosed before you sign.' },
      { q: 'What if I have a complaint about a licensed moneylender?', a: 'You can file a complaint with the Registry of Moneylenders under the Ministry of Law. They investigate complaints against licensed moneylenders.' },
      { q: 'Do I need a lawyer to borrow from a moneylender?', a: 'It\'s not legally required, but we encourage borrowers to seek independent legal advice — especially for larger or secured loans. A good lender will support, not discourage, this.' },
    ],
    related: ['licensed-moneylender-vs-bank-loan', 'understanding-interest-rates', 'what-happens-if-you-miss-repayment'],
  },
  {
    slug: 'structuring-loan-repayment',
    category: 'Managing repayments',
    title: 'How to structure your loan repayment so it doesn\'t hurt',
    excerpt: 'Tips on choosing the right loan tenure, setting up repayment reminders, and budgeting around your monthly instalment.',
    readTime: '4 min read',
    image: 'assets/blog/happy-family-playing-on-sofa.jpg',
    keyTakeaways: [
      'Choose a loan tenure that balances affordable monthly payments with reasonable total interest cost.',
      'Your monthly instalment should ideally not exceed 30–40% of your monthly income.',
      'Set up calendar reminders or automatic transfers to avoid missed payments and late fees.',
      'If your financial situation changes, speak to your lender early — before you miss a payment.',
    ],
    sections: [
      {
        id: 'right-tenure',
        heading: 'Choosing the right loan tenure',
        content: '<p>A longer tenure means smaller monthly payments but more interest paid overall. A shorter tenure means higher monthly payments but less total interest.</p><p>The right balance depends on your <strong>monthly cash flow</strong>. Ask yourself: after paying the monthly instalment, will I still have a comfortable buffer for living expenses, emergencies, and savings?</p><p><strong>Use our <a href="Calculator.html">loan calculator</a></strong> to see how different tenures affect your monthly repayment and total cost.</p>',
      },
      {
        id: 'budgeting',
        heading: 'Budgeting around your instalment',
        content: '<p>Before taking a loan, map out your monthly expenses:</p><ol><li><strong>Fixed expenses</strong> — Rent/mortgage, insurance, utilities, transport</li><li><strong>Variable expenses</strong> — Food, entertainment, personal spending</li><li><strong>Savings and emergency buffer</strong> — Ideally 10–20% of income</li><li><strong>Loan repayment</strong> — This should fit comfortably within what remains</li></ol><p>A common guideline is that total debt repayments (including any existing loans) should not exceed <strong>30–40% of your gross monthly income</strong>. This isn\'t a hard rule, but it\'s a useful benchmark.</p>',
      },
      {
        id: 'avoid-late-payments',
        heading: 'Avoiding late payments',
        content: '<p>Late payments incur fees and can affect your credit record. Simple steps to avoid them:</p><ul><li><strong>Set a calendar reminder</strong> 3 days before each due date</li><li><strong>Set up a standing instruction</strong> or automatic bank transfer for the instalment amount</li><li><strong>Keep a dedicated buffer</strong> in your payment account — at least one month\'s instalment ahead</li><li><strong>Track your due dates</strong> if you have multiple loans or credit commitments</li></ul>',
      },
      {
        id: 'if-things-change',
        heading: 'What to do if your situation changes',
        content: '<p>Life is unpredictable. If your income drops, you lose your job, or an unexpected expense arises, <strong>contact your lender as early as possible</strong> — before you miss a payment.</p><p>A responsible lender would rather discuss options with you than deal with a default. Possible outcomes may include:</p><ul><li>Restructuring the repayment schedule</li><li>Adjusting the tenure</li><li>Discussing a temporary arrangement</li></ul><p>The worst approach is to ignore the problem and hope it goes away. Communication is always better than silence.</p>',
      },
    ],
    faq: [
      { q: 'What\'s the ideal loan tenure?', a: 'There\'s no one-size-fits-all answer. The ideal tenure is one where the monthly instalment fits comfortably within your budget without stretching the loan so long that interest costs become excessive.' },
      { q: 'Can I change my repayment schedule after signing?', a: 'This depends on your loan agreement. Some lenders may allow restructuring — speak to your lender about your options.' },
    ],
    related: ['what-happens-if-you-miss-repayment', 'early-repayment', 'understanding-interest-rates'],
  },
  {
    slug: 'hdb-as-collateral',
    category: 'Property-backed loans',
    title: 'Can I use my HDB flat as collateral for a personal loan?',
    excerpt: 'Understanding the rules around HDB as loan collateral, what types of property are accepted, and the valuation process.',
    readTime: '5 min read',
    image: 'assets/blog/modern-apartment-complex-poolside.jpg',
    keyTakeaways: [
      'HDB flats generally cannot be used as collateral for loans from licensed moneylenders due to regulatory restrictions.',
      'Private residential property (condos, landed homes) and commercial property are commonly accepted.',
      'If you own an HDB flat but also own private property, the private property may serve as collateral.',
      'The valuation process involves an independent assessment of your property\'s current market value.',
    ],
    sections: [
      {
        id: 'short-answer',
        heading: 'The short answer',
        content: '<p><strong>In most cases, no.</strong> HDB flats are subject to specific regulations under the Housing and Development Act that restrict their use as security for loans from licensed moneylenders.</p><p>This doesn\'t mean you can\'t get a personal loan if you own an HDB flat — it means the HDB flat itself generally cannot serve as the collateral for a property-backed loan from a licensed moneylender.</p>',
      },
      {
        id: 'why-hdb-restricted',
        heading: 'Why HDB flats are treated differently',
        content: '<p>HDB flats are <strong>public housing</strong> built and regulated by the Housing and Development Board. They come with specific conditions around ownership, resale, and encumbrances that don\'t apply to private property.</p><p>These restrictions exist to protect homeowners and maintain the public housing system. The rules around using HDB property as loan security are more restrictive than those for private property.</p>',
      },
      {
        id: 'what-properties-accepted',
        heading: 'What property types are accepted?',
        content: '<p>At TBS Union, we accept the following as collateral:</p><ul><li><strong>Private condominiums and apartments</strong></li><li><strong>Landed property</strong> — Terrace houses, semi-detached homes, detached homes, bungalows</li><li><strong>Commercial property</strong> — Offices, shophouses, retail units</li><li><strong>Industrial property</strong> — Factories, warehouses (subject to assessment)</li></ul><p>If you own <strong>both an HDB flat and a private property</strong>, the private property may be used as collateral even if the HDB flat cannot.</p>',
      },
      {
        id: 'valuation-process',
        heading: 'How property valuation works',
        content: '<p>When you apply for a property-backed loan, the lender needs to understand your property\'s current market value. This typically involves:</p><ol><li><strong>Desktop valuation</strong> — An initial estimate based on recent comparable transactions in the area</li><li><strong>Formal valuation</strong> — If needed, an independent licensed valuer inspects the property and issues a formal valuation report</li><li><strong>Loan-to-value assessment</strong> — The lender determines the maximum loan amount as a percentage of the property\'s value, taking into account any existing mortgages or encumbrances</li></ol><p>The valuation cost, if any, will be disclosed to you upfront before you proceed.</p>',
      },
      {
        id: 'alternatives',
        heading: 'Options if you only own an HDB flat',
        content: '<p>If your HDB flat cannot be used as collateral, you still have options:</p><ul><li><strong>Unsecured personal loan</strong> — Available from both banks and licensed moneylenders, though typically at higher rates and lower amounts than secured loans</li><li><strong>HDB loan</strong> — If you\'re looking to refinance your existing HDB mortgage, speak to HDB directly about your options</li><li><strong>CPF-related options</strong> — Depending on your situation, there may be CPF-related avenues worth exploring</li></ul><p>Contact our team to discuss your situation — even if your property doesn\'t qualify as collateral, we may be able to suggest alternatives.</p>',
      },
    ],
    faq: [
      { q: 'Can I use an Executive Condominium (EC) as collateral?', a: 'ECs that have met the Minimum Occupation Period (MOP) and are fully privatised may be considered. Contact us with your specific property details for an assessment.' },
      { q: 'What if I have an existing mortgage on my private property?', a: 'You can still apply. The existing mortgage will be factored into the loan-to-value assessment. The available equity (property value minus outstanding mortgage) determines the potential loan amount.' },
    ],
    related: ['how-property-backed-loans-work', 'caveats-explained', 'licensed-moneylender-vs-bank-loan'],
  },
  {
    slug: 'understanding-interest-rates',
    category: 'Borrowing basics',
    title: 'Understanding interest rates: flat rate vs effective rate',
    excerpt: 'A plain-language explainer on the two main ways interest is calculated, and why the number you see isn\'t always the number you pay.',
    readTime: '3 min read',
    image: 'assets/blog/woman-with-glasses-thinking.jpg',
    keyTakeaways: [
      'A flat rate calculates interest on the original loan amount for the entire tenure — the rate looks lower but the true cost is higher.',
      'An effective interest rate (EIR) reflects the actual cost of borrowing, accounting for the reducing balance.',
      'Always compare loans using the EIR or total repayment amount, not the flat rate alone.',
      'Ask your lender to disclose both the flat rate and EIR so you can make an informed comparison.',
    ],
    sections: [
      {
        id: 'flat-rate',
        heading: 'What is a flat interest rate?',
        content: '<p>A flat rate calculates interest on the <strong>original loan amount for the entire tenure</strong>, regardless of how much you\'ve already repaid.</p><p><strong>Example:</strong> You borrow $10,000 at a flat rate of 1% per month for 12 months.</p><ul><li>Monthly interest = $10,000 × 1% = $100</li><li>Total interest = $100 × 12 = $1,200</li><li>Total repayment = $11,200</li><li>Monthly instalment = $11,200 ÷ 12 = $933.33</li></ul><p>Even though you\'re paying down the principal each month, the interest is always calculated on the original $10,000. This makes the <strong>true cost higher</strong> than the headline rate suggests.</p>',
      },
      {
        id: 'effective-rate',
        heading: 'What is an effective interest rate (EIR)?',
        content: '<p>The effective interest rate reflects the <strong>actual cost of borrowing</strong>. It accounts for the fact that your outstanding balance decreases as you make repayments.</p><p>A flat rate of 1% per month roughly translates to an <strong>EIR of approximately 21–22% per annum</strong> — significantly higher than the 12% (1% × 12) that the flat rate might suggest.</p><p>The EIR is a more accurate measure for comparing loans because it reflects what you\'re actually paying relative to the amount you still owe.</p>',
      },
      {
        id: 'why-it-matters',
        heading: 'Why this matters when comparing loans',
        content: '<p>Two loans can quote very different-looking rates but cost the same — or vice versa:</p><ul><li>Loan A: "1% per month flat rate" on $10,000 for 12 months = $1,200 in interest</li><li>Loan B: "20% per annum EIR" on $10,000 for 12 months ≈ $1,100 in interest</li></ul><p>Loan A <em>looks</em> cheaper (1% vs. 20%), but actually costs more. This is why comparing on flat rate alone is misleading.</p><p><strong>Always ask for:</strong></p><ul><li>The EIR (effective interest rate per annum)</li><li>The total repayment amount</li><li>The monthly instalment amount</li></ul><p>These three numbers together give you the clearest picture of what a loan will actually cost.</p>',
      },
      {
        id: 'what-tbs-discloses',
        heading: 'What TBS Union discloses',
        content: '<p>At TBS Union, all terms are disclosed in your offer letter before you sign, including:</p><ul><li>The interest rate and how it is calculated</li><li>All fees and charges</li><li>The monthly instalment amount</li><li>The total repayment amount over the loan tenure</li></ul><p>We encourage you to compare these numbers with any other loan offer you may have. Transparency is not a selling point — it\'s a baseline expectation.</p>',
      },
    ],
    faq: [
      { q: 'Which rate should I use when comparing loans?', a: 'Always use the EIR (effective interest rate) or compare the total repayment amounts. Flat rates can be misleading because they don\'t account for the reducing balance.' },
      { q: 'Is a lower flat rate always cheaper?', a: 'Not necessarily. A lower flat rate can still result in a higher total cost compared to a loan quoted on an effective rate basis. Always compare total repayment amounts.' },
    ],
    related: ['licensed-moneylender-vs-bank-loan', 'what-to-check-before-borrowing', 'structuring-loan-repayment'],
  },
  {
    slug: 'what-happens-if-you-miss-repayment',
    category: 'Managing repayments',
    title: 'What happens if you miss a loan repayment?',
    excerpt: 'The consequences of a missed payment, what fees apply under the Moneylenders Act, and how to get back on track.',
    readTime: '4 min read',
    image: 'assets/blog/red-car-driving-on-city-bridge.jpg',
    keyTakeaways: [
      'A missed payment triggers a late fee as stipulated in your loan contract (subject to Moneylenders Act limits).',
      'Repeated missed payments can affect your credit record and may lead to legal action.',
      'For secured loans, prolonged default could eventually put your collateral at risk — though this is a last resort.',
      'The best course of action is to contact your lender early if you anticipate difficulty making a payment.',
    ],
    sections: [
      {
        id: 'immediate-consequences',
        heading: 'What happens immediately',
        content: '<p>When you miss a scheduled repayment, the following typically occurs:</p><ol><li><strong>Late fee</strong> — A late payment fee is charged as set out in your loan contract. For licensed moneylenders, this fee is subject to limits under the Moneylenders Act.</li><li><strong>Reminder from the lender</strong> — Most lenders will contact you to remind you of the missed payment and discuss next steps.</li><li><strong>Interest continues to accrue</strong> — Interest on the outstanding amount continues to accrue. Late interest may also apply as per your contract terms.</li></ol>',
      },
      {
        id: 'repeated-defaults',
        heading: 'What happens with repeated missed payments',
        content: '<p>If missed payments continue, the consequences escalate:</p><ul><li><strong>Credit record impact</strong> — Persistent late payments are reported and can affect your credit score, making future borrowing harder</li><li><strong>Legal proceedings</strong> — The lender may commence legal action to recover the outstanding amount</li><li><strong>For secured loans</strong> — In cases of prolonged default, the lender may enforce their rights over the collateral. For property-backed loans, this could mean enforcement against the property — though this is typically a <strong>last resort</strong> after all other options have been explored</li></ul>',
      },
      {
        id: 'what-to-do',
        heading: 'What to do if you can\'t make a payment',
        content: '<p><strong>Contact your lender before the due date.</strong> This is the single most important thing you can do.</p><p>Most lenders — including TBS Union — would rather work with you to find a solution than deal with a default. Options may include:</p><ul><li>A short-term payment arrangement</li><li>Restructuring the loan tenure</li><li>Adjusting the repayment schedule</li></ul><p>The earlier you communicate, the more options are usually available. Waiting until after multiple missed payments significantly narrows what can be done.</p>',
      },
      {
        id: 'your-rights',
        heading: 'Your rights during collections',
        content: '<p>Even if you\'ve missed payments, you still have rights:</p><ul><li>Licensed moneylenders <strong>cannot harass, threaten, or intimidate</strong> you or your family</li><li>Any collection actions must be conducted <strong>lawfully and professionally</strong></li><li>You can lodge a complaint with the Ministry of Law if a licensed moneylender engages in inappropriate collection practices</li></ul><p>Being in arrears is stressful, but it does not strip you of your legal protections.</p>',
      },
    ],
    faq: [
      { q: 'How much is the late fee?', a: 'Late fees are set out in your loan contract and are subject to limits under the Moneylenders Act. The exact amount will have been disclosed to you before you signed.' },
      { q: 'Will a single late payment ruin my credit?', a: 'A single late payment, while not ideal, is unlikely to have a catastrophic impact. However, it is recorded and can contribute to a lower credit score over time. Repeated late payments have a more significant effect.' },
    ],
    related: ['structuring-loan-repayment', 'early-repayment', 'what-to-check-before-borrowing'],
  },
  {
    slug: 'caveats-explained',
    category: 'Property-backed loans',
    title: 'Caveats explained: what gets lodged on your property and when',
    excerpt: 'A short guide to how caveats work in secured lending, what they mean for your property title, and when they get removed.',
    readTime: '5 min read',
    image: 'assets/blog/luxury-condo-pool-and-garden.jpg',
    keyTakeaways: [
      'A caveat is a legal notice lodged on a property title to protect the lender\'s interest.',
      'It does not transfer ownership — you remain the owner and continue to use your property.',
      'The caveat is removed (withdrawn) upon full repayment of the loan.',
      'A caveat will show up in title searches, which matters if you plan to sell or refinance during the loan.',
    ],
    sections: [
      {
        id: 'what-is-a-caveat',
        heading: 'What is a caveat?',
        content: '<p>A caveat is a legal notice registered with the <strong>Singapore Land Authority (SLA)</strong> on a property\'s title. It alerts anyone searching the title that a third party — in this case, the lender — has a claimed interest in the property.</p><p>Think of it as a <strong>flag</strong> on the property title. It doesn\'t change ownership, and it doesn\'t prevent you from living in or using the property. It simply notifies others that the lender has a security interest.</p>',
      },
      {
        id: 'when-lodged',
        heading: 'When is a caveat lodged?',
        content: '<p>In a property-backed loan, the caveat is typically lodged <strong>after you accept the loan offer and before or at the point of disbursement</strong>. The process involves:</p><ol><li>Preparation of the caveat document by the lender\'s lawyers</li><li>Lodgement with the Singapore Land Authority</li><li>Registration on the property title</li></ol><p>The cost of lodging and withdrawing the caveat (if any) will be disclosed to you as part of the loan terms.</p>',
      },
      {
        id: 'what-it-means',
        heading: 'What it means for you as a property owner',
        content: '<p><strong>Day-to-day: nothing changes.</strong> You continue to:</p><ul><li>Own the property</li><li>Live in it or rent it out</li><li>Maintain and manage it as usual</li></ul><p><strong>If you want to sell or refinance:</strong> The caveat will appear in title searches. A buyer or refinancing bank will see it. This means:</p><ul><li>You\'ll need to settle the loan (or arrange settlement from the sale proceeds) before the caveat can be removed</li><li>The presence of a caveat doesn\'t prevent a sale, but it must be addressed as part of the transaction</li></ul>',
      },
      {
        id: 'when-removed',
        heading: 'When is the caveat removed?',
        content: '<p>The caveat is <strong>withdrawn upon full repayment</strong> of the loan. The lender instructs their lawyers to file a withdrawal of caveat with the SLA, and the notice is removed from the property title.</p><p>This process typically takes a few business days after loan settlement.</p>',
      },
      {
        id: 'caveat-vs-mortgage',
        heading: 'Caveat vs. mortgage: what\'s the difference?',
        content: '<p>Both are forms of security over property, but they\'re different in nature:</p><ul><li>A <strong>mortgage</strong> gives the lender a direct legal interest in the property. It\'s the standard security used by banks for home loans.</li><li>A <strong>caveat</strong> is a notice of a claimed interest. It\'s a lighter form of security commonly used by licensed moneylenders for property-backed personal loans.</li></ul><p>In practice, a caveat provides meaningful security for the lender while being less cumbersome for the borrower than a full mortgage registration.</p>',
      },
    ],
    faq: [
      { q: 'Can I have a mortgage and a caveat on the same property?', a: 'Yes. Many borrowers have an existing bank mortgage on their property and take a property-backed personal loan secured by a caveat. The existing mortgage is factored into the loan-to-value assessment.' },
      { q: 'Does a caveat affect my credit score?', a: 'A caveat itself is a property-title matter, not a credit bureau entry. However, the loan it secures may be reported to the credit bureau as part of your overall credit profile.' },
    ],
    related: ['how-property-backed-loans-work', 'hdb-as-collateral', 'what-to-check-before-borrowing'],
  },
  {
    slug: 'early-repayment',
    category: 'Managing repayments',
    title: 'Early repayment: pros, cons, and what to ask your lender',
    excerpt: 'Is paying off your loan early always a good idea? What to look out for in early repayment clauses and penalties.',
    readTime: '3 min read',
    image: 'assets/blog/woman-holding-wooden-house-model.jpg',
    keyTakeaways: [
      'Paying off a loan early can save you interest — but check your contract for early repayment terms first.',
      'Some loans charge an early repayment fee or penalty, which can offset the interest savings.',
      'For flat-rate loans, early repayment savings may be less than you expect because interest is pre-calculated on the full tenure.',
      'Always ask your lender for a settlement figure before making an early repayment.',
    ],
    sections: [
      {
        id: 'benefits',
        heading: 'The benefits of early repayment',
        content: '<p>Paying off your loan ahead of schedule can:</p><ul><li><strong>Reduce total interest paid</strong> — The less time you owe money, the less interest accrues</li><li><strong>Free up monthly cash flow</strong> — No more instalment means more money for other priorities</li><li><strong>Release collateral</strong> — For property-backed loans, the caveat is withdrawn upon full repayment</li><li><strong>Improve your credit profile</strong> — A settled loan reflects well on your credit record</li></ul>',
      },
      {
        id: 'potential-costs',
        heading: 'The potential costs',
        content: '<p>Early repayment isn\'t always free. Look out for:</p><ul><li><strong>Early repayment fee</strong> — Some loan contracts include a fee or penalty for repaying before the agreed tenure. This is meant to compensate the lender for interest they would have earned.</li><li><strong>Pre-calculated interest</strong> — For flat-rate loans, interest is calculated upfront on the full tenure. Even if you repay early, the total interest charged may not reduce proportionally.</li><li><strong>Administrative costs</strong> — There may be administrative fees associated with early settlement, especially for secured loans (e.g., caveat withdrawal costs).</li></ul><p>These costs can sometimes offset the benefit of early repayment. Always do the maths before deciding.</p>',
      },
      {
        id: 'what-to-ask',
        heading: 'What to ask your lender',
        content: '<p>Before making an early repayment, ask:</p><ol><li><strong>"What is the total settlement figure as of [date]?"</strong> — This is the exact amount needed to fully close the loan, including any accrued interest and fees.</li><li><strong>"Is there an early repayment fee?"</strong> — And if so, how much?</li><li><strong>"How is the interest adjusted?"</strong> — Will you get an interest rebate, or is the interest pre-calculated?</li><li><strong>"What is the process and timeline?"</strong> — How long will it take to process the settlement and release any security?</li></ol>',
      },
      {
        id: 'partial-repayment',
        heading: 'Partial early repayment',
        content: '<p>Some lenders allow <strong>partial early repayment</strong> — paying off a lump sum to reduce the outstanding balance without fully closing the loan. This can:</p><ul><li>Reduce the remaining tenure</li><li>Reduce the monthly instalment amount</li><li>Or both, depending on how the lender structures the adjustment</li></ul><p>Not all loans allow partial early repayment, so check your contract or speak to your lender.</p>',
      },
    ],
    faq: [
      { q: 'Is early repayment always worth it?', a: 'Not always. If the early repayment fee is high or the interest is pre-calculated on a flat-rate basis, the savings may be minimal. Compare the settlement figure with the remaining scheduled payments to see if it makes financial sense.' },
      { q: 'Can I make partial early repayments?', a: 'This depends on your loan agreement. Some contracts allow it; others require full settlement. Ask your lender for the specific terms.' },
    ],
    related: ['structuring-loan-repayment', 'what-happens-if-you-miss-repayment', 'understanding-interest-rates'],
  },
];

window.ARTICLES = ARTICLES;
