/* calculator-page.jsx — Personal Loan Calculator */

/* Build non-linear loan amount stops */
const LOAN_STEPS = (() => {
  const s = [1000];
  for (let v = 2000; v <= 100000; v += 2000) s.push(v);    // $2K–$100K in $2K steps
  for (let v = 120000; v <= 500000; v += 20000) s.push(v);  // $120K–$500K in $20K steps
  for (let v = 600000; v <= 5000000; v += 100000) s.push(v); // $600K–$5M in $100K steps
  return s;
})();
const LOAN_MAX_IDX = LOAN_STEPS.length - 1;

function amountToIdx(amt) {
  let closest = 0;
  for (let i = 1; i < LOAN_STEPS.length; i++) {
    if (Math.abs(LOAN_STEPS[i] - amt) < Math.abs(LOAN_STEPS[closest] - amt)) closest = i;
  }
  return closest;
}

function LoanCalculator() {
  const [amountIdx, setAmountIdx] = React.useState(() => amountToIdx(30000));
  const [termMonths, setTermMonths] = React.useState(12);
  const [ratePerMonth, setRatePerMonth] = React.useState(1.5);

  const amount = LOAN_STEPS[amountIdx];
  const monthlyInterest = amount * (ratePerMonth / 100);
  const totalInterest = monthlyInterest * termMonths;
  const totalPayable = amount + totalInterest;
  const monthlyRepayment = totalPayable / termMonths;
  const monthlyPrincipal = amount / termMonths;

  const formatCurrency = (n) => 'S$' + n.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const amountPct = (amountIdx / LOAN_MAX_IDX) * 100;
  const termPct = ((termMonths - 1) / (24 - 1)) * 100;
  const ratePct = ((ratePerMonth - 0.5) / (4 - 0.5)) * 100;

  return (
    <section className="calc-section">
      <div className="container">
        <div className="calc-layout">
          <div className="calc-panel">
            <div className="calc-group">
              <div className="calc-group__header">
                <label>Loan amount</label>
                <span className="calc-group__value">{formatCurrency(amount)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={LOAN_MAX_IDX}
                step="1"
                value={amountIdx}
                onChange={e => setAmountIdx(Number(e.target.value))}
                className="calc-slider"
                style={{ '--pct': amountPct + '%' }}
              />
              <div className="calc-range-labels">
                <span>S$1,000</span>
                <span>S$5,000,000</span>
              </div>
            </div>

            <div className="calc-group">
              <div className="calc-group__header">
                <label>Loan term</label>
                <span className="calc-group__value">{termMonths} {termMonths === 1 ? 'month' : 'months'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="24"
                step="1"
                value={termMonths}
                onChange={e => setTermMonths(Number(e.target.value))}
                className="calc-slider"
                style={{ '--pct': termPct + '%' }}
              />
              <div className="calc-range-labels">
                <span>1 month</span>
                <span>24 months</span>
              </div>
            </div>

            <div className="calc-group">
              <div className="calc-group__header">
                <label>Interest rate (per month)</label>
                <span className="calc-group__value">{ratePerMonth.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="4"
                step="0.1"
                value={ratePerMonth}
                onChange={e => setRatePerMonth(Number(e.target.value))}
                className="calc-slider"
                style={{ '--pct': ratePct + '%' }}
              />
              <div className="calc-range-labels">
                <span>0.5%</span>
                <span>4.0%</span>
              </div>
            </div>

            <p className="calc-disclaimer">
              * This calculator provides indicative estimates only. Actual rates and terms are determined after assessment. All fees and charges will be disclosed in your offer letter.
            </p>
          </div>

          <div className="calc-results">
            <h3>Your estimated repayment</h3>
            <div className="calc-results__grid">
              <div className="calc-result-card calc-result-card--primary">
                <span className="calc-result-card__label">Monthly repayment</span>
                <span className="calc-result-card__value">{formatCurrency(monthlyRepayment)}</span>
              </div>
              <div className="calc-result-card">
                <span className="calc-result-card__label">Monthly interest</span>
                <span className="calc-result-card__value">{formatCurrency(monthlyInterest)}</span>
              </div>
              <div className="calc-result-card">
                <span className="calc-result-card__label">Monthly principal</span>
                <span className="calc-result-card__value">{formatCurrency(monthlyPrincipal)}</span>
              </div>
            </div>

            <div className="calc-breakdown">
              <h4>Breakdown</h4>
              <div className="calc-bar">
                <div className="calc-bar__principal" style={{ width: (amount / totalPayable * 100) + '%' }}></div>
                <div className="calc-bar__interest" style={{ width: (totalInterest / totalPayable * 100) + '%' }}></div>
              </div>
              <div className="calc-bar-legend">
                <span><span className="calc-dot calc-dot--principal"></span> Principal: {formatCurrency(amount)}</span>
                <span><span className="calc-dot calc-dot--interest"></span> Interest: {formatCurrency(totalInterest)}</span>
              </div>
            </div>

            <a href="Contact.html" className="btn btn-lg btn--we calc-cta">Get a free assessment</a>
            <p className="calc-results__note">No obligation. We'll respond within one business day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalculatorApp() {
  return (
    <React.Fragment>
      <Nav tweaks={{}} page="calculator" />
      <header className="page-header">
        <div className="container">
          <span className="overline overline--soft">Tools</span>
          <h1>Personal Loan Calculator</h1>
          <p className="page-header__desc">
            Estimate your monthly repayments and total cost. Adjust the sliders to see how different loan amounts, terms, and rates affect your repayment.
          </p>
        </div>
      </header>
      <LoanCalculator />
      <CalculatorFaq />
      <CtaBanner tweaks={{ ctaStyle: 'emerald-on-white' }} />
      <ComplianceStrip />
      <Footer />
    </React.Fragment>
  );
}

function CalculatorFaq() {
  const faqs = [
    {
      q: 'How is the monthly repayment calculated?',
      a: 'This calculator uses a simple interest model: Total Interest = Loan Amount × Monthly Rate × Number of Months. The monthly repayment is the total payable divided evenly across all months. Actual loan structures may differ.',
    },
    {
      q: 'Are there any fees not shown here?',
      a: 'Licensed moneylenders may charge an administrative fee (typically up to 10% of the loan principal) and a late payment fee if applicable. All fees will be fully disclosed in your offer letter before you sign.',
    },
    {
      q: 'What interest rates does TBS Union charge?',
      a: 'Rates are determined after a full assessment of your profile and property collateral. Because our loans are property-backed, we can typically offer more competitive rates than unsecured personal loans. Contact us for an indicative quote.',
    },

  ];

  const [openIdx, setOpenIdx] = React.useState(null);

  return (
    <section className="calc-faq">
      <div className="container" style={{ maxWidth: 780 }}>
        <h2>Frequently asked questions</h2>
        <div className="calc-faq__list">
          {faqs.map((f, i) => (
            <div key={i} className={'faq-item' + (openIdx === i ? ' active' : '')}>
              <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                {f.q}
                <Icon src="assets/icons/faq/plus.svg" size={22} className="faq-question__icon" />
              </button>
              <div className="faq-answer" style={{ maxHeight: openIdx === i ? 300 : 0 }}>
                <div className="faq-answer__inner"><p>{f.a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CalculatorApp });
