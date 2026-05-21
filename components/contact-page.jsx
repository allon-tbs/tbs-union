/* contact-page.jsx — Contact page with form + details + Before You Borrow */

function ExternalLinkIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;
}
function ChevronRightIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;
}
function MapPinIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
}

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const handleSubmit = () => {
    const name = document.getElementById('name')?.value?.trim();
    const phone = document.getElementById('phone')?.value?.trim();
    const loanType = document.getElementById('loanType')?.value;
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!phone) newErrors.phone = true;
    if (!loanType) newErrors.loanType = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };

  const clearError = (field) => {
    setErrors(prev => { const n = {...prev}; delete n[field]; return n; });
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success__icon"><CheckIcon size={28} /></div>
        <h3>Enquiry Received</h3>
        <p>Thank you — we’ve received your enquiry and will be in touch within one business day. If your matter is urgent, call us directly at <a href="tel:+6563458801">6345 8801</a>.</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name <span className="required">*</span></label>
          <input type="text" id="name" placeholder="Your full name" onFocus={() => clearError('name')} style={errors.name ? {borderColor:'#c0392b'} : {}} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number <span className="required">*</span></label>
          <input type="tel" id="phone" placeholder="e.g. 9123 4567" onFocus={() => clearError('phone')} style={errors.phone ? {borderColor:'#c0392b'} : {}} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="your@email.com" />
      </div>
      <div className="form-group">
        <label htmlFor="loanType">What are you looking for? <span className="required">*</span></label>
        <select id="loanType" defaultValue="" onFocus={() => clearError('loanType')} style={errors.loanType ? {borderColor:'#c0392b'} : {}}>
          <option value="" disabled>Select an option</option>
          <option value="secured-personal-loan">Secured Personal Loan (Property-Backed)</option>
          <option value="general-enquiry">General Enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Brief Description</label>
        <textarea id="message" placeholder="Tell us a bit about your situation or what you’d like to know. This is optional."></textarea>
      </div>
      <button type="button" className="btn-submit" onClick={handleSubmit}>
        <SendIcon /> Send Enquiry
      </button>
      <p className="form-disclaimer">
        By submitting this form, you consent to being contacted by TBS Union Pte Ltd regarding your enquiry. We do not share your information with third parties. This enquiry does not constitute a loan application.
      </p>
    </React.Fragment>
  );
}

function ContactDetails() {
  return (
    <div className="contact-details">
      <h2>Get in Touch</h2>
      <p className="contact-details__subtitle">The fastest way to reach us is by phone. For general enquiries, you can also use the form on this page.</p>

      <div className="detail-card">
        <div className="detail-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <div className="detail-card__content">
          <h4>Phone</h4>
          <a href="tel:+6563458801">6345 8801</a>
          <p className="detail-note">Mon – Fri, 9:00 AM – 6:00 PM</p>
        </div>
      </div>

      <div className="detail-card">
        <div className="detail-card__icon"><MapPinIcon /></div>
        <div className="detail-card__content">
          <h4>Office</h4>
          <p>61 Ubi Avenue 2<br />#08-02A, Automobile Megamart<br />Singapore 408898</p>
          <p className="detail-note">Near Ubi MRT (Circle Line / Downtown Line)</p>
        </div>
      </div>

      <div className="detail-card">
        <div className="detail-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <div className="detail-card__content">
          <h4>Operating Hours</h4>
          <p>Monday – Friday: By Appointment Only <a href="https://api.whatsapp.com/send/?phone=6588375425&text=Hello%21+I%27d+like+to+know+more+about+personal+loans" target="_blank" rel="noopener" className="whatsapp-tag">WhatsApp Us</a><br />Saturday, Sunday &amp; Public Holidays: Closed</p>
        </div>
      </div>

      <div className="detail-card">
        <div className="detail-card__icon"><ShieldIcon /></div>
        <div className="detail-card__content">
          <h4>Licence</h4>
          <p>MinLaw Licence No. 91/2025</p>
          <p className="detail-note"><a href="https://rom.mlaw.gov.sg/information-for-borrowers/list-of-licensed-moneylenders-in-singapore/" target="_blank" rel="noopener">Verify on MinLaw Registry →</a></p>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7338!2d103.8930!3d1.3280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181a6e736897%3A0x2e620c5b1eb8722b!2sAutomobile+Megamart!5e0!3m2!1sen!2ssg!4v1"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TBS Union office location at 61 Ubi Avenue 2, Singapore"
        ></iframe>
      </div>
    </div>
  );
}

function BeforeYouBorrow() {
  return (
    <section className="before-borrow">
      <div className="container">
        <div className="before-borrow__inner">
          <h2>Before You Borrow</h2>
          <p>Borrowing from a licensed moneylender is a serious financial decision. Before proceeding, consider the following:</p>
          <ul>
            <li>Borrow only what you need and are confident you can repay on time</li>
            <li>Understand all terms in the loan contract, including interest rates, fees, and repayment schedule</li>
            <li>Be aware that late repayments will incur additional charges and may affect your credit record</li>
            <li>If you are pledging property as collateral, understand that a caveat may be lodged against your title — you will not be able to sell without first repaying the loan</li>
            <li>Always verify a moneylender’s licence before engaging with them</li>
          </ul>
          <div className="before-borrow__links">
            <a href="https://rom.mlaw.gov.sg/information-for-borrowers/guide-to-borrowing-from-licensed-moneylenders-english/" target="_blank" rel="noopener" className="before-borrow__link">
              <ExternalLinkIcon /> MinLaw FAQ for Borrowers
            </a>
            <a href="https://rom.mlaw.gov.sg/information-for-borrowers/list-of-licensed-moneylenders-in-singapore/" target="_blank" rel="noopener" className="before-borrow__link">
              <ExternalLinkIcon /> Verify Licensed Moneylenders
            </a>
            <a href="FAQ.html" className="before-borrow__link">
              <ChevronRightIcon /> Read Our FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactApp() {
  return (
    <React.Fragment>
      <Nav page="contact" />

      <section className="page-header">
        <div className="container">
          <span className="overline overline--soft">Contact Us</span>
          <h1>Speak to Our Team</h1>
          <p className="page-header__desc">Whether you’re exploring options or ready to apply, we’re here to help. No obligation, no pressure.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <ContactDetails />
            <div className="contact-form-wrapper">
              <h3>Send an Enquiry</h3>
              <p>Fill in your details and we’ll get back to you within one business day.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <BeforeYouBorrow />
      <ComplianceStrip />
      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { ContactApp });
