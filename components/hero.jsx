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
      icon: <Icon src="assets/icons/shared/clock.svg" size={18} />,
      label: 'Same-Day',
      value: 'Assessment',
      cls: 'bubble--top-left',
      delay: '0.35s',
    },
    {
      icon: <Icon src="assets/icons/shared/users.svg" size={18} />,
      label: '2,000+',
      value: 'Deals Funded',
      cls: 'bubble--top-right',
      delay: '0.5s',
    },
    {
      icon: <Icon src="assets/icons/shared/home.svg" size={18} />,
      label: 'Property',
      value: 'Backed',
      cls: 'bubble--mid-left',
      delay: '0.65s',
    },
    {
      icon: <Icon src="assets/icons/homepage/zap.svg" size={18} />,
      label: '24-48hr',
      value: 'Disbursement',
      cls: 'bubble--mid-right',
      delay: '0.45s',
    },
    {
      icon: <Icon src="assets/icons/shared/shield.svg" size={18} />,
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
            Need personal financing but rejected by banks? TBS Union provides
            property-backed personal loans with same-day assessment and transparent terms.
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
