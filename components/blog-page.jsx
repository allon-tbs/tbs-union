/* blog-page.jsx — Loan Guides & Tips blog/education hub */

function BlogHero() {
  return (
    <header className="page-header">
      <div className="container">
        <span className="overline overline--soft">Knowledge</span>
        <h1>Loan Guides & Tips</h1>
        <p className="page-header__desc">
          Practical guides on borrowing responsibly, understanding loan terms, and making informed financing decisions in Singapore.
        </p>
      </div>
    </header>
  );
}

function BlogCategories() {
  const categories = [
    {
      title: 'Borrowing basics',
      desc: 'New to moneylender loans? Start here. Understand how licensed moneylending works in Singapore, what to expect, and how to protect yourself.',
      count: 4,
      color: 'var(--emerald)',
    },
    {
      title: 'Property-backed loans',
      desc: 'Learn how using property as collateral can unlock better terms, higher amounts, and faster approval compared to unsecured personal loans.',
      count: 3,
      color: 'var(--bottle-green)',
    },
    {
      title: 'Managing repayments',
      desc: 'Tips on structuring repayments, avoiding late fees, and strategies for paying off your loan ahead of schedule.',
      count: 3,
      color: '#3d7a64',
    },
  ];

  return (
    <section className="blog-categories">
      <div className="container">
        <h2>Explore by topic</h2>
        <div className="blog-categories__grid">
          {categories.map((cat, i) => (
            <div className="blog-cat-card" key={i}>
              <div className="blog-cat-card__bar" style={{ background: cat.color }}></div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <span className="blog-cat-card__count">{cat.count} articles</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogArticles() {
  const articles = [
    {
      slug: 'licensed-moneylender-vs-bank-loan',
      category: 'Borrowing basics',
      title: 'Licensed moneylender vs bank loan: what\'s the real difference?',
      excerpt: 'A clear comparison of how licensed moneylenders and banks differ in terms of eligibility, speed, rates, and regulation in Singapore.',
      readTime: '5 min read',
      image: 'assets/blog/receptionist-at-financial-office.jpg',
    },
    {
      slug: 'how-property-backed-loans-work',
      category: 'Property-backed loans',
      title: 'How property-backed personal loans work at TBS Union',
      excerpt: 'An overview of how pledging your property as collateral can help you access higher loan amounts at more competitive rates.',
      readTime: '4 min read',
      image: 'assets/blog/property-investment-cash-house-3d.jpg',
    },
    {
      slug: 'what-to-check-before-borrowing',
      category: 'Borrowing basics',
      title: 'What to check before borrowing from a licensed moneylender',
      excerpt: 'A practical checklist covering licence verification, fee disclosure, contract terms, and your rights as a borrower under the Moneylenders Act.',
      readTime: '6 min read',
      image: 'assets/blog/couple-signing-home-loan-documents.jpg',
    },
    {
      slug: 'structuring-loan-repayment',
      category: 'Managing repayments',
      title: 'How to structure your loan repayment so it doesn\'t hurt',
      excerpt: 'Tips on choosing the right loan tenure, setting up repayment reminders, and budgeting around your monthly instalment.',
      readTime: '4 min read',
      image: 'assets/blog/happy-family-playing-on-sofa.jpg',
    },
    {
      slug: 'hdb-as-collateral',
      category: 'Property-backed loans',
      title: 'Can I use my HDB flat as collateral for a personal loan?',
      excerpt: 'Understanding the rules around HDB as loan collateral, what types of property are accepted, and the valuation process.',
      readTime: '5 min read',
      image: 'assets/blog/modern-apartment-complex-poolside.jpg',
    },
    {
      slug: 'understanding-interest-rates',
      category: 'Borrowing basics',
      title: 'Understanding interest rates: flat rate vs effective rate',
      excerpt: 'A plain-language explainer on the two main ways interest is calculated, and why the number you see isn\'t always the number you pay.',
      readTime: '3 min read',
      image: 'assets/blog/woman-with-glasses-thinking.jpg',
    },
    {
      slug: 'what-happens-if-you-miss-repayment',
      category: 'Managing repayments',
      title: 'What happens if you miss a loan repayment?',
      excerpt: 'The consequences of a missed payment, what fees apply under the Moneylenders Act, and how to get back on track.',
      readTime: '4 min read',
      image: 'assets/blog/red-car-driving-on-city-bridge.jpg',
    },
    {
      slug: 'caveats-explained',
      category: 'Property-backed loans',
      title: 'Caveats explained: what gets lodged on your property and when',
      excerpt: 'A short guide to how caveats work in secured lending, what they mean for your property title, and when they get removed.',
      readTime: '5 min read',
      image: 'assets/blog/luxury-condo-pool-and-garden.jpg',
    },
    {
      slug: 'early-repayment',
      category: 'Managing repayments',
      title: 'Early repayment: pros, cons, and what to ask your lender',
      excerpt: 'Is paying off your loan early always a good idea? What to look out for in early repayment clauses and penalties.',
      readTime: '3 min read',
      image: 'assets/blog/woman-holding-wooden-house-model.jpg',
    },
  ];

  const [filter, setFilter] = React.useState('All');
  const cats = ['All', 'Borrowing basics', 'Property-backed loans', 'Managing repayments'];
  const filtered = filter === 'All' ? articles : articles.filter(a => a.category === filter);

  return (
    <section className="blog-articles">
      <div className="container">
        <div className="blog-articles__header">
          <h2>All articles</h2>
          <div className="blog-filter">
            {cats.map(c => (
              <button
                key={c}
                className={'blog-filter__btn' + (filter === c ? ' active' : '')}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="blog-articles__grid">
          {filtered.map((a, i) => (
            <a href={'Article.html?slug=' + a.slug} className="blog-card" key={a.slug}>
              <div className="blog-card__img">
                <img src={a.image} alt={a.title} />
              </div>
              <div className="blog-card__body">
                <span className="blog-card__cat">{a.category}</span>
                <h4>{a.title}</h4>
                <p>{a.excerpt}</p>
                <span className="blog-card__meta">{a.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCta() {
  return (
    <section className="blog-cta">
      <div className="container">
        <div className="blog-cta__inner">
          <div>
            <h3>Have a question about borrowing?</h3>
            <p>Our team is happy to answer your questions. No obligation, no hard sell.</p>
          </div>
          <a href="Contact.html" className="btn btn-lg btn--we">Talk to our team</a>
        </div>
      </div>
    </section>
  );
}

function BlogApp() {
  return (
    <React.Fragment>
      <Nav tweaks={{}} page="blog" />
      <BlogHero />
      <BlogCategories />
      <BlogArticles />
      <BlogCta />
      <ComplianceStrip />
      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { BlogApp });
