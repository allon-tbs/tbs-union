/* article-page.jsx — Individual article view */

function ArticleBreadcrumb({ category }) {
  return (
    <nav className="article-breadcrumb">
      <a href="Blog.html">Guides & Tips</a>
      <span className="article-breadcrumb__sep">/</span>
      <span>{category}</span>
    </nav>
  );
}

function ArticleToc({ sections }) {
  const [activeId, setActiveId] = React.useState('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="article-toc">
      <div className="article-toc__sticky">
        <h4>Table of contents</h4>
        <ul>
          {sections.map(s => (
            <li key={s.id} className={activeId === s.id ? 'active' : ''}>
              <a href={'#' + s.id} onClick={e => {
                e.preventDefault();
                const el = document.getElementById(s.id);
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 90;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}>{s.heading}</a>
            </li>
          ))}
          <li className={activeId === 'faq' ? 'active' : ''}>
            <a href="#faq" onClick={e => {
              e.preventDefault();
              const el = document.getElementById('faq');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 90;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}>FAQ</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

function ArticleKeyTakeaways({ items }) {
  return (
    <div className="article-takeaways">
      <h4>Key takeaways</h4>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <span className="article-takeaways__bullet">
              <CheckIcon size={10} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArticleFaq({ items }) {
  const [openIdx, setOpenIdx] = React.useState(null);

  return (
    <div className="article-faq" id="faq">
      <h2>Frequently asked questions</h2>
      <div className="article-faq__list">
        {items.map((f, i) => (
          <div key={i} className={'faq-item' + (openIdx === i ? ' active' : '')}>
            <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
              {f.q}
              <svg className="faq-question__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
            <div className="faq-answer" style={{ maxHeight: openIdx === i ? 300 : 0 }}>
              <div className="faq-answer__inner"><p>{f.a}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticleRelated({ slugs }) {
  const related = slugs
    .map(slug => window.ARTICLES.find(a => a.slug === slug))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section className="article-related">
      <div className="container">
        <h2>You might also find useful</h2>
        <div className="article-related__grid">
          {related.map((a, i) => (
            <a key={i} href={'Article.html?slug=' + a.slug} className="blog-card">
              <div className="blog-card__img">
                {a.image ? <img src={a.image} alt={a.title} /> : <span className="blog-card__placeholder">{a.title.charAt(0)}</span>}
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

function ArticleCta() {
  return (
    <div className="article-cta-box">
      <h3>Need financing?</h3>
      <p>Get a no-obligation assessment from our team. We'll respond within one business day.</p>
      <div className="article-cta-box__btns">
        <a href="tel:+6563458801" className="btn btn--we"><PhoneIcon size={14} /> Call 6345 8801</a>
        <a href="Contact.html" className="btn btn--ghost-dark">Send enquiry</a>
      </div>
    </div>
  );
}

function ArticlePage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const article = window.ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <React.Fragment>
        <Nav tweaks={{}} page="article" />
        <header className="page-header">
          <div className="container">
            <h1>Article not found</h1>
            <p className="page-header__desc">
              The article you're looking for doesn't exist. <a href="Blog.html" style={{ color: 'var(--pale-green)' }}>Back to all articles</a>
            </p>
          </div>
        </header>
        <Footer />
      </React.Fragment>
    );
  }

  const allSections = [...article.sections, { id: 'faq', heading: 'FAQ' }];

  return (
    <React.Fragment>
      <Nav tweaks={{}} page="article" />
      <header className="page-header page-header--article">
        <div className="container">
          <ArticleBreadcrumb category={article.category} />
          <h1>{article.title}</h1>
          <div className="article-meta-row">
            <span className="article-meta-tag">{article.category}</span>
            <span className="article-meta-time">{article.readTime}</span>
          </div>
        </div>
      </header>

      <article className="article-body-section">
        <div className="container">
          <div className="article-layout">
            <ArticleToc sections={article.sections} />
            <div className="article-content">
              {article.image && (
                <div className="article-featured-img">
                  <img src={article.image} alt={article.title} />
                </div>
              )}
              <ArticleKeyTakeaways items={article.keyTakeaways} />

              {article.sections.map((s, i) => (
                <section key={i} id={s.id} className="article-section">
                  <h2>{s.heading}</h2>
                  <div dangerouslySetInnerHTML={{ __html: s.content }}></div>
                </section>
              ))}

              <ArticleFaq items={article.faq} />
              <ArticleCta />
            </div>
          </div>
        </div>
      </article>

      <ArticleRelated slugs={article.related} />
      <ComplianceStrip />
      <Footer />
    </React.Fragment>
  );
}

function ArticleApp() {
  return <ArticlePage />;
}

Object.assign(window, { ArticleApp });
