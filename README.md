# Handoff: TBS Union Website

## Overview

This is the complete marketing website for **TBS Union Pte Ltd**, a MinLaw-licensed moneylender in Singapore (subsidiary of Tembusu Financial Services). The site covers their property-backed personal loan product across 6 page types: Homepage, FAQ, Contact, Loan Calculator, Blog listing, and Article detail.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing intended look and behaviour, not production code to copy directly. The task is to **recreate these designs in the target codebase's existing environment** (React, Next.js, Vue, etc.) using its established patterns and libraries — or, if no environment exists yet, to choose the most appropriate framework (e.g. Next.js) and implement the designs there.

The prototypes use React via Babel-in-browser transpilation. In production, replace this with a proper build toolchain.

## Fidelity

These are **high-fidelity (hifi)** mockups. All colors, typography, spacing, border radii, shadows, hover/active states, and interactions represent the final intended design. The developer should recreate the UI pixel-perfectly using the codebase's existing libraries and patterns.

---

## Site Architecture

| Page | HTML File | Entry Component | Description |
|------|-----------|-----------------|-------------|
| Homepage | `TBS Union Homepage.html` | `App` (app.jsx) | Main landing page with hero, about, product features, why us, use cases, process steps, CTA |
| FAQ | `FAQ.html` | `FaqApp` (faq-page.jsx) | Accordion FAQ grouped by category |
| Contact | `Contact.html` | `ContactApp` (contact-page.jsx) | Contact form + office details + map + "Before You Borrow" disclosure |
| Calculator | `Calculator.html` | `CalculatorApp` (calculator-page.jsx) | Interactive loan calculator with 3 sliders |
| Blog | `Blog.html` | `BlogApp` (blog-page.jsx) | Education hub with category cards + filterable article grid |
| Article | `Article.html` | `ArticleApp` (article-page.jsx) | Individual article with TOC sidebar, key takeaways, inline FAQ, related articles |

### Shared Components (chrome.jsx)

- **Nav** — Fixed header (72px). Transparent on hero, solid `#063222` on scroll. Dropdown menu for "Resources". Mobile hamburger overlay. Yellow pill CTA for phone number.
- **Footer** — Bottle Green (`#063222`) background. 3-column grid: brand description, quick links, contact info. Legal disclaimer + licence number below divider.
- **ComplianceStrip** — Beige bar with MinLaw verification links. Appears above footer on all pages.

### Component Files

| File | Components Exported | Purpose |
|------|---------------------|---------|
| `components/chrome.jsx` | Nav, Footer, ComplianceStrip, PhoneIcon, ShieldIcon, HomeIcon, ClockIcon, UsersIcon, DollarIcon, ActivityIcon, CheckIcon, SendIcon | Shared chrome + icon library |
| `components/hero.jsx` | HeroSection, TrustBadges | Hero with 3 layout variants + floating stat bubbles |
| `components/sections.jsx` | AboutSection, ProductSection, WhySection, UseCasesSection, ProcessSection, ScamAdvisorySection, CtaBanner | Homepage body sections |
| `components/app.jsx` | App | Homepage root with Tweaks integration |
| `components/faq-page.jsx` | FaqApp, FaqItem | FAQ page with accordion items |
| `components/contact-page.jsx` | ContactApp | Contact form, details, "Before You Borrow" |
| `components/calculator-page.jsx` | CalculatorApp | Loan calculator with sliders + result panel |
| `components/blog-page.jsx` | BlogApp | Blog hub with categories + article grid |
| `components/article-page.jsx` | ArticleApp | Article detail with TOC, takeaways, related |
| `components/article-data.jsx` | ARTICLES (global array) | All 9 article content objects |

### Stylesheets

| File | Scope |
|------|-------|
| `styles/homepage.css` | Reset, tokens, typography, buttons, nav, hero, all homepage sections, footer, responsive breakpoints |
| `styles/pages.css` | FAQ, Contact, Calculator, Blog, Article page-specific styles |

---

## Screens / Views

### 1. Homepage

**Layout:** Full-width sections stacked vertically. Max content width: 1140px centered.

#### Hero Section (3 variants controlled by `heroVariant` tweak)

- **Dark** (default): Gradient background `linear-gradient(160deg, #031a10 0%, #04301e 30%, #005a3d 100%)`. 2-column grid: left text + right floating bubbles over hero image. White heading with pale green emphasis. Trust badges below CTAs.
- **Light**: Beige (`#F5F0E8`) background. Same 2-column layout. Emerald heading. Bubbles have white glass-morphism style.
- **Bold**: Full-bleed background photo with dark overlay `linear-gradient(180deg, rgba(3,26,16,0.82) 0%, rgba(0,90,61,0.65) 100%)`. Single centered column, max-width 680px.

**Hero content:**
- Overline: "Licensed Moneylender · Licence No. 91/2025"
- H1: "Personal Loans *Backed by Property.*" (italic is styled `font-style: normal` — it's a visual emphasis, not actual italic)
- Body: "Need personal financing but don't fit the bank's mould? TBS Union provides property-backed personal loans: with same-day assessment and transparent terms."
- Primary CTA: "Call 6345 8801" (phone link)
- Secondary CTA: "Send an Enquiry" (links to Contact.html)
- Trust badges: 3 items with icons in 32×32 rounded squares

**Floating Bubbles (hero media column):**
- 5 glassmorphic bubble cards positioned absolutely around a rounded hero image
- Each has icon (34×34), bold value label, and sublabel
- Bubbles: "Same-Day / Assessment", "2,000+ / Deals Funded", "Property / Backed", "24-48hr / Disbursement", "Trusted / Licensed Lender"
- Animation: `bubbleFadeIn` on load + `bubbleFloat` (gentle vertical oscillation, 6.2–7.0s cycle, staggered delays)
- Background image: `assets/photography/hero-condo.jpg` in a 36px-radius rounded container with overlay

#### About Section
- White background
- 2-column grid (1.1fr / 0.9fr), 56px gap
- Left: overline "Who We Are" + H2 "A Licensed Moneylender You Can Trust" + 3 paragraphs + "Read Scam Advisory ↓" anchor link (scrolls to scam advisory section with 72px offset for sticky nav)
- Right: 2×2 grid of stat cards on beige background (2,000+ deals, $1B+ transactions, 50+ years, 24hr disbursement)
- Stat cards: beige bg, 16px radius, serif number (36px, emerald), sans label (13px, muted)

#### Product Section
- Beige (`#F5F0E8`) background
- Overline "Our Product" + H2 "Secured Personal Loan" + intro paragraph
- 3-column grid of 6 feature cards (3 card style variants: elevated/outlined/flat via `cardStyle` tweak)
- Feature card: 46×46 icon box (pale green bg), H4 title, paragraph description
- Below: "Who Can Apply" eligibility box — white bg, 16px radius, 2-column grid of 6 eligibility items with green check circles

#### Why Us Section
- White background
- 4 numbered cards in 2×2 grid
- Large serif numbers in pale green (44px), H4 title, paragraph
- Same 3 card style variants as product section

#### Use Cases Section
- Dark gradient background `linear-gradient(160deg, #031a10 0%, #005a3d 100%)`
- 3-column grid of 6 cards with translucent backgrounds (`rgba(255,255,255,0.05)`)
- Icons in `rgba(185,228,212,0.12)` boxes, pale green icon color
- Cards: Debt Consolidation, Home Renovations, Bridging Income Gap, Education, Time-Sensitive Needs, Unlocking Property Equity

#### Process Section
- Beige background
- Centered header + 3-column grid with dashed connecting line
- Each step: 80×80 circle with number, H4 title, paragraph
- Steps: "15-Minute Assessment" → "Loan Structuring" → "Approval & Disbursement"

#### Scam Advisory Section
- White background, 1px top border
- Max-width 900px inner container
- Header: red warning badge "Scam Advisory" + H3 "Protect Yourself from Fraudulent Websites" + description
- 2-column grid (`0.75fr / 1.25fr`), 36px gap
- Left: Fraudulent website callout — red label, URL box with X icon + `https://tbsunion-sg.com/`, screenshot image (max-width 350px on container) with greyscale filter + red "FAKE" stamp overlay
- Right: "Remember" label + 3 bullet points (official website, no unsolicited contact, never ask for pre-disbursement payment) + MinLaw verification link
- Anchor target `#scam-advisory` with `scroll-padding-top: 72px` on `html` to offset for the sticky nav

#### CTA Banner
- Solid emerald (`#005a3d`) background, centered text
- H2 "Ready to Explore Your Options?" + body text + phone CTA + enquiry link

---

### 2. FAQ Page

**Header:** Same dark gradient as hero. Overline + H1 "What You Should Know Before Borrowing" + description.

**Body:** Max-width 780px centered. 4 FAQ categories:
- About TBS Union (3 questions)
- Borrowing & Eligibility (7 questions)
- Process & Repayment (4 questions)
- Safety & Regulation (3 questions)

**Accordion behaviour:**
- Closed: white card, 1px `#e5e5e5` border, 12px radius, plus icon on right
- Open: plus icon rotates 45° to become X, answer slides down with `max-height` transition (350ms)
- Question text: 15px, weight 600, charcoal → emerald when active
- Answer: 14px, secondary color, 1.7 line-height
- Special: `.faq-highlight` boxes with beige bg + 3px emerald left border

**Ends with CTA Banner**: "Have More Questions?"

---

### 3. Contact Page

**Header:** Dark gradient. "Contact Us" / "Speak to Our Team"

**Body:** 2-column grid (1fr 1fr), 56px gap.

**Left column — Contact Details:**
- H2 "Get in Touch" + subtitle
- 4 detail cards (phone, office address, operating hours, licence) each with 44×44 pale green icon box
- Operating Hours: "Monday – Friday: By Appointment Only" with a pale green eyebrow-style "WhatsApp Us" pill tag (uppercase, 10px font, `#b9e4d4` bg) linking to `https://api.whatsapp.com/send/?phone=6588375425&text=Hello%21+I%27d+like+to+know+more+about+personal+loans`. Saturday, Sunday & Public Holidays: Closed.
- Google Maps embed (240px height) at bottom — pointed at Automobile Megamart, 61 Ubi Ave 2, Singapore 408898

**Right column — Enquiry Form:**
- Beige (`#F5F0E8`) container, 16px radius, 40px padding
- Fields: Full Name*, Phone*, Email, Loan Type* (select), Brief Description (textarea)
- Name + Phone in 2-column row
- Submit button: full-width emerald pill, "Send Enquiry" with send icon
- Form disclaimer below
- Success state: centered green check circle + "Enquiry Received" message
- Validation: red border on empty required fields

**"Before You Borrow" section:**
- White bg, bordered top
- Bulleted list of responsible borrowing considerations
- External links to MinLaw resources

---

### 4. Calculator Page

**Header:** Dark gradient. "Personal Loan Calculator"

**Body:** 2-column grid (1.15fr / 0.85fr), 48px gap.

**Left — Calculator Panel:**
- White card, 1px border, 40px padding
- 3 range sliders: Loan Amount (S$1K–S$200K, step S$1K), Loan Term (1–24 months), Interest Rate (3–6% p.a., step 0.1%)
- Each slider: label on left, current value (emerald serif, 22px) on right
- Custom slider styling: 6px track, emerald fill, 22px white thumb with emerald border
- Disclaimer text below

**Right — Results Panel:**
- Beige bg, sticky (`top: 96px`), 36px padding
- 3 result cards: Monthly Repayment (emerald bg, white text — primary), Total Interest, Total Payable
- Breakdown bar: horizontal stacked bar (emerald = principal, pale green = interest) with legend
- CTA button: "Get a free assessment"

**Calculator FAQ section** below (beige bg, 4 accordion items)

**Calculation method:** Simple interest: `totalInterest = amount × (rate/100) × (months/12)`, `monthlyRepayment = totalPayable / months`

---

### 5. Blog Page

**Header:** Dark gradient. "Loan Guides & Tips"

**Categories section:**
- 3 category cards with colored top bars (emerald, bottle green, #3d7a64)
- Each: H3 title, paragraph, article count badge

**Articles section:**
- Filter pills: All, Borrowing basics, Property-backed loans, Managing repayments
- Active filter: emerald bg, white text
- 3-column grid of article cards
- Card: image (180px height, zoom on hover), category label, H4 title, excerpt (3-line clamp), read time
- 9 articles total

**Blog CTA:** Beige box with "Have a question about borrowing?" + "Talk to our team" button

---

### 6. Article Page

**Header:** Dark gradient, extra bottom padding. Breadcrumb ("Guides & Tips / Category"), H1 article title (max-width 720px), category tag pill + read time.

**Body:** 2-column grid (220px sidebar + 1fr content).

**Sidebar — Table of Contents:**
- Sticky (top: 96px)
- List of section headings with 2px left border indicator
- Active section: emerald border + emerald bold text
- IntersectionObserver-driven scroll tracking

**Content column (max 720px):**
- Featured image (16:9 ratio, rounded)
- Key Takeaways box: beige bg, 3px emerald left border, check bullets
- Article sections: H2 headings with anchors, body paragraphs, lists
- FAQ accordion at end
- CTA box: dark gradient, "Need financing?" with phone + enquiry buttons

**Related articles:** Beige bg section with 3-column grid of blog cards.

---

## Interactions & Behaviour

### Navigation
- **Scroll behaviour:** Nav starts transparent over hero, transitions to solid `#063222` after 60px scroll (`transition: background 0.35s`). `html` has `scroll-padding-top: 72px` to offset anchor scrolls for the sticky nav height.
- **Logo swap:** White logo on dark/scrolled; brand-colored logo on light hero
- **Dropdown:** "Resources" dropdown on hover/focus-within. Opacity + translateY transition. 2-column inner grid (460px min-width) with icon items.
- **Mobile (≤960px):** Hamburger button → full-screen overlay. Resources accordion inside overlay.

### Buttons
- **Hover:** Filled buttons darken (emerald → `#004d33`). Ghost buttons get 6–8% fill. Accent yellow gets glow shadow.
- **Active/Press:** All buttons `transform: scale(0.97)` on `:active`
- **Transition:** All button transitions `0.22s cubic-bezier(0.2, 0, 0, 1)`

### Cards
- **Hover lift:** `transform: translateY(-2px)` or `translateY(-3px)` + shadow promotion
- **Blog card image:** `transform: scale(1.04)` on card hover (`0.35s`)

### FAQ Accordion
- **Toggle:** Click toggles `active` class. Plus icon rotates 45° to X.
- **Content:** `max-height` transition from `0` to `scrollHeight` (350ms ease)
- **One-at-a-time** on Calculator FAQ page; independent on main FAQ page

### Calculator
- **Live updates:** All values recalculate on slider input
- **Slider fill:** CSS custom property `--pct` drives `linear-gradient` background
- **Results panel:** Sticky on desktop, static on mobile

### Contact Form
- **Validation:** Required fields (name, phone, loan type) get red border on submit if empty. Error clears on focus.
- **Success:** Entire form replaced with success message + check icon

### Animations
- **Hero bubbles:** `bubbleFadeIn` (0.4s ease-out) + `bubbleFloat` (6.2–7.0s infinite, staggered)
- **Hero background image:** `bgFadeIn` (0.4s ease-out scale 0.95→1)
- **Font loading:** Page hidden until fonts ready (or 300ms timeout)

### Responsive Breakpoints
- **≤960px:** Nav collapses to hamburger. Hero becomes single column. Grids reduce columns. Process steps stack vertically (connecting line hidden). Article TOC hidden.
- **≤600px:** Hero CTAs stack vertically. All grids become single column. Footer stacks. Smaller padding throughout.

---

## State Management

### Homepage Tweaks (design-time only)
Three tweakable values stored in `TWEAK_DEFAULTS`:
- `heroVariant`: `"dark"` | `"light"` | `"bold"` — controls hero layout
- `ctaStyle`: `"emerald-on-white"` | `"white-on-emerald"` | `"accent"` — controls CTA button style
- `cardStyle`: `"elevated"` | `"outlined"` | `"flat"` — controls feature/why card treatment

**For production:** Choose one variant for each and hard-code it. These tweaks are design exploration tools, not end-user features.

### FAQ Page
- Each `FaqItem` has independent `open` state (React `useState`)

### Contact Form
- `submitted` (boolean) — controls form vs success view
- `errors` (object) — field-level validation errors
- No actual form submission — wire to your API

### Calculator
- `amount` (number, default 30000)
- `termMonths` (number, default 12)
- `ratePerAnnum` (number, default 4)
- All derived values (monthlyRepayment, totalInterest, totalPayable) are computed inline

### Blog
- `filter` (string) — active category filter, default `"All"`

### Article
- `slug` from URL query parameter `?slug=...`
- `openIdx` — FAQ accordion state
- `activeId` — TOC scroll tracking via IntersectionObserver

---

## Design Tokens

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Emerald (Primary) | `#005a3d` | Brand headings, buttons, CTAs, links, icons |
| Emerald Hover | `#004d33` | Button hover state |
| Bottle Green | `#063222` | Nav solid bg, footer, dark sections |
| Pale Green | `#b9e4d4` | Icon backgrounds, accent, bubble icons |
| Beige | `#F5F0E8` | Section backgrounds, form wrapper, stat cards |
| Beige Dark | `#ede7da` | Hover state on flat cards |
| Yellow (Accent) | `#E3EF26` | Nav CTA, accent button variant |
| Yellow Hover | `#f0fb50` | Accent button hover |
| Charcoal | `#2E2E2E` | Primary body text |
| White | `#FFFFFF` | Default canvas, text on dark |
| Text Secondary | `#5b5b5b` | Body text, descriptions |
| Text Muted | `#888888` | Labels, metadata, captions |
| Border Light | `#e5e5e5` | Card/input borders |

### Typography
| Element | Font | Size | Weight | Line-Height | Letter-Spacing |
|---------|------|------|--------|-------------|----------------|
| H1 | Vollkorn (serif) | `clamp(36px, 5vw, 52px)` | 600 | 1.2 | 0 |
| H2 | Vollkorn | `clamp(28px, 3.5vw, 38px)` | 600 | 1.2 | 0 |
| H3 | Vollkorn | `clamp(20px, 2.5vw, 24px)` | 600 | 1.2 | 0 |
| H4 | Inter (sans) | 18px | 600 | 1.2 | 0 |
| Body | Inter | 16px | 400 | 1.6 | 0 |
| Hero desc | Inter | 17px | 400 | 1.75 | 0 |
| Overline | Inter | 12px | 600 | — | 0.1em, uppercase |
| Small/caption | Inter | 13–14px | 400–500 | 1.45–1.65 | 0 |
| Button | Inter | 14px (default), 15px (lg) | 600 | 1.2 | 0 |
| Nav link | Inter | 14px | 500 | — | 0 |

### Spacing
| Name | Value | Usage |
|------|-------|-------|
| Section padding (desktop) | 100px top/bottom | Main sections |
| Section padding (tablet) | 72px | ≤960px |
| Section padding (mobile) | 56px | ≤600px |
| Container max-width | 1140px | Content wrapper |
| Container padding | 0 24px | Horizontal gutters |
| Card padding | 32px 28px (feature), 36px 32px (why) | Internal card spacing |
| Grid gap (sections) | 48–56px | Between columns |
| Grid gap (cards) | 16–20px | Between card items |
| Element spacing | 8–16px typical | Between text elements |

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Inputs, small cards, dropdown items |
| `--radius-md` | 12px | FAQ items, result cards |
| `--radius-lg` | 16px | Feature cards, stat cards, form wrapper |
| `--radius-xl` | 24px | Hero image frame |
| `--radius-pill` | 50px | All buttons, filter pills, nav CTA |

### Shadows
| Level | Value | Usage |
|-------|-------|-------|
| Card | `0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)` | Default card elevation |
| Card hover | `0 2px 8px rgba(0,0,0,0.07), 0 8px 28px rgba(0,0,0,0.06)` | Hovered cards |
| Nav solid | `0 1px 8px rgba(0,0,0,0.15)` | Scrolled nav bar |
| Dropdown | `0 8px 40px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.06)` | Nav dropdown |
| Hero image | `0 8px 40px rgba(0,0,0,0.2)` | Hero photo container |

### Animation / Easing
| Property | Value |
|----------|-------|
| Standard easing | `cubic-bezier(0.2, 0, 0, 1)` |
| Default transition | `0.22s` |
| Nav bg transition | `0.35s` |
| FAQ max-height | `0.35s ease` |
| Blog image zoom | `0.35s` |
| Bubble float | `6.2–7.0s ease-in-out infinite` |

---

## Iconography

No icon library is used. All icons are **inline SVGs** drawn at 24×24 viewBox with **2px stroke** (some at 1.6px in dropdown), `strokeLinecap="round"`, `strokeLinejoin="round"`. All are defined as React components in `chrome.jsx` and `sections.jsx`.

Icon set used:
- Phone, Shield, Home, Clock, Users, Dollar, Activity, Check, Send, ChevronDown, Plus, Layers, Tool, Briefcase, Book, Zap, Key, MapPin, ExternalLink, ChevronRight, Calculator (nav), Book (nav)

If migrating, **Lucide** is the closest external match (same stroke style).

---

## Assets

### Fonts (self-hosted, variable)
| File | Font |
|------|------|
| `design-system/fonts/Vollkorn-VariableFont_wght.ttf` | Vollkorn (weight 400–900) |
| `design-system/fonts/Vollkorn-Italic-VariableFont_wght.ttf` | Vollkorn Italic |
| `design-system/fonts/Inter-VariableFont_opsz_wght.ttf` | Inter (weight 100–900) |

### Logos
| File | Usage |
|------|-------|
| `assets/logos/TBSU-Logo.svg` | Brand color logo (nav on light bg) |
| `assets/logos/TBSU-Logo-White.svg` | White logo (nav on dark bg, footer) |

### Photography
| File | Usage |
|------|-------|
| `assets/photography/hero-condo.jpg` | Hero bubbles background |
| `assets/photography/aerial-singapore-landscape.jpg` | Bold hero variant background |
| `assets/blog/*.jpg` | 9 article thumbnail images |

---

## Files

All source files for the prototype are included in this handoff folder:

```
design_handoff_tbs_union_website/
├── README.md                              ← This file
├── TBS Union Homepage.html                ← Homepage entry point
├── FAQ.html                               ← FAQ page
├── Contact.html                           ← Contact page
├── Calculator.html                        ← Calculator page
├── Blog.html                              ← Blog listing page
├── Article.html                           ← Article detail page
├── assets/
│   ├── logos/                             ← TBSU brand logos (SVG)
│   ├── photography/                       ← Hero + background images
│   ├── blog/                              ← Article thumbnail images
│   └── scam/                              ← Scam advisory screenshot
├── components/
│   ├── chrome.jsx                         ← Nav, Footer, ComplianceStrip, icons
│   ├── hero.jsx                           ← Hero section + floating bubbles
│   ├── sections.jsx                       ← Homepage body sections
│   ├── app.jsx                            ← Homepage root component
│   ├── faq-page.jsx                       ← FAQ page component
│   ├── contact-page.jsx                   ← Contact page component
│   ├── calculator-page.jsx                ← Calculator page component
│   ├── blog-page.jsx                      ← Blog listing component
│   ├── article-page.jsx                   ← Article detail component
│   └── article-data.jsx                   ← Article content data (9 articles)
├── styles/
│   ├── homepage.css                       ← Tokens + homepage styles (872 lines)
│   └── pages.css                          ← Inner page styles (878 lines)
├── design-system/
│   └── fonts/                             ← Vollkorn + Inter variable fonts
└── tweaks-panel.jsx                       ← Design-time tweaks panel (not for production)
```
