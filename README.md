# 🎉 evenimente.com

**Toate serviciile pentru evenimentul tău, într-un singur loc.**

A modern marketplace platform connecting event organizers with verified service providers (bartenders, waiters, mobile bars, wine corners) in Romania.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-Private-red)

---

## ✨ Features

### For Clients
- 🔍 Browse verified service providers
- 🎯 Filter by category (bartenders, waiters, wine corner, etc.)
- 📦 Pre-configured event packages
- 📝 Quick quote request forms
- 💬 WhatsApp direct contact

### For Providers
- 📋 Professional profile listings
- 💰 Flexible pricing (hourly, per event, quote-based)
- ⭐ Ratings and reviews system
- 🏷️ Verified badge for trust

### Platform
- 🎨 Beautiful, responsive design
- 🇷🇴 Fully localized in Romanian
- 📱 Mobile-first approach
- ⚡ Fast page loads with Next.js App Router

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **React 19** | UI components |

### Future Integrations (Phase 2+)
- **Supabase** - Database, Auth, Storage
- **Stripe / Netopia** - Payment processing
- **Netlify or cPanel** - Deployment

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── furnizori/         # Marketplace & provider details
│   ├── serviciile-noastre/ # Our services page
│   ├── pachete/           # Event packages
│   ├── devino-partener/   # Become a partner
│   ├── despre-noi/        # About us
│   ├── contact/           # Contact form
│   └── (legal pages)      # Terms, Privacy, Cancellation
├── components/
│   ├── layout/            # Header, Footer
│   ├── ui/                # Reusable UI components
│   ├── home/              # Homepage sections
│   └── furnizori/         # Provider components
├── lib/
│   ├── mockData.ts        # Sample data for MVP
│   ├── constants.ts       # Site configuration
│   ├── types.ts           # TypeScript definitions
│   ├── utils.ts           # Utility functions
│   └── proxy.ts           # API layer (future Supabase)
└── public/images/         # Static assets
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/web-bookmyevent.git

# Navigate to project
cd web-bookmyevent

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, featured providers |
| `/furnizori` | Marketplace with filters |
| `/furnizori/[id]` | Provider detail page |
| `/serviciile-noastre` | Mobile bar services showcase |
| `/pachete` | Event packages (wedding, corporate) |
| `/devino-partener` | Partner registration info |
| `/despre-noi` | About us & team |
| `/contact` | Contact form with WhatsApp |

---

## 🎨 Design System

### Colors
- **Primary:** Warm beige/cream (`#F5F0E8`)
- **Secondary:** Rich brown (`#6B5344`)
- **Accent:** Gold (`#D4AF37`)

### Typography
- **Headings:** Cormorant Garamond (serif)
- **Body:** Plus Jakarta Sans (sans-serif)

---

## 📋 Roadmap

- [x] **Phase 1: MVP** - Static site with mock data
- [ ] **Phase 2: Backend** - Supabase integration, auth
- [ ] **Phase 3: Payments** - Stripe/Netopia, booking system
- [ ] **Phase 4: Growth** - Reviews, analytics, mobile app

---

## 🤝 Contributing

This is a private project. Please contact the repository owner for contribution guidelines.

---

## 📞 Contact

- **Email:** contact@evenimente.com
- **Location:** Oradea, Bihor, România

---

## 📜 License

Private - All rights reserved.

---

<p align="center">
  Made with ❤️ in Romania
</p>
