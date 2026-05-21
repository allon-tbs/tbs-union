/* chrome.jsx — Nav, Footer, ComplianceStrip, shared icons */

function PhoneIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

function ShieldIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
}

function HomeIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
}

function ClockIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
}

function UsersIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
}

function DollarIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
}

function ActivityIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
}

function CheckIcon({ size = 12 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
}

function SendIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
}

/* ─── Chevron Down Icon ─── */
function ChevDownIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

/* ─── Dropdown item icons ─── */
function CalcNavIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="10" y2="10"></line><line x1="14" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="10" y2="14"></line><line x1="14" y1="14" x2="16" y2="14"></line><line x1="8" y1="18" x2="10" y2="18"></line><line x1="14" y1="18" x2="16" y2="18"></line></svg>;
}
function BookNavIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
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

  const hp = isHome ? '' : 'TBS Union Homepage.html';

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
          <a href={isHome ? '/' : 'TBS Union Homepage.html'} className="nav__logo">
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
              <li><a href="TBS Union Homepage.html#product">Secured Personal Loan</a></li>
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
  PhoneIcon, ShieldIcon, HomeIcon, ClockIcon, UsersIcon,
  DollarIcon, ActivityIcon, CheckIcon, SendIcon,
  Nav, ComplianceStrip, Footer,
});
