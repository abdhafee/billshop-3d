# BillShop.lk — Premium Interactive 3D Smart Supermarket Website

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r170-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

An autonomous, next-generation 3D smart supermarket web platform engineered for modern Sri Lankan retail chains and independent supermarkets. Features shelf QR self-scan shopping, digital carts, cryptographic shopping tokens, and high-speed cashier verification lanes.

---

## 🌟 Key Features

1. **Cinematic 3D Hero Environment**
   - High-fidelity Three.js / React Three Fiber interactive 3D digital twin.
   - Interactive grocery shelves, customer scanning with smartphone, floating digital basket, central BillShop.lk Smart System hub, and cashier lane.
   - Mode switcher between real-time 3D canvas and cinematic walkthrough video.

2. **Scroll-Linked 7-Stage Shopping Journey**
   - 400vh sticky scroll animation mapped dynamically to scroll progress:
     1. Customer scans product QR code.
     2. Product appears in digital cart.
     3. Cart accumulates groceries.
     4. Cryptographic shopping token generated (`BSLK-1048-LKQR`).
     5. Cashier scans token at checkout lane.
     6. Cashier verifies physical product barcodes.
     7. Final receipt and grocery bags ready.

3. **Infinite Logo Marquee**
   - Dual continuous horizontal marquees showcasing smart retail technology capabilities (QR Shopping, LankaQR, Inventory Telemetry, Loss Prevention, Offline POS Failover).

4. **Asymmetric Bento Grid**
   - *"Everything Connected. Shopping Simplified."* editorial layout featuring Smart QR Scanning, Digital Cart, Unique Shopping Token, and Verified Checkout.

5. **3D Smart Shopping Studio Experience**
   - Clean luxury studio showcase (`#F3F6FB`) with 360° interactive OrbitControls featuring grocery baskets, smartphones, scanners, and thermal receipts.

6. **Customer QR Self-Scan Demo**
   - Authentic Sri Lankan supermarket staples (Keeri Samba Rice, Highland Pure Milk, Toast Bread, Eggs, Munchee Crackers, Mineral Water, Apples, Dilmah Ceylon Tea).
   - Live LKR subtotal calculation, promotional discounts, and SSCL tax.
   - Slide-out digital cart drawer and cryptographic SVG QR token generator.

7. **Cashier POS Terminal Verification Demo**
   - Token ingestion from customer cart demo.
   - Barcode verification scanner with synthesized Web Audio 2200Hz retail beep.
   - 100% item verification lock before checkout.
   - Payment simulation (LankaQR, Contactless Card Tap, Cash) with celebratory confetti.
   - Authentic Sri Lankan thermal paper receipt modal with print action.

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 2. Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd <repo-folder>

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [https://genuine-syrniki-82d745.netlify.app/](https://genuine-syrniki-82d745.netlify.app/) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 📦 Project Structure

```
├── public/
│   ├── images/              # Concept infographic reference & product posters
│   └── videos/              # Uploaded MP4 walkthrough and scan videos
├── src/
│   ├── components/
│   │   ├── 3d/              # Three.js / React Three Fiber scenes & procedural models
│   │   │   ├── SupermarketHeroScene.tsx
│   │   │   ├── SupermarketModels.tsx
│   │   │   ├── SmartShoppingStudio3D.tsx
│   │   │   └── Fallback3DHero.tsx
│   │   ├── common/          # Procedural SVG QR code and EAN Barcode renderers
│   │   ├── HeroSection.tsx
│   │   ├── CinematicScrollSection.tsx
│   │   ├── InfiniteLogoMarquee.tsx
│   │   ├── AsymmetricBentoGrid.tsx
│   │   ├── InteractiveShoppingDemo.tsx
│   │   ├── CashierVerificationDemo.tsx
│   │   ├── ConceptArchitectureSection.tsx
│   │   ├── ShoppingJourneySection.tsx
│   │   ├── SystemFeaturesSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── EnterpriseBackendRoadmap.tsx
│   │   ├── ContactPilotModal.tsx
│   │   └── Footer.tsx
│   ├── context/             # Shared shopping cart & POS verification state
│   ├── data/                # Sample Sri Lankan supermarket products
│   ├── services/            # Web Audio API retail scanner sound synthesizer
│   └── types/               # Clean backend-ready data models & interfaces
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🛡️ License
Proprietary demonstration platform for BillShop.lk Smart Supermarket Technologies.
