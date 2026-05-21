/* chrome.jsx — Nav, Footer, ComplianceStrip, shared icons */

/* ─── Icon component: renders SVG files via CSS mask-image, inherits currentColor ─── */
function Icon({ src, size = 24, className = '', style = {} }) {
  const iconStyle = {
    display: 'inline-block',
    width: size,
    height: size,
    backgroundColor: 'currentColor',
    WebkitMaskImage: `url(${src})`,
    WebkitMaskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskImage: `url(${src})`,
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    flexShrink: 0,
    ...style,
  };
  return <span className={className} style={iconStyle}></span>;
}

function PhoneIcon({ size = 16 }) {
  return <Icon src="assets/icons/shared/phone.svg" size={size} />;
}
function ShieldIcon() {
  return <Icon src="assets/icons/shared/shield.svg" size={16} />;
}
function HomeIcon() {
  return <Icon src="assets/icons/shared/home.svg" size={16} />;
}
function ClockIcon() {
  return <Icon src="assets/icons/shared/clock.svg" size={16} />;
}
function UsersIcon() {
  return <Icon src="assets/icons/shared/users.svg" size={22} />;
}
function DollarIcon() {
  return <Icon src="assets/icons/shared/dollar-sign.svg" size={22} />;
}
function ActivityIcon() {
  return <Icon src="assets/icons/shared/activity.svg" size={22} />;
}
function CheckIcon({ size = 12 }) {
  return <Icon src="assets/icons/shared/check.svg" size={size} />;
}
function SendIcon() {
  return <Icon src="assets/icons/shared/send.svg" size={16} />;
}
function ChevDownIcon({ size = 12 }) {
  return <Icon src="assets/icons/shared/chevron-down.svg" size={size} />;
}
function CalcNavIcon() {
  return <Icon src="assets/icons/shared/calculator-nav.svg" size={20} />;
}
function BookNavIcon() {
  return <Icon src="assets/icons/shared/book-nav.svg" size={20} />;
}

/* ─── Navigation ─── */
function Nav({ tweaks, page }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = React.useState(false);
  const isHome = !page || page === 'home';

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const heroIsLight = isHome && tweaks && tweaks.heroVariant === 'light';
  const navCls = [
    'nav',
    (scrolled || !isHome) ? 'nav--solid' : '',
    heroIsLight && !scrolled ? 'nav--transparent-light' : '',
  ].filter(Boolean).join(' ');

  const hp = isHome ? '' : 'index.html';

  const resourcesDropdown = {
    tools: [
      { label: 'Personal Loan Calculator', desc: 'Estimate your monthly repayments and total cost', href: 'Calculator.html', icon: <CalcNavIcon /> },
    ],
    knowledge: [
      { label: 'Loan Guides & Tips', desc: 'Practical guides on borrowing, repayment, and more', href: 'Blog.html', icon: <BookNavIcon /> },
    ],
  };

  return (
    <React.Fragment>
      <nav className={navCls}>
        <div className="container nav__inner">
          <a href={isHome ? '/' : 'index.html'} className="nav__logo">
            <img
              src={(scrolled || !isHome || !heroIsLight) ? 'assets/logos/TBSU-Logo-White.svg' : 'assets/logos/TBSU-Logo.svg'}
              alt="TBS Union"
            />
          </a>
          <div className="nav__links">
            <a href={hp + '#product'}>Personal Loan</a>
            <div className="nav__dropdown-parent">
              <button className="nav__dropdown-trigger">
                Resources <ChevDownIcon />
              </button>
              <div className="nav__dropdown">
                <div className="nav__dropdown-inner">
                  <div className="nav__dropdown-col">
                    <span className="nav__dropdown-heading">Tools</span>
                    {resourcesDropdown.tools.map(item => (
                      <a key={item.href} href={item.href} className="nav__dropdown-item">
                        <span className="nav__dropdown-item-icon">{item.icon}</span>
                        <span>
                          <span className="nav__dropdown-item-label">{item.label}</span>
                          <span className="nav__dropdown-item-desc">{item.desc}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="nav__dropdown-col">
                    <span className="nav__dropdown-heading">Knowledge</span>
                    {resourcesDropdown.knowledge.map(item => (
                      <a key={item.href} href={item.href} className="nav__dropdown-item">
                        <span className="nav__dropdown-item-icon">{item.icon}</span>
                        <span>
                          <span className="nav__dropdown-item-label">{item.label}</span>
                          <span className="nav__dropdown-item-desc">{item.desc}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <a href="FAQ.html">FAQ</a>
            <a href="Contact.html">Contact</a>
            <a href="tel:+6563458801" className="nav__cta">
              <PhoneIcon size={14} /> 6345 8801
            </a>
          </div>
          <button className="nav__toggle" onClick={() => setMobileOpen(true)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`nav__mobile-overlay ${mobileOpen ? 'open' : ''}`}>
        <button className="nav__mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close">✕</button>
        <a href={hp + '#product'} onClick={() => setMobileOpen(false)}>Personal Loan</a>
        <button className="nav__mobile-accordion" onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}>
          Resources
          <span className={'nav__mobile-chev' + (mobileResourcesOpen ? ' open' : '')}><ChevDownIcon size={16} /></span>
        </button>
        {mobileResourcesOpen && (
          <div className="nav__mobile-sub">
            <span className="nav__mobile-sub-heading">Tools</span>
            {resourcesDropdown.tools.map(item => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>
            ))}
            <span className="nav__mobile-sub-heading">Knowledge</span>
            {resourcesDropdown.knowledge.map(item => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>
            ))}
          </div>
        )}
        <a href="FAQ.html" onClick={() => setMobileOpen(false)}>FAQ</a>
        <a href="Contact.html" onClick={() => setMobileOpen(false)}>Contact</a>
        <a href="tel:+6563458801" style={{ color: 'var(--yellow)', fontWeight: 600 }}>Call 6345 8801</a>
      </div>
    </React.Fragment>
  );
}

/* ─── Compliance Strip ─── */
function ComplianceStrip() {
  return (
    <section className="compliance">
      <div className="container">
        <div className="compliance__inner">
          <a href="https://rom.mlaw.gov.sg/information-for-borrowers/list-of-licensed-moneylenders-in-singapore/" target="_blank" rel="noopener">Verify our licence on the MinLaw Registry →</a>
          <span className="compliance__div"></span>
          <a href="https://rom.mlaw.gov.sg/information-for-borrowers/guide-to-borrowing-from-licensed-moneylenders-english/" target="_blank" rel="noopener">MinLaw FAQ for Borrowers →</a>
          <span className="compliance__div"></span>
          <span>For business loans &amp; property-backed business financing — <a href="https://www.tembusufs.com" target="_blank" rel="noopener">visit tembusufs.com</a></span>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="assets/logos/TBSU-Logo-White.svg" alt="TBS Union" />
            <p>TBS Union Pte Ltd is a licensed moneylender in Singapore, regulated by the Ministry of Law under the Moneylenders Act. We are a subsidiary of Tembusu Financial Services.</p>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html#product">Secured Personal Loan</a></li>
              <li><a href="Calculator.html">Loan Calculator</a></li>
              <li><a href="Blog.html">Guides & Tips</a></li>
              <li><a href="FAQ.html">FAQ</a></li>
              <li><a href="Contact.html">Contact Us</a></li>
              <li><a href="https://www.tembusufs.com" target="_blank" rel="noopener">Tembusu Financial Services</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+6563458801" className="btn btn--we" style={{ marginBottom: 8 }}><PhoneIcon size={14} /> 6345 8801</a></li>
              <li style={{ marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Mon – Fri, 9:00 AM – 6:00 PM</li>
              <li style={{ marginTop: 16 }}>61 Ubi Avenue 2<br />#08-02A, Automobile Megamart<br />Singapore 408898</li>
            </ul>
          </div>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <p className="footer__legal">
            TBS Union Pte Ltd is a licensed moneylender regulated by the Ministry of Law (MinLaw) under the Moneylenders Act. All loans are subject to assessment, approval, and the terms and conditions set out in the offer letter. Interest rates and terms vary based on individual circumstances. TBS Union Pte Ltd does not guarantee approval of any loan application.
          </p>
          <div className="footer__licence">
            <span>Licence No. 91/2025</span>
            <br />
            <a href="https://rom.mlaw.gov.sg/information-for-borrowers/list-of-licensed-moneylenders-in-singapore/" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, fontWeight: 500 }}>Verify on MinLaw Registry →</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Icon, PhoneIcon, ShieldIcon, HomeIcon, ClockIcon, UsersIcon,
  DollarIcon, ActivityIcon, CheckIcon, SendIcon,
  Nav, ComplianceStrip, Footer,
});
