# 📐 AI Online Protractor (aionlineprotractor.com)

A high-precision, 100% client-side **Online Protractor and Angle Finder** web application built with **Astro 5**, **Tailwind CSS v4**, and modern SVG vector mathematics.

[![Website](https://img.shields.io/badge/Website-aionlineprotractor.com-blue?style=flat-square)](https://aionlineprotractor.com)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?style=flat-square&logo=astro)](https://astro.build)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-CSS%20v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## ✨ Features

- **Interactive 180° & 360° Protractor**:
  - Drag vertex origin, Ray 1 baseline, and Ray 2 arm with sub-pixel precision.
  - Dual inner and outer degree markings with high-contrast light/dark mode support.
  - 1° Angle snapping, quick preset buttons (30°, 45°, 60°, 90°, 180°, etc.), and custom scaling (60%–140%).
- **Trigonometric Geometry Inspector**:
  - Hero degree readout with instant conversions: Radians ($rad$), Gradians ($grad$), Supplementary, Complementary, Reflex, and Slope Percentage ($\tan(\theta) \times 100\%$).
- **Live Camera Angle Capture**:
  - Live video camera preview with target reticle and environment/selfie camera flip.
  - Instant high-res photo capture for measuring physical angles in the real world.
- **Image & Multi-Page PDF Blueprint Upload**:
  - Upload PNG, JPG, WebP, SVG, and multi-page PDF documents.
  - Embedded PDF.js renderer with pagination bar for math worksheets and architectural blueprints.
  - Variable protractor opacity (20%–100%) to measure directly on top of diagrams.
- **Client-Side AI Computer Vision Auto-Detect**:
  - In-browser radial ray-casting algorithm to detect dominant line vertices and angles.
  - Animated laser scan overlay with full user fine-tuning capability.
- **Dedicated Sub-Tools**:
  - `/360-protractor`: Dedicated full-circle protractor for reflex angles and navigation bearings.
  - `/measure-angle-image`: Dedicated photo & blueprint angle measurement interface.
  - `/three-point-angle`: 3-point angle calculator with automatic vector trigonometry.
  - `/inclinometer`: Mobile tilt meter using hardware accelerometer/gyroscope with 0° haptic vibration.
- **Universal Mobile Touch Optimization**:
  - Oversized touch hitboxes (`r="38"` circle + 36px ray strokes) with zero scroll interference (`touch-action: none`).
- **Comprehensive On-Page SEO & Compliance**:
  - Schema.org JSON-LD (`WebApplication`, `HowTo`, `FAQPage`).
  - Google AdSense, GDPR, CCPA, and COPPA compliant policy pages (`/privacy-policy`, `/terms`, `/about`, `/contact`).
  - Custom `404 Not Found` and `500 Server Error` pages.
  - Optimized `robots.txt` and dual `sitemap.xml` / `sitemap-index.xml`.

---

## 📁 Project Structure

```text
/
├── public/
│   ├── favicon.svg          # Dynamic SVG protractor icon
│   ├── og-image.svg         # Open Graph social preview banner
│   ├── robots.txt           # Search crawler directives
│   └── sitemap.xml          # Canonical sitemap index
├── src/
│   ├── components/
│   │   ├── AngleKnowledge.astro    # Interactive 11-question FAQ accordion
│   │   ├── Footer.astro            # Site footer with legal links
│   │   ├── Header.astro            # Dark mode toggle & navigation
│   │   ├── HomeSeoArticle.astro    # 985-word in-depth guide
│   │   └── ProtractorApp.astro     # Core SVG engine, Camera & AI scanner
│   ├── data/
│   │   └── faqs.ts                 # Centralized SEO FAQ repository
│   ├── layouts/
│   │   └── Layout.astro            # Global layout with meta & OG tags
│   ├── pages/
│   │   ├── 360-protractor.astro
│   │   ├── 404.astro
│   │   ├── 500.astro
│   │   ├── about.astro / about-us.astro
│   │   ├── contact.astro / contact-us.astro
│   │   ├── inclinometer.astro
│   │   ├── index.astro
│   │   ├── measure-angle-image.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms.astro / terms-and-conditions.astro
│   │   └── three-point-angle.astro
│   └── styles/
│       └── global.css              # Tailwind v4 class-based dark mode
├── astro.config.mjs                # Astro configuration & @astrojs/sitemap
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.14.1 or higher
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Anuskath/aionlineprotractor.com.git
cd aionlineprotractor.com

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Production Build

```bash
# Build static site to ./dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 100% Privacy Guarantee

All image processing, camera frames, PDF page rendering, and AI computer vision line detection occur **100% locally inside the user's web browser**. No photos, blueprints, or documents are ever uploaded to an external server.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

