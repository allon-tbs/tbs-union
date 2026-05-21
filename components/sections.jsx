/* sections.jsx — Body sections: About, Product, WhyUs, UseCases, Process, CtaBanner */

/* ─── SVG icons for use-case cards ─── */
function LayersIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
}
function ToolIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
}
function BriefcaseIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
}
function BookIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
}
function ZapIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
}
function KeyIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>;
}

/* ─── About Section ─── */
function AboutSection() {
  const stats = [
    { number: '2,000+', label: 'Deals funded by\nTembusu Group' },
    { number: '$1B+', label: 'In loan transactions\nfunded' },
    { number: '50+', label: 'Years combined\nindustry experience' },
    { number: '24hr', label: 'Funds disbursed\nwithin 24hr of approval' },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__text">
            <span className="overline overline--brand">Who We Are</span>
            <h2>A Licensed Moneylender You Can Trust</h2>
            <p>
              TBS Union Pte Ltd is a licensed moneylender regulated by the Ministry of Law (MinLaw)
              under the Moneylenders Act. We specialise in <strong>property-backed personal loans</strong> for individuals who need financing that looks beyond just a credit score.
            </p>
            <p>
              We are a subsidiary of{' '}
              <a href="https://www.tembusufs.com" target="_blank" rel="noopener">Tembusu Financial Services</a>,
              a trusted private lender since 2018 that has successfully funded over 2,000 deals totalling
              more than $1 billion across property, business, and vehicle financing.
            </p>
            <p>
              Been declined by a bank, or have a complex income structure? We assess
              your situation with a human touch, not just an algorithm.
            </p>
            <p style={{ marginTop: 8 }}>
              <a href="#scam-advisory" style={{ fontSize: 14 }}>Read Scam Advisory ↓</a>
            </p>
          </div>
          <div className="about__stats">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-card__number">{s.number}</div>
                <div className="stat-card__label">{s.label.split('\n').map((line, j) =>
                  <React.Fragment key={j}>{line}{j === 0 && <br />}</React.Fragment>
                )}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Product Section ─── */
function ProductSection({ tweaks }) {
  const cardsCls = `cards--${tweaks.cardStyle}`;
  const features = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
      title: 'Property-Backed',
      desc: 'Use your private residential or commercial property as collateral. Property backing means higher loan amounts at more competitive rates.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
      title: 'Same-Day Assessment',
      desc: 'Submit your documents and receive an indicative assessment within the same business day. Funds disbursed within 24 hours of approval.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
      title: 'Transparent Terms',
      desc: 'All rates, fees, and repayment terms are fully disclosed in your offer letter before you sign. No hidden charges. No surprises.',
    },
    {
      icon: <UsersIcon />,
      title: 'Direct Lender',
      desc: 'You deal with us directly — no brokers, no middlemen, no markup fees. Our team guides you from application to disbursement.',
    },
    {
      icon: <DollarIcon />,
      title: 'Competitive Rates',
      desc: 'Property collateral allows us to offer more competitive interest rates. Rates are quoted after assessment and disclosed in the offer letter.',
    },
    {
      icon: <ActivityIcon />,
      title: 'Flexible Assessment',
      desc: 'We assess your full financial picture — not just a credit score. Self-employed, variable income, or complex profiles are welcome.',
    },
  ];

  const eligibility = [
    'Singapore Citizens and Permanent Residents with property ownership',
    'Eligible foreigners residing in Singapore with property ownership',
    'Private residential property (condominiums, landed houses)',
    'Commercial property (offices, shophouses, retail units)',
    'Salaried employees, self-employed individuals, and freelancers',
    'Individuals with complex income structures or prior bank rejections',
  ];

  return (
    <section className="product" id="product">
      <div className="container">
        <div className="product__intro">
          <span className="overline overline--brand">Our Product</span>
          <h2>Secured Personal Loan</h2>
          <p>
            Use your private property as collateral to access a personal loan with competitive rates
            and higher borrowing limits. Because your loan is secured against real property, we can
            offer better terms than a typical unsecured personal loan.
          </p>
        </div>

        <div className={`product__features ${cardsCls}`}>
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-card__icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="eligibility">
          <h3>Who Can Apply</h3>
          <div className="eligibility__grid">
            {eligibility.map((item, i) => (
              <div className="eligibility__item" key={i}>
                <span className="eligibility__check"><CheckIcon /></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us Section ─── */
function WhySection({ tweaks }) {
  const cardsCls = `cards--${tweaks.cardStyle}`;
  const cards = [
    {
      num: '01',
      title: 'Property-Backed Means Better Terms',
      desc: 'Most moneylenders focus on small unsecured loans. We specialise in secured lending — property collateral means we can offer higher amounts at more competitive rates than a typical moneylender.',
    },
    {
      num: '02',
      title: 'Backed by Tembusu Financial Services',
      desc: 'We\'re part of a group that has funded over 2,000 deals and brings 50+ years of combined experience in property, business, and vehicle financing.',
    },
    {
      num: '03',
      title: 'Human Assessment, Not Just an Algorithm',
      desc: 'Every application is reviewed by experienced professionals who look at your full financial picture — not just a credit score. Self-employed, variable income, or complex profiles are assessed fairly.',
    },
    {
      num: '04',
      title: 'Transparent and Responsible',
      desc: 'All terms are disclosed upfront in your offer letter. No hidden fees, no broker charges, no surprises. We encourage borrowers to seek independent legal counsel before signing.',
    },
  ];

  return (
    <section className="why-us" id="why">
      <div className="container">
        <div className="why-us__header">
          <span className="overline overline--brand">Why TBS Union</span>
          <h2>Not Your Typical Moneylender</h2>
          <p>We're built differently. As part of the Tembusu Financial Services group, we bring institutional-level expertise to personal lending.</p>
        </div>
        <div className={`why-us__grid ${cardsCls}`}>
          {cards.map((c, i) => (
            <div className="why-card" key={i}>
              <div className="why-card__num">{c.num}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Use Cases Section ─── */
function UseCasesSection() {
  const cases = [
    { icon: <LayersIcon />, title: 'Debt Consolidation', desc: 'Combine multiple debts into one loan with potentially lower interest. Simplify your repayments and reduce overall cost.' },
    { icon: <ToolIcon />, title: 'Home Renovations', desc: 'Fund renovations or property improvements without depleting your savings or tapping into long-term investments.' },
    { icon: <BriefcaseIcon />, title: 'Bridging an Income Gap', desc: 'Cover a short-term shortfall between jobs, during a career transition, or while waiting on business proceeds.' },
    { icon: <ZapIcon />, title: 'Time-Sensitive Needs', desc: 'When you need financing faster than a bank can move — medical expenses, family obligations, or urgent personal matters.' },
    { icon: <KeyIcon />, title: 'Unlocking Property Equity', desc: 'Your property holds value you can deploy. Access capital tied up in your asset without selling it.' },
  ];

  return (
    <section className="use-cases">
      <div className="container">
        <span className="overline overline--soft">When to Consider</span>
        <h2>When a Secured Personal Loan Makes Sense</h2>
        <p className="use-cases__subtitle">
          If you own property and need personal financing, a secured loan lets you access better terms by leveraging your asset.
        </p>
        <div className="use-cases__grid">
          {cases.map((c, i) => (
            <div className="uc-card" key={i}>
              <div className="uc-card__icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process Section ─── */
function ProcessSection() {
  const steps = [
    { num: '1', title: 'Online Assessment', desc: 'Call us or submit an enquiry. Share your property address (for valuation), and how much you need.' },
    { num: '2', title: 'Loan Structuring', desc: 'Once your documents are submitted, we design a solution around your timeline, needs & objectives.' },
    { num: '3', title: 'Approval & Disbursement', desc: 'Get approval in hours, and funds disbursed within the week. No hidden charges.' },
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process__header">
          <span className="overline overline--brand">How It Works</span>
          <h2>Three Simple Steps</h2>
          <p>From first call to funds in your account — here's what to expect.</p>
        </div>
        <div className="process__steps">
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step__num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="Contact.html" className="btn btn-lg btn--we">Send an Enquiry</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Scam Advisory Section ─── */
function AlertTriangleIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
}

function ScamAdvisorySection() {
  return (
    <section className="scam-advisory" id="scam-advisory">
      <div className="container">
        <div className="scam-advisory__inner">
          <div className="scam-advisory__header">
            <span className="scam-advisory__badge"><AlertTriangleIcon /> Scam Advisory</span>
            <h3>Protect Yourself from Fraudulent Websites</h3>
            <p>
              We have identified a website impersonating TBS Union. This site is <strong>not affiliated</strong> with us in any way.
            </p>
          </div>
          <div className="scam-advisory__content">
            <div className="scam-advisory__fake-site">
              <span className="scam-advisory__fake-label">Fraudulent website</span>
              <div className="scam-advisory__url-box">
                <span className="scam-advisory__url-x">✕</span>
                <code>https://tbsunion-sg.com/</code>
              </div>
              <div className="scam-advisory__screenshot">
                <img src="assets/scam/fake-site-screenshot.jpg" alt="Screenshot of fraudulent website impersonating TBS Union" />
                <div className="scam-advisory__fake-stamp">FAKE</div>
              </div>
            </div>
            <div className="scam-advisory__points">
              <span className="scam-advisory__real-label">Remember</span>
              <ul>
                <li>Our only official website is <strong>tbsunion.com.sg</strong></li>
                <li>We do not send unsolicited SMS, WhatsApp messages, or cold calls</li>
                <li>We will never ask for payment before loan disbursement</li>
              </ul>
              <p className="scam-advisory__verify">
                Always verify our licence on the <a href="https://rom.mlaw.gov.sg/information-for-borrowers/list-of-licensed-moneylenders-in-singapore/" target="_blank" rel="noopener">MinLaw Registry</a> before engaging with any moneylender.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
function CtaBanner({ tweaks }) {
  const ctaMap = {
    'emerald-on-white': 'btn--ew',
    'white-on-emerald': 'btn--we',
    'accent': 'btn--acc',
  };
  /* On emerald bg, force white-pill or accent for contrast */
  let primaryCls = ctaMap[tweaks.ctaStyle] || 'btn--ew';
  if (tweaks.ctaStyle === 'white-on-emerald') primaryCls = 'btn--ew';

  return (
    <section className="cta-banner" id="contact">
      <div className="container">
        <h2>Ready to Explore Your Options?</h2>
        <p>Speak to our team for a confidential, no-obligation assessment of your situation.</p>
        <a href="tel:+6563458801" className={`btn btn-lg ${primaryCls}`}>
          <PhoneIcon size={18} /> Call 6345 8801
        </a>
        <p className="cta-banner__sub">
          Or <a href="Contact.html">send us an enquiry</a> — we'll get back to you within one business day.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, {
  AboutSection, ProductSection, WhySection,
  UseCasesSection, ProcessSection, ScamAdvisorySection, CtaBanner,
});
