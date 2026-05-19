# TBS Union Website

Property-backed personal loans website for TBS Union Pte Ltd, a licensed moneylender in Singapore regulated by the Ministry of Law.

## Pages

- **index.html** — Homepage (hero, about, product, why us, use cases, process, CTA)
- **Calculator.html** — Personal loan calculator with interactive sliders
- **Blog.html** — Loan Guides & Tips education hub
- **Article.html** — Individual article template (loads content via `?slug=` parameter)
- **FAQ.html** — Frequently asked questions
- **Contact.html** — Contact form and details

## Running Locally

Open `index.html` in a browser, or serve with any static file server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

> **Note:** Due to CORS restrictions on local `file://` protocol, some browsers may block the JSX/Babel scripts. Use a local server for best results.

## Tech Stack

- **React 18** (via CDN + Babel standalone for JSX transpilation)
- **Vanilla CSS** with custom properties (design tokens)
- **Vollkorn** (serif) + **Inter** (sans-serif) variable fonts

## Structure

```
├── index.html                  # Homepage
├── FAQ.html                    # FAQ page
├── Contact.html                # Contact page
├── Calculator.html             # Loan calculator
├── Blog.html                   # Blog listing
├── Article.html                # Article template
├── tweaks-panel.jsx            # Tweaks UI component
├── components/
│   ├── chrome.jsx              # Nav, Footer, shared icons
│   ├── hero.jsx                # Hero section with floating bubbles
│   ├── sections.jsx            # Body sections
│   ├── app.jsx                 # Main app wrapper
│   ├── faq-page.jsx            # FAQ page component
│   ├── contact-page.jsx        # Contact page component
│   ├── calculator-page.jsx     # Calculator page component
│   ├── blog-page.jsx           # Blog listing component
│   ├── article-data.jsx        # Article content data
│   └── article-page.jsx        # Article page component
├── styles/
│   ├── homepage.css            # Main stylesheet + tokens
│   └── pages.css               # Inner page styles
├── assets/
│   ├── logos/                  # SVG logos
│   ├── photography/            # Hero and background images
│   └── blog/                   # Blog article featured images
└── design-system/
    └── fonts/                  # Variable font files
```

## Licence

TBS Union Pte Ltd — Licence No. 91/2025
