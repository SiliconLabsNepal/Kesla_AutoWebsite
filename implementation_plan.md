# EV Importer & Distributor Website — Implementation Plan

## Overview

Build a premium EV importer & distributor website inspired by the **VoltGrid Dribbble design** (dark, modern, high-tech aesthetic) with all the functionality from **cimex.com.np** (BYD Nepal). The site will be for a fictional brand **"VoltDrive Nepal"** — an official EV importer & distributor.

**Tech Stack:** Next.js 14 (App Router) + Vanilla CSS + Mock Database (JSON data files)

---

## Design System (Inspired by VoltGrid Dribbble)

| Token | Value |
|-------|-------|
| **Primary BG** | `#0A0A0A` (near-black) |
| **Secondary BG** | `#141414` (dark card surfaces) |
| **Accent** | `#BAFF39` (electric lime/green — from VoltGrid) |
| **Accent Hover** | `#A8E633` |
| **Text Primary** | `#FFFFFF` |
| **Text Secondary** | `#9CA3AF` (muted gray) |
| **Border** | `#1F1F1F` |
| **Card BG** | `#1A1A1A` with subtle border |
| **Font** | `Inter` (Google Fonts) |
| **Border Radius** | `24px` (cards), `9999px` (pill buttons) |
| **Animations** | Smooth transitions, scale on hover, fade-in on scroll |

---

## Pages & Features (Mapped from cimex.com.np)

### 1. Homepage (`/`)
- **Hero Section**: Full-width dark hero with large bold typography, CTA pill buttons ("Explore Models" / "Book Test Drive"), background EV image with overlay
- **Featured Models Carousel**: Horizontal scroll of featured EV cards with image, name, price, key specs (range, power, battery)
- **Why Choose Us**: Icon-grid section with benefits (Warranty, Nationwide Service, Blade Battery Tech, etc.)
- **Statistics Counter**: Animated counters (Models Available, Charging Stations, Dealers, Happy Customers)
- **Technology Highlight**: Split section showcasing key tech (Blade Battery, ePlatform 3.0)
- **Newsletter CTA**: Email subscription section with lime accent
- **Testimonials**: Customer review cards

### 2. Models Catalog (`/models`)
- Grid of EV model cards with image, name, price, key specs (range, power, battery)
- Filter/category tabs (Sedan, SUV, Hatchback)
- "View Details" CTA per card

### 3. Model Detail Page (`/models/[slug]`)
- Hero banner with model name and full-width image
- Key specs grid (Range, Power, Battery, 0-100, Top Speed, Seats)
- Color options with thumbnail swatches
- Variant pricing table
- Feature highlights with icons
- Image gallery
- "Book Test Drive" and "Find Dealer" CTAs

### 4. Price List (`/price-list`)
- Clean tabular display of all models and variants
- Columns: Model, Variant, Price (NPR), Range, Battery, Power
- Filter by model category
- Red accent top-border on cards (adapted from Cimex)

### 5. Charging Network (`/charging-network`)
- Interactive map (Leaflet/OpenStreetMap) showing charging station locations
- Left sidebar with station list (name, distance, charger type, power, phone)
- Search by name/location
- "Transfer to Nearest Station" CTA
- Station detail cards with dc-fast/ac type, kW rating, gun count

### 6. Find a Dealer (`/find-dealer`)
- Search bar + Province/Region filter dropdown
- Dealer cards with: logo, name, location, phone, email, Google Maps link
- Dealer type badges (Showroom / Service / 3S)
- "View Details" expansion

### 7. Technology Pages
- **Blade Battery** (`/technology/blade-battery`): Full-page explainer with specs, safety features, comparison infographic
- **ePlatform 3.0** (`/technology/eplatform`): Platform architecture, benefits, performance metrics
- **Hi-Tech Features** (`/technology/hi-tech`): ADAS, smart connectivity, infotainment

### 8. Test Drive Booking (`/test-drive`)
- Multi-step form: Personal Info → Select Model → Select Dealer → Preferred Date
- Form validation
- Success confirmation with animation

### 9. Exchange/Trade-In (`/exchange`)
- Form for trade-in inquiry: current vehicle details, preferred new model
- Value estimation display (mock)

### 10. Blog/News (`/blog`)
- Blog listing with thumbnail cards, title, excerpt, date
- Blog detail page (`/blog/[slug]`) with full article

### 11. About Us (`/about`)
- Company story, mission, vision
- Team section with circular avatars
- Timeline/milestones
- Partners & certifications

### 12. Contact Us (`/contact`)
- Contact form (Name, Email, Phone, Subject, Message)
- Company address, phone, email
- Embedded map
- Social media links

---

## Project Structure

```
f:\EVsite\
├── app/
│   ├── layout.js              # Root layout with nav + footer
│   ├── page.js                # Homepage
│   ├── globals.css            # Design system + global styles
│   ├── models/
│   │   ├── page.js            # Models catalog
│   │   └── [slug]/page.js     # Model detail
│   ├── price-list/page.js
│   ├── charging-network/page.js
│   ├── find-dealer/page.js
│   ├── technology/
│   │   ├── blade-battery/page.js
│   │   ├── eplatform/page.js
│   │   └── hi-tech/page.js
│   ├── test-drive/page.js
│   ├── exchange/page.js
│   ├── blog/
│   │   ├── page.js
│   │   └── [slug]/page.js
│   ├── about/page.js
│   └── contact/page.js
├── components/
│   ├── Navbar.js + Navbar.module.css
│   ├── Footer.js + Footer.module.css
│   ├── Hero.js + Hero.module.css
│   ├── ModelCard.js + ModelCard.module.css
│   ├── StatsCounter.js
│   ├── TestimonialCard.js
│   ├── ChargingMap.js
│   ├── DealerCard.js
│   ├── BlogCard.js
│   └── TestDriveForm.js
├── data/
│   ├── models.js              # Mock EV model data
│   ├── dealers.js             # Mock dealer data
│   ├── chargingStations.js    # Mock charging station data
│   ├── blogs.js               # Mock blog data
│   └── testimonials.js        # Mock testimonial data
├── public/
│   └── images/                # Generated images
├── package.json
└── next.config.js
```

---

## Proposed Changes

### Core Setup
#### [NEW] Next.js Project Initialization
- Initialize Next.js 14 with App Router in `f:\EVsite`
- Configure `next.config.js` for images

---

### Design System
#### [NEW] [globals.css](file:///f:/EVsite/app/globals.css)
- CSS custom properties for all design tokens
- Dark theme base styles
- Typography scale
- Button styles (pill primary, ghost, outline)
- Card component styles
- Grid utilities
- Animation keyframes (fadeIn, slideUp, countUp)
- Responsive breakpoints

---

### Layout Components
#### [NEW] [Navbar.js](file:///f:/EVsite/components/Navbar.js)
- Fixed dark navbar with logo, nav links, hamburger mobile menu
- Models dropdown mega-menu showing all models
- Technology dropdown
- Active link highlight with lime accent
- Scroll-triggered background opacity

#### [NEW] [Footer.js](file:///f:/EVsite/components/Footer.js)
- Dark footer with company info, quick links, models, social media
- Newsletter email input
- Copyright bar

---

### Mock Data Layer
#### [NEW] [data/models.js](file:///f:/EVsite/data/models.js)
6 EV models with: name, slug, price, range, power, battery, 0-100, top speed, seats, category, colors, variants, features, images

#### [NEW] [data/dealers.js](file:///f:/EVsite/data/dealers.js)
10+ dealers with: name, location, province, type, phone, email, coordinates

#### [NEW] [data/chargingStations.js](file:///f:/EVsite/data/chargingStations.js)
15+ stations with: name, location, type, power (kW), guns, phone, coordinates

#### [NEW] [data/blogs.js](file:///f:/EVsite/data/blogs.js)
6 blog posts with: title, slug, excerpt, content, date, author, image

#### [NEW] [data/testimonials.js](file:///f:/EVsite/data/testimonials.js)
6 customer testimonials with name, vehicle, rating, review text

---

### Pages (12 pages total)

All pages follow the VoltGrid dark aesthetic with lime accents, large rounded cards, pill buttons, and smooth animations.

#### [NEW] Homepage — Rich landing page with 7 sections
#### [NEW] Models Catalog — Filterable grid
#### [NEW] Model Detail — Full spec page with gallery
#### [NEW] Price List — Tabular model/variant pricing
#### [NEW] Charging Network — Leaflet map + sidebar list
#### [NEW] Find a Dealer — Search + filter + dealer cards
#### [NEW] Technology pages (3) — Blade Battery, ePlatform, Hi-Tech
#### [NEW] Test Drive — Multi-step booking form
#### [NEW] Exchange — Trade-in inquiry form
#### [NEW] Blog + Blog Detail — Card listing + article page
#### [NEW] About Us — Company info + team + timeline
#### [NEW] Contact Us — Form + map + contact info

---

## Open Questions

> [!IMPORTANT]
> 1. **Brand Name**: I'll use **"VoltDrive Nepal"** as the fictional brand. Should I use a different name?
> 2. **Vehicle Data**: I'll create fictional EV models inspired by real BYD models (similar specs but different names). Is this acceptable?
> 3. **Map Provider**: Leaflet with OpenStreetMap (free, no API key needed) for the charging network and dealer locator. OK?

---

## Verification Plan

### Automated Tests
- `npm run build` — Ensure clean production build with no errors
- `npm run dev` — Verify dev server starts and all pages render

### Manual Verification
- Browser testing: Navigate all 12+ pages, verify responsive design
- Test all interactive elements: forms, dropdowns, map, filters
- Verify animations and hover effects
- Check mobile responsive behavior
