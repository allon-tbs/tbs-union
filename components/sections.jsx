/* sections.jsx — Body sections: About, Product, WhyUs, UseCases, Process, CtaBanner */

/* ─── SVG icons for use-case cards ─── */
function LayersIcon() { return <Icon src="assets/icons/homepage/layers.svg" size={20} />; }
function ToolIcon() { return <Icon src="assets/icons/homepage/tool.svg" size={20} />; }
function BriefcaseIcon() { return <Icon src="assets/icons/homepage/briefcase.svg" size={20} />; }
function BookIcon() { return <Icon src="assets/icons/shared/book-nav.svg" size={20} />; }
function ZapIcon() { return <Icon src="assets/icons/homepage/zap.svg" size={20} />; }
function KeyIcon() { return <Icon src="assets/icons/homepage/key.svg" size={20} />; }

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
      icon: <Icon src="assets/icons/shared/home.svg" size={22} />,
      title: 'Property-Backed',
      desc: 'Use your private residential or commercial property as collateral. Property backing means higher loan amounts at more competitive rates.',
    },
    {
      icon: <Icon src="assets/icons/shared/clock.svg" size={22} />,
      title: 'Same-Day Assessment',
      desc: 'Submit your documents and receive an indicative assessment within the same business day. Funds disbursed within 24 hours of approval.',
    },
    {
      icon: <Icon src="assets/icons/shared/shield.svg" size={22} />,
      title: 'Transparent Terms',
      desc: 'All rates, fees, and repayment terms are fully disclosed in your offer letter before you sign. No hidden charges. No surprises.',
    },
    {
      icon: <Icon src="assets/icons/shared/users.svg" size={22} />,
      title: 'Direct Lender',
      desc: 'You deal with us directly — no brokers, no middlemen, no markup fees. Our team guides you from application to disbursement.',
    },
    {
      icon: <Icon src="assets/icons/shared/dollar-sign.svg" size={22} />,
      title: 'Competitive Rates',
      desc: 'Property collateral allows us to offer more competitive interest rates. Rates are quoted after assessment and disclosed in the offer letter.',
    },
    {
      icon: <Icon src="assets/icons/shared/activity.svg" size={22} />,
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
  return <Icon src="assets/icons/homepage/alert-triangle.svg" size={20} />;
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
