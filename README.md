# ICARE — Indian Centre for Academic Rankings & Excellence
### Production Website (Vite + React + Tailwind CSS + Framer Motion)

A credible, academic, institutional web platform for **ICARE** (Indian Centre for Academic Rankings & Excellence) — an independent institutional intelligence agency advancing the quality, research capacity, and global competitiveness of Indian higher education.

---

## 🏛️ Brand & Design System

- **Tone:** Academic, credible, policy-research think-tank aesthetic.
- **Palette:** Deep Navy (`#060d1a`, `#0a172a`, `#112644`) as primary, warm saffron/amber (`#d97706`, `#f59e0b`) as the national accent, stone/off-white backgrounds, and slate text.
- **Typography:** 
  - Headings: Serif (**Playfair Display**) loaded via Google Fonts.
  - Body: Sans-serif (**Inter**) for crisp readability.
- **Theme:** Full Light/Dark mode toggle with state persistence in `localStorage`.
- **Responsive & Accessible:** 12-column grid, rounded-xl cards with soft shadows, focus states, and WCAG AA contrast.

---

## 🛠️ Tech Stack

- **React 18 / 19** + **Vite**
- **React Router v7** for multi-page client routing
- **Tailwind CSS v4** (`@tailwindcss/vite` with `@theme` and custom variant dark mode)
- **Framer Motion** for smooth scroll reveals & interactive feedback
- **Lucide React** for institutional icons
- **React Helmet Async** for per-page title, meta description, and Open Graph tags
- **Oxlint** for ultra-fast static code quality checks

---

## 🗺️ Site Architecture & Pages

1. **Home (`/`)**:
   - Hero banner with headline *"Measuring, benchmarking and improving the quality of higher education in India"*, subline, and dual CTAs (*Our Work*, *Contact Us*).
   - *"ICARE at a glance"* animated counters (about 20 years, 6+ states, 7 universities in Maharashtra).
   - *"What we are known for"* 6-card institutional grid.
   - *"Our Approach"* teaser (*"We do not chase rankings..."*) with tripartite pillars.
   - Partners logo & entity strip (clean text-based placeholders).
   - Bottom institutional engagement CTA banner.
2. **About (`/about`)**:
   - Institutional evolution narrative: from pioneering KSURF in Karnataka (2012) to high-level consultations with the President and PM in 2014, to technical advisory for NIRF (2014–2015).
   - The critical pitfall of reputation-only perception surveys vs. verifiable bibliometric intelligence.
   - Official Vision, Mission, and tripartite BOTT (Build–Operate–Transfer–Transform) approach.
3. **What We Do (`/what-we-do`)**:
   - 7 practice area cards with icons, numbers, descriptions, and concrete deliverables:
     1. Ranking Frameworks Conception & Management (e.g. KSURF, GSIRF)
     2. Accreditation & Data Validation (NAAC, NBA, DVV audits)
     3. Civil-Service & Leadership Capacity Building
     4. Institutional Analytics & Diagnostics
     5. National & Global Rankings Support (NIRF, QS, THE)
     6. Higher Education Policy & Strategy Advisory
     7. Ranking Publications & Whitepapers
4. **Track Record (`/track-record`)**:
   - Interactive tabs for:
     - **National Mandates**: NIRF technical advisory, Top 100 Universities project, apex regulatory engagements.
     - **State Programmes**: Gujarat (GSIRF), Maharashtra (MahaSamarth), Karnataka (KSURF), and Southern States.
     - **Partners & Network**: IITs, NITs, 7 Maharashtra State Universities, private universities, global scientometric bodies.
5. **Tools & Initiatives (`/tools-and-initiatives`)**:
   - **Interactive AI Institutional Ranking Simulator**: Small interactive demonstration featuring a slider *"Extra indexed research papers: 0-100"*, citation factor slider, and patent slider, projecting an illustrative *"Sample Estimate"* rank and score shift with prominent educational disclaimers.
   - **Benchmarking Dashboards**: 40+ metric institutional comparative analytics.
   - **TRUTH Index**: Research integrity framework penalizing predatory publications and paper mills.
   - **Stanford Top-2% Global Scientists Analysis**: Tracking India's world-class researchers by university.
   - **Global Rankings Outreach Group (GROG)**: International profiling & Scopus deduplication.
6. **Leadership & Team (`/leadership-and-team`)**:
   - **Leadership Council**: Profile cards with initials avatars and *"View Profile"* triggers that expand into accessible detail modals (with clearly marked `"TODO: add bio"` placeholders where biographies are pending).
   - **Embedded Data Analysts**: Grouped by the **7 Maharashtra Universities** under MahaSamarth (*BAMU Chhatrapati Sambhajinagar, COEP Pune, KBCNMU Jalgaon, MU Mumbai, RTMNU Nagpur, SGBAU Amravati, SPPU Pune*).
   - **Technology Team**: Fullstack, data engineering, and analytics developers.
7. **Contact (`/contact`)**:
   - Institutional consultation inquiry form (*Name, Email, Organisation, Message*).
   - Client-side validation with instant inline error states.
   - Dedicated confirmation/success view upon submission.
   - Secretariat address, email, telephone, regional offices, and coordinate map placeholder.
8. **404 Page (`*`)**:
   - Institutional *"Document Not Found"* view with recovery navigation.

---

## 📁 Code Organization

```
src/
├── assets/                  # Logos and static media (icare-logo.png)
├── components/              # Modular, reusable design components
│   ├── Button.jsx           # Multi-variant button & link wrapper
│   ├── Card.jsx             # Rounded-xl card with soft shadow & hover states
│   ├── Counter.jsx          # Scroll-triggered animated counter
│   ├── Footer.jsx           # Global institutional footer with quick links
│   ├── Modal.jsx            # Accessible bio dialog with focus trap & Esc handler
│   ├── Navbar.jsx           # Sticky nav, mobile drawer, active indicator, dark toggle
│   ├── ScrollToTop.jsx      # Route-change scroll restoration
│   ├── Section.jsx          # Semantic section container with background variants
│   ├── SectionHeading.jsx   # Kicker badge, serif heading, and descriptive subtitle
│   ├── SEO.jsx              # Helmet wrapper for Open Graph & per-page titles
│   ├── SimulatorDemo.jsx    # Interactive AI ranking simulator demonstration
│   └── TeamCard.jsx         # Leadership, analyst & tech profile cards
├── context/
│   ├── ThemeContext.jsx           # ThemeProvider implementation
│   └── ThemeContextDefinition.js  # React Context definition
├── data/
│   └── content.js           # ⭐ MASTER COPY FILE: All textual copy & data objects
├── hooks/
│   └── useTheme.js          # useTheme hook for light/dark mode
├── pages/                   # Top-level page views (Home, About, WhatWeDo, etc.)
├── App.jsx                  # Top-level routing and providers
├── index.css                # Tailwind CSS v4 directives and typography
└── main.jsx                 # Application entry point
```

---

## ✍️ How to Edit Content Without Touching Components

All copy, stats, services, team rosters, and metadata are centralized in:
👉 `src/data/content.js`

To update any text on the website:
1. Open `src/data/content.js`.
2. Locate the relevant exported object:
   - `siteMetadata`: Site title, hero subline, contact email, phone, and address.
   - `heroStats`: Figures for the animated counters.
   - `whatWeAreKnownFor`: Cards for the homepage core mandate section.
   - `ourApproach`: Philosophy quote, subtext, and the 3 pillars.
   - `aboutContent`: The KSURF to NIRF historical narrative and reputation-survey point.
   - `services`: The 7 practice areas and their deliverables.
   - `trackRecordData`: National mandates, state programmes, and partner listings.
   - `toolsAndInitiatives`: Descriptions and capabilities for all 5 intelligence tools.
   - `leadershipMembers`: Leadership bios, credentials, and photos. Placeholders are flagged with `"TODO: add bio"`.
   - `embeddedAnalysts`: Analysts grouped under each of the 7 universities.
   - `technologyTeam`: Digital platform engineers.
3. Save the file. Vite's Hot Module Replacement (HMR) will update the page instantly.

---

## 🚀 Setup & Execution Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Run Static Code Linting
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be output to the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```
