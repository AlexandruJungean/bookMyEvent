# evenimente.com - Detalii Tehnice

## 🛠️ Stack Tehnologic

### Frontend
| Tehnologie | Versiune | Scop |
|------------|----------|------|
| Next.js | 16.1.1 | Framework React cu App Router |
| React | 19.x | Bibliotecă UI |
| TypeScript | 5.x | Siguranță tipuri |
| Tailwind CSS | 4.x | Stilizare |

### Backend Viitor (Faza 2)
| Tehnologie | Scop |
|------------|------|
| Supabase | Bază de date, Auth, Storage |
| Supabase Auth | Autentificare utilizatori |
| Supabase Storage | Upload imagini |
| PostgreSQL | Bază de date (via Supabase) |

### Plăți Viitoare (Faza 3)
| Tehnologie | Scop |
|------------|------|
| Stripe | Plăți internaționale |
| Netopia/MobilPay | Plăți card România |

---

## 📁 Structura Proiectului

```
app/
├── (routes)/
│   ├── page.tsx                    # Pagina principală
│   ├── furnizori/
│   │   ├── page.tsx                # Lista furnizori
│   │   └── [id]/
│   │       └── page.tsx            # Pagină detalii prestator
│   ├── serviciile-noastre/
│   │   └── page.tsx                # Serviciile noastre (bar mobil)
│   ├── pachete/
│   │   └── page.tsx                # Pachete evenimente
│   ├── devino-partener/
│   │   └── page.tsx                # Devino partener
│   ├── despre-noi/
│   │   └── page.tsx                # Despre noi
│   ├── contact/
│   │   └── page.tsx                # Pagină contact
│   ├── termeni-si-conditii/
│   │   └── page.tsx                # Termeni și Condiții
│   └── politica-confidentialitate/
│       └── page.tsx                # Politica de Confidențialitate
├── layout.tsx                      # Layout rădăcină
├── globals.css                     # Stiluri globale
└── not-found.tsx                   # Pagină 404

components/
├── layout/
│   ├── Header.tsx                  # Header navigare
│   ├── Footer.tsx                  # Footer site
│   ├── MobileMenu.tsx              # Navigare mobilă
│   └── Container.tsx               # Wrapper conținut
├── ui/
│   ├── Button.tsx                  # Variante butoane
│   ├── Card.tsx                    # Component card
│   ├── Badge.tsx                   # Badge-uri status
│   ├── Input.tsx                   # Input-uri formular
│   ├── Select.tsx                  # Select dropdown
│   ├── Modal.tsx                   # Dialoguri modale
│   └── Tabs.tsx                    # Navigare tab-uri
├── home/
│   ├── Hero.tsx                    # Secțiune hero pagină principală
│   ├── ServicesOverview.tsx        # Secțiune iconițe servicii
│   ├── FeaturedProviders.tsx       # Carduri preview prestatori
│   ├── USPSection.tsx              # Puncte unice de vânzare
│   └── CTASection.tsx              # Call to action
├── furnizori/
│   ├── ProviderCard.tsx            # Card listare prestator
│   ├── ProviderGrid.tsx            # Grid prestatori
│   ├── FilterTabs.tsx              # Filtre categorii
│   ├── SearchBar.tsx               # Funcționalitate căutare
│   └── ProviderGallery.tsx         # Galerie imagini
├── forms/
│   ├── QuoteRequestForm.tsx        # Formular cerere ofertă
│   ├── ContactForm.tsx             # Formular contact
│   └── PartnerForm.tsx             # Înregistrare prestator
└── shared/
    ├── SectionTitle.tsx            # Titluri secțiuni
    ├── TestimonialCard.tsx         # Card recenzie/testimonial
    ├── PackageCard.tsx             # Card pachet servicii
    └── IconBox.tsx                 # Iconiță serviciu + etichetă

lib/
├── mockData/
│   ├── providers.ts                # Listări prestatori
│   ├── services.ts                 # Categorii servicii
│   ├── packages.ts                 # Pachete evenimente
│   ├── testimonials.ts             # Recenzii/testimoniale
│   └── index.ts                    # Export toate datele mock
├── constants/
│   ├── navigation.ts               # Elemente meniu navigare
│   ├── services.ts                 # Constante tipuri servicii
│   └── contact.ts                  # Info contact
├── utils/
│   ├── formatPrice.ts              # Formatare preț (RON)
│   └── cn.ts                       # Combinator clase Tailwind
└── types/
    ├── provider.ts                 # Tipuri prestator
    ├── service.ts                  # Tipuri serviciu
    ├── booking.ts                  # Tipuri rezervare
    └── index.ts                    # Export toate tipurile

public/
├── images/
│   ├── hero/                       # Imagini secțiune hero
│   ├── providers/                  # Fotografii prestatori
│   ├── gallery/                    # Galerie servicii
│   ├── team/                       # Fotografii echipă
│   └── icons/                      # Iconițe servicii
└── logo.svg                        # Logo evenimente.com
```

---

## 🎨 Sistem Design

### Variabile Culori (CSS Custom Properties)

```css
:root {
  /* Primară - Bej Cald */
  --color-cream-50: #FDFCFA;
  --color-cream-100: #FAF8F5;
  --color-cream-200: #F5F0E8;
  --color-cream-300: #E8DFD0;
  --color-cream-400: #D4C4A8;
  
  /* Secundară - Maro Bogat */
  --color-brown-500: #8B7355;
  --color-brown-600: #6B5344;
  --color-brown-700: #4A3728;
  --color-brown-800: #2D2D2D;
  
  /* Accent - Auriu */
  --color-gold-400: #D4AF37;
  --color-gold-500: #C9A86C;
  --color-gold-600: #B8956A;
  
  /* Semantic */
  --color-background: var(--color-cream-50);
  --color-surface: #FFFFFF;
  --color-text-primary: var(--color-brown-800);
  --color-text-secondary: #6B7280;
  --color-border: var(--color-cream-300);
}
```

### Scală Tipografie

```css
/* Familii Font */
--font-heading: 'Playfair Display', serif;
--font-body: 'DM Sans', sans-serif;

/* Dimensiuni Font */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
```

### Sistem Spațiere
Folosind scala implicită Tailwind (unitate de bază 4px)

### Border Radius
- **sm:** 0.375rem (6px) - butoane, input-uri
- **md:** 0.5rem (8px) - carduri
- **lg:** 0.75rem (12px) - modale, carduri mari
- **xl:** 1rem (16px) - imagini hero
- **full:** 9999px - avataruri, pill-uri

### Umbre
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-card: 0 2px 8px -2px rgb(0 0 0 / 0.08);
```

---

## 📦 Tipuri de Date

### Prestator
```typescript
interface Prestator {
  id: string;
  nume: string;
  slug: string;
  categorie: CategorieServiciu;
  titlu: string;
  descriere: string;
  descriereScurta: string;
  tipPret: 'fix' | 'orar' | 'oferta';
  pretDeLa?: number;
  unitatePret?: 'oră' | 'eveniment' | 'pachet';
  imagini: string[];
  imagineCoperta: string;
  rating: number;
  numarRecenzii: number;
  locatie: string;
  esteVerificat: boolean;
  estePromovat: boolean;
  pachete?: PachetServiciu[];
  disponibilitate?: string[];
}
```

### Categorie Serviciu
```typescript
type CategorieServiciu = 
  | 'barman'
  | 'ospatar'
  | 'wine-corner'
  | 'prosecco-corner'
  | 'shot-corner'
  | 'cocktail-bar'
  | 'coffee-corner';

interface InfoCategorieServiciu {
  id: CategorieServiciu;
  nume: string;
  numePlural: string;
  iconita: string;
  descriere: string;
}
```

### Pachet Serviciu
```typescript
interface PachetServiciu {
  id: string;
  nume: string;
  descriere: string;
  pret: number;
  tipPret: 'fix' | 'deLa';
  caracteristici: string[];
  estePopular?: boolean;
}
```

### Pachet Eveniment
```typescript
interface PachetEveniment {
  id: string;
  nume: string;
  descriere: string;
  numarInvitati: string;
  pretDeLa: number;
  servicii: {
    categorie: CategorieServiciu;
    cantitate: number;
    descriere: string;
  }[];
  economie?: number;
}
```

### Cerere Ofertă
```typescript
interface CerereOferta {
  nume: string;
  email: string;
  telefon: string;
  tipEveniment: string;
  dataEveniment: string;
  numarInvitati: number;
  locatie: string;
  servicii: CategorieServiciu[];
  mesaj?: string;
  prestatorId?: string;
}
```

---

## 🔧 Specificații Componente Cheie

### Secțiune Hero
- Imagine fundal full-width cu overlay
- Animație intrare text
- Două butoane CTA: primar ("Cere ofertă") + secundar ("Caută furnizori")
- Responsive: stivuit pe mobil

### Card Prestator
- Raport aspect: 4:5 pentru imagine
- Efect hover: scale subtil + umbră
- Afișează: imagine, titlu, indicator preț, badge categorie
- Click: navighează la pagina de detalii

### Tab-uri Filtrare
- Scroll orizontal pe mobil
- Stare activă: fundal plin
- Categorii din datele mock

### Formular Ofertă
- Câmpuri: nume, email, telefon, tip eveniment, dată, invitați, locație, mesaj
- Validare cu mesaje de eroare
- Stare succes cu confirmare
- CTA alternativ WhatsApp

---

## 🌐 Rute și Navigare

### Navigare Principală
```typescript
const navigare = [
  { nume: 'Acasă', href: '/' },
  { nume: 'Furnizori', href: '/furnizori' },
  { nume: 'Serviciile noastre', href: '/serviciile-noastre' },
  { nume: 'Pachete', href: '/pachete' },
  { nume: 'Devino partener', href: '/devino-partener' },
  { nume: 'Despre noi', href: '/despre-noi' },
  { nume: 'Contact', href: '/contact' },
];
```

### Navigare Footer
- Link-uri rapide către toate paginile
- Categorii servicii
- Pagini legale
- Link-uri social media
- Info contact

---

## 📱 Breakpoint-uri Responsive

Folosind valorile implicite Tailwind:
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

### Abordare Mobile-First
- Stiluri implicite pentru mobil
- Îmbunătățire progresivă pentru ecrane mai mari
- Ținte touch-friendly (min 44px)
- Meniu navigare pliabil

---

## ⚡ Considerații Performanță

### Imagini
- Utilizare component Next.js Image
- Format WebP cu fallback-uri
- Lazy loading pentru imaginile sub fold
- Dimensionare corectă cu srcset

### Font-uri
- Google Fonts cu `display: swap`
- Subset pentru caractere românești
- Preload font-uri critice

### Code Splitting
- Import-uri dinamice pentru modale
- Code splitting bazat pe rute (automat cu App Router)

---

## 🔒 Viitor: Schemă Supabase (Faza 2)

```sql
-- Tabel utilizatori (extinde Supabase auth.users)
CREATE TABLE profiluri (
  id UUID REFERENCES auth.users PRIMARY KEY,
  rol TEXT CHECK (rol IN ('client', 'prestator', 'admin')),
  nume_complet TEXT,
  telefon TEXT,
  avatar_url TEXT,
  creat_la TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel prestatori
CREATE TABLE prestatori (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiluri(id),
  categorie TEXT,
  titlu TEXT,
  descriere TEXT,
  tip_pret TEXT,
  pret_de_la NUMERIC,
  locatie TEXT,
  este_verificat BOOLEAN DEFAULT FALSE,
  este_activ BOOLEAN DEFAULT TRUE,
  creat_la TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel rezervări
CREATE TABLE rezervari (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES profiluri(id),
  prestator_id UUID REFERENCES prestatori(id),
  data_eveniment DATE,
  numar_invitati INTEGER,
  status TEXT,
  suma_totala NUMERIC,
  suma_comision NUMERIC,
  creat_la TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel recenzii
CREATE TABLE recenzii (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rezervare_id UUID REFERENCES rezervari(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comentariu TEXT,
  creat_la TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 📋 Variabile de Mediu (Viitor)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Plăți
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Contact
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_CONTACT_PHONE=
```

---

## 🚀 Deployment

### Platformă Recomandată
- **Vercel** (optim pentru Next.js)
- Deploy-uri preview automate
- Suport edge functions
- Analize încorporate

### Configurare Domeniu
- Primar: evenimente.com
- Alternativ: evenimente.ro
