/* faq-page.jsx — FAQ page content with accordion */

function PlusIcon() {
  return (
    <svg className="faq-question__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}

function FaqItem({ question, children }) {
  const [open, setOpen] = React.useState(false);
  const answerRef = React.useRef(null);

  return (
    <div className={`faq-item ${open ? 'active' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {question}
        <PlusIcon />
      </button>
      <div
        className="faq-answer"
        ref={answerRef}
        style={{ maxHeight: open ? (answerRef.current?.scrollHeight || 500) + 'px' : '0px' }}
      >
        <div className="faq-answer__inner">{children}</div>
      </div>
    </div>
  );
}

function FaqPageContent() {
  return (
    <React.Fragment>
      <section className="page-header">
        <div className="container">
          <span className="overline overline--soft">Frequently Asked Questions</span>
          <h1>What You Should Know Before Borrowing</h1>
          <p className="page-header__desc">Clear answers about our loan products, the application process, fees, and your rights as a borrower.</p>
        </div>
      </section>

      <section className="faq-page">
        <div className="container">

          {/* About TBS Union */}
          <div className="faq-section">
            <h2 className="faq-section__title">About TBS Union</h2>

            <FaqItem question="Is TBS Union a licensed moneylender?">
              <p>Yes. TBS Union Pte Ltd is a licensed moneylender regulated by the Ministry of Law (MinLaw) under the Moneylenders Act. Our licence number is <strong>91/2025</strong> and we are listed on the official <a href="https://rom.mlaw.gov.sg/information-for-borrowers/list-of-licensed-moneylenders-in-singapore/" target="_blank" rel="noopener">Registry of Moneylenders</a>.</p>
              <p>We encourage all borrowers to verify the licence of any moneylender before proceeding with a loan application.</p>
            </FaqItem>

            <FaqItem question={`What is TBS Union’s relationship with Tembusu Financial Services?`}>
              <p>TBS Union Pte Ltd is a subsidiary of <a href="https://www.tembusufs.com" target="_blank" rel="noopener">Tembusu Financial Services</a>, a Singapore-based private lender that specialises in property-backed loans and automotive financing. Tembusu Financial Services has successfully funded over 2,000 deals and brings together more than 50 years of combined industry experience.</p>
              <p>TBS Union handles personal loan products under the MinLaw moneylender licence, while the parent company covers business loans, car loans, and other property-backed financing.</p>
            </FaqItem>

            <FaqItem question="Where is your office located?">
              <p>Our registered office is at <strong>61 Ubi Avenue 2, #08-02A, Automobile Megamart, Singapore 408898</strong>.</p>
              <p>You can reach us at <a href="tel:+6563458801">6345 8801</a> during business hours.</p>
            </FaqItem>
          </div>

          {/* Borrowing & Eligibility */}
          <div className="faq-section">
            <h2 className="faq-section__title">Borrowing &amp; Eligibility</h2>

            <FaqItem question="How much can I borrow with a secured loan?">
              <p>For secured loans (property-backed), there is <strong>no statutory cap</strong> on the loan amount under MinLaw regulations. The amount you can borrow depends on the value of your property and your overall financial profile.</p>
              <p>Our team will provide an indicative assessment after reviewing your situation. Call us at <a href="tel:+6563458801">6345 8801</a> to discuss your needs.</p>
            </FaqItem>

            <FaqItem question="What are the maximum interest rates a licensed moneylender can charge?">
              <p>Under MinLaw regulations (effective 1 October 2015), the maximum interest rate a licensed moneylender can charge is <strong>4% per month</strong>. This cap applies regardless of whether the loan is secured or unsecured, and regardless of your income level.</p>
              <p>If you fail to repay on time, the maximum late interest rate is also <strong>4% per month</strong>, charged only on the amount that is overdue — not on the entire outstanding balance.</p>
              <div className="faq-highlight">Interest is computed on the remaining principal only — after deducting all payments made towards the principal.</div>
            </FaqItem>

            <FaqItem question="What fees can a licensed moneylender charge?">
              <p>Under MinLaw regulations, licensed moneylenders may only impose the following charges:</p>
              <ul>
                <li>An <strong>administrative fee of up to 10%</strong> of the loan principal, charged when the loan is granted</li>
                <li>A <strong>late repayment fee of up to $60</strong> per month of late repayment</li>
                <li>Legal costs ordered by the court for a successful recovery claim</li>
              </ul>
              <div className="faq-highlight">The total charges (interest, late interest, administrative fee, and late fees) cannot exceed the original loan principal. No other fees are permitted.</div>
            </FaqItem>

            <FaqItem question="Can I borrow if I’m self-employed or freelance?">
              <p>Yes. We assess each application individually, taking into account your full financial picture — not just payslips. Self-employed individuals, freelancers, and those with variable or non-traditional income are welcome to apply, provided you own eligible property to pledge as collateral.</p>
            </FaqItem>

            <FaqItem question="Can foreigners apply for a loan?">
              <p>Eligible foreigners residing in Singapore may apply for our secured personal loan, provided they own Singapore private property that can be pledged as collateral. Eligibility is assessed on a case-by-case basis.</p>
            </FaqItem>

            <FaqItem question="What property types do you accept as collateral?">
              <p>We accept <strong>private residential property</strong> (condominiums, landed houses) and <strong>commercial property</strong> (offices, shophouses, retail units) as collateral.</p>
              <p>HDB flats and JTC leasehold properties are not eligible as collateral for our secured personal loans.</p>
            </FaqItem>

            <FaqItem question="What documents do I need?">
              <p>Generally, you’ll need to provide:</p>
              <ul>
                <li>NRIC or passport</li>
                <li>Proof of income (NOA, bank statements, or business financials)</li>
                <li>Property ownership documents (title deed or strata title)</li>
              </ul>
              <p>Our team will confirm the exact requirements after an initial conversation about your situation. We don’t ask you to prepare a stack of documents before we’ve even spoken.</p>
            </FaqItem>
          </div>

          {/* Process & Repayment */}
          <div className="faq-section">
            <h2 className="faq-section__title">Process &amp; Repayment</h2>

            <FaqItem question="How fast can I get the money?">
              <p>Once your loan is approved, funds can be <strong>disbursed within the week</strong>. Our assessment is typically completed within the same business day, provided all required documents are submitted.</p>
              <p>Assessment and disbursement timelines are subject to completeness of documentation and internal approval processes.</p>
            </FaqItem>

            <FaqItem question="What happens if I can’t repay on time?">
              <p>Late repayments may result in late interest (up to 4% per month on the overdue amount) and a late fee (up to $60 per month). Late repayments will also be reflected in your credit record.</p>
              <p>If you’re facing difficulties, we encourage you to contact us as soon as possible so we can discuss your options. Borrow only what you need and are able to repay.</p>
            </FaqItem>


            <FaqItem question="Will applying affect my credit score?">
              <p>Simply enquiring or applying for a loan does not impact your credit score. However, defaulting or making late repayments on any loan will affect your credit record. We provide clear repayment schedules to help you manage your loan responsibly.</p>
            </FaqItem>
          </div>

          {/* Safety & Regulation */}
          <div className="faq-section">
            <h2 className="faq-section__title">Safety &amp; Regulation</h2>

            <FaqItem question="How do I verify that TBS Union is a licensed moneylender?">
              <p>Visit the Ministry of Law’s official <a href="https://rom.mlaw.gov.sg/information-for-borrowers/list-of-licensed-moneylenders-in-singapore/" target="_blank" rel="noopener">List of Licensed Moneylenders</a> and search for <strong>TBS Union Pte. Ltd.</strong></p>
              <p>Confirm that the business name, licence number (91/2025), and registered address (61 Ubi Avenue 2, #08-02A, Automobile Megamart, Singapore 408898) match. A legitimate licensed moneylender will always operate from their registered place of business.</p>
            </FaqItem>

            <FaqItem question="What should I consider before taking a loan?">
              <p>Before borrowing, you should:</p>
              <ul>
                <li>Consider whether you are able to meet the repayment terms, taking into account your income and existing financial obligations</li>
                <li>Borrow only what you need and are able to repay</li>
                <li>Make sure you fully understand all terms of the loan contract, including the repayment schedule, interest rate, and applicable fees</li>
                <li>Be aware that late payments can result in additional charges and financial strain</li>
                <li>Consider the implications of pledging your property as collateral — a caveat may be lodged against it (see below)</li>
              </ul>
              <p>For more guidance, read the Ministry of Law’s <a href="https://rom.mlaw.gov.sg/information-for-borrowers/guide-to-borrowing-from-licensed-moneylenders-english/" target="_blank" rel="noopener">FAQ on Borrowing from Licensed Moneylenders</a>.</p>
            </FaqItem>

            <FaqItem question="What is a caveat on property and what are the implications?">
              <p>When a secured loan is granted against your property, the lender may lodge a <strong>caveat</strong> against your property title as security for the loan. This is a legal notice registered with the Singapore Land Authority.</p>
              <p>What this means for you:</p>
              <ul>
                <li>You will not be able to sell the property without first repaying the loan in full</li>
                <li>If repayment is taken from the net sale proceeds, it can reduce a substantial portion — or in some cases all — of those proceeds</li>
              </ul>
              <div className="faq-highlight">Consider this carefully before agreeing to any loan term that allows a lender to lodge a caveat on your property. We encourage all borrowers to seek independent legal counsel before signing a loan contract.</div>
            </FaqItem>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Have More Questions?</h2>
          <p>Our team is happy to walk you through the process and answer any questions you have.</p>
          <a href="tel:+6563458801" className="btn btn-lg btn--ew">
            <PhoneIcon size={18} /> Call 6345 8801
          </a>
          <p className="cta-banner__sub">Or <a href="Contact.html">send us an enquiry</a></p>
        </div>
      </section>
    </React.Fragment>
  );
}

function FaqApp() {
  return (
    <React.Fragment>
      <Nav page="faq" />
      <FaqPageContent />
      <ComplianceStrip />
      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { FaqApp, FaqItem });
