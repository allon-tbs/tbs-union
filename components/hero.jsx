/* hero.jsx — Hero section with 3 layout variants */

function TrustBadges() {
  return (
    <div className="trust-badges">
      <div className="trust-badge">
        <span className="trust-badge__icon"><ShieldIcon /></span>
        MinLaw Licensed Moneylender
      </div>
      <div className="trust-badge">
        <span className="trust-badge__icon"><HomeIcon /></span>
        Subsidiary of Tembusu Financial Services
      </div>
      <div className="trust-badge">
        <span className="trust-badge__icon"><ClockIcon /></span>
        50+ Years Combined Experience
      </div>
    </div>);
}

/* ─── Floating Highlight Bubbles ─── */
function FloatingBubbles() {
  const bubbles = [
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
      label: 'Same-Day',
      value: 'Assessment',
      cls: 'bubble--top-left',
      delay: '0.35s',
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
      label: '2,000+',
      value: 'Deals Funded',
      cls: 'bubble--top-right',
      delay: '0.5s',
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
      label: 'Property',
      value: 'Backed',
      cls: 'bubble--mid-left',
      delay: '0.65s',
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
      label: '24-48hr',
      value: 'Disbursement',
      cls: 'bubble--mid-right',
      delay: '0.45s',
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
      label: 'Trusted',
      value: 'Licensed Lender',
      cls: 'bubble--bottom-center',
      delay: '0.55s',
    },
  ];

  return (
    <div className="hero-bubbles">
      <div className="hero-bubbles__bg">
        <img src="assets/photography/hero-condo.jpg" alt="Luxury condominium" />
        <div className="hero-bubbles__bg-overlay"></div>
      </div>
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`hero-bubble ${b.cls}`}
          style={{ animationDelay: b.delay }}
        >
          <span className="hero-bubble__icon">{b.icon}</span>
          <span className="hero-bubble__text">
            <span className="hero-bubble__value">{b.label}</span>
            <span className="hero-bubble__label">{b.value}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function HeroSection({ tweaks }) {
  const v = tweaks.heroVariant;
  const ctaMap = {
    'emerald-on-white': 'btn--ew',
    'white-on-emerald': 'btn--we',
    'accent': 'btn--acc'
  };
  const primaryCls = ctaMap[tweaks.ctaStyle] || 'btn--ew';
  const isBold = v === 'bold';
  const isLight = v === 'light';
  const ghostCls = isLight ? 'btn--ghost-dark' : 'btn--ghost-light';

  return (
    <section className={`hero hero--${v}`}>
      {isBold &&
      <div
        className="hero__bg"
        style={{ backgroundImage: 'url(assets/photography/aerial-singapore-landscape.jpg)' }}>
      </div>
      }
      <div className="container hero__split">
        <div className="hero__text">
          <span className={`overline ${isLight ? 'overline--brand' : 'overline--soft'}`}>
            Licensed Moneylender · Licence No. 91/2025
          </span>
          <h1>
            Personal Loans{' '}
            <em>Backed by Property.</em>
          </h1>
          <p className="hero__desc">
            Need personal financing but don't fit the bank's mould? TBS Union provides
            property-backed personal loans: with same-day assessment and transparent terms.
          </p>
          <div className="hero__ctas">
            <a href="tel:+6563458801" className={`btn btn-lg ${primaryCls}`}>
              <PhoneIcon size={18} /> Call 6345 8801
            </a>
            <a href="Contact.html" className={`btn btn-lg ${ghostCls}`}>
              Send an Enquiry
            </a>
          </div>
          <TrustBadges />
        </div>

        {!isBold &&
        <div className="hero__media">
          <FloatingBubbles />
        </div>
        }
      </div>
    </section>);
}

Object.assign(window, { HeroSection, TrustBadges });
