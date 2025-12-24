# evenimente.com - Plan de Proiect

## 🎯 Viziune
**"Toate serviciile pentru evenimentul tău, într-un singur loc"**

evenimente.com este o platformă de tip marketplace care conectează organizatorii de evenimente (nunți, evenimente corporate, petreceri) cu prestatori verificați de servicii (barmani, ospătari, bar mobil, wine corner, etc.) din România.

---

## 📋 Model de Business

### Tip Platformă
- **Marketplace** pentru servicii de evenimente
- Monetizare bazată pe **comision** (5-20% per rezervare)

### Roluri Utilizatori
| Rol | Descriere |
|-----|-----------|
| **Client** | Organizatori de evenimente, miri, proprietari de locații care rezervă servicii |
| **Prestator** | Furnizori de servicii care își listează ofertele |
| **Administrator** | Proprietarul platformei - gestionează rezervări, plăți, comisioane, promovare |

### Surse de Venit
1. Comision la fiecare rezervare (10% implicit)
2. Planuri de abonament pentru prestatori (viitor)
3. Pachete promoționale / listări promovate (viitor)

---

## 🏗️ Structura Site-ului

### Pagini

#### 1. Pagina Principală (`/`)
- Secțiune Hero cu propunerea de valoare principală
- Titlu: "Bar mobil & servicii complete pentru evenimente"
- Subtitlu: "Toate serviciile pentru evenimentul tău, într-un singur loc"
- Butoane CTA: "Cere ofertă" / "Caută furnizori"
- Prezentare servicii (iconițe + descrieri scurte)
- Preview prestatori promovați
- Indicatori de încredere (prestatori verificați, o singură plată, garanție backup)

#### 2. Furnizori (`/furnizori`)
- Tab-uri de filtrare: Toate, Ospătari, Barmani, Wine corner, Prosecco corner, etc.
- Carduri prestatori cu:
  - Fotografie profesională
  - Nume/Titlu
  - Indicație preț: "de la X RON/oră" sau "Cere ofertă"
  - Rating (viitor)
  - Buton rapid "Rezervă"
- Funcționalitate de căutare
- Opțiuni de sortare (preț, rating, disponibilitate)

#### 3. Pagină Detalii Prestator (`/furnizori/[id]`)
- Galerie completă (foto/video)
- Descriere detaliată
- Pachete de servicii (Basic, Premium, All-inclusive)
- Calendar disponibilitate (vizual, nefuncțional în MVP)
- Secțiune recenzii (date mock)
- Formular "Cere ofertă"

#### 4. Serviciile Noastre - Barul Propriu (`/serviciile-noastre`)
- Prezentare serviciului principal de bar mobil
- Opțiuni de pachete cu descrieri
- Galerie foto/video
- Formular rapid de rezervare
- Testimoniale

#### 5. Cum Funcționează - Pentru Prestatori (`/devino-partener`)
- Explicație pas cu pas
- Beneficiile aderării
- Structura comisioanelor (transparentă)
- CTA înregistrare "Devino partener"
- FAQ pentru prestatori

#### 6. Pachete Evenimente (`/pachete`)
- Pachete pre-configurate:
  - "Pachet Nuntă 100 persoane"
  - "Pachet Corporate"
  - "Pachet Petrecere Privată"
- Prețuri de pachet cu indicator de economie
- Cerere ofertă cu un click

#### 7. Despre Noi (`/despre-noi`)
- Povestea fondatorului
- Fotografii echipă
- Experiență și credențiale
- Misiune și valori

#### 8. Contact (`/contact`)
- Formular de contact
- Link direct WhatsApp
- Număr de telefon
- Email
- Hartă zonă de servicii

#### 9. Pagini Legale
- Termeni și Condiții (`/termeni-si-conditii`)
- Politica de Confidențialitate (`/politica-confidentialitate`)
- Politica de Anulare (`/politica-anulare`)

---

## 🚀 Funcționalități MVP (Faza 1)

### Pentru Clienți
- [x] Navigare marketplace cu filtre
- [x] Vizualizare profiluri prestatori și galerii
- [x] Cerere ofertă (trimitere formular)
- [x] Vizualizare pachete evenimente
- [x] Contact via WhatsApp/formular

### Pentru Prestatori (Doar Afișare în MVP)
- [x] Listare profil cu date mock
- [x] Descrieri servicii și indicatori preț
- [x] Galerii foto
- [ ] Auto-înregistrare (Faza 2)
- [ ] Dashboard (Faza 2)

### Pentru Admin
- [ ] Dashboard administrativ (Faza 2)
- [ ] Gestionare rezervări (Faza 2)
- [ ] Procesare plăți (Faza 2)

---

## 📈 Funcționalități Viitoare (Faza 2+)

### Autentificare și Conturi
- Înregistrare/autentificare utilizatori (Supabase Auth)
- Flux înregistrare prestatori
- Istoric rezervări clienți

### Sistem de Rezervări
- Calendar disponibilitate în timp real
- Confirmare automată rezervări
- Plăți avans

### Plăți
- Integrare Stripe/Netopia
- Plăți split (prestator + comision)
- Facturare automată

### Recenzii și Ratinguri
- Recenzii clienți după evenimente
- Ratinguri prestatori
- Badge-uri rezervări verificate

### Dashboard Admin
- Gestionare rezervări
- Urmărire comisioane
- Workflow aprobare prestatori
- Analize

---

## 🎨 Direcție Design

### Paletă de Culori
- **Primară:** Bej cald/cremă (`#F5F0E8`, `#E8DFD0`)
- **Secundară:** Maro bogat/cafea (`#8B7355`, `#6B5344`)
- **Accent:** Auriu/șampanie (`#C9A86C`, `#D4AF37`)
- **Text:** Cărbune închis (`#2D2D2D`, `#4A4A4A`)
- **Fundal:** Alb-crem (`#FAFAF8`)

### Tipografie
- **Titluri:** Serif elegant (Playfair Display sau similar)
- **Corp:** Sans-serif curat (DM Sans, Outfit)

### Stil Vizual
- Căldură, invitație, simț premium
- Fotografie profesională de evenimente
- Colțuri rotunjite pe carduri
- Umbre subtile
- Spațiu alb curat
- Iconițe pentru categorii de servicii

### Puncte USP (vizibile pe pagina principală)
1. ✓ Prestatori verificați
2. ✓ Un singur contact & o singură plată
3. ✓ Backup garantat (dacă un prestator anulează)

---

## 🗓️ Faze de Dezvoltare

### Faza 1: MVP (Curentă)
- Site static cu date mock
- Toate paginile principale funcționale
- Design responsive
- Formulare cerere ofertă (fără procesare backend)
- UI frumos, gata de producție

### Faza 2: Integrare Backend
- Configurare Supabase
- Autentificare utilizatori
- Self-service prestatori
- Dashboard administrativ

### Faza 3: Plăți și Rezervări
- Integrare gateway plăți
- Flux rezervări automatizat
- Procesare comisioane

### Faza 4: Funcționalități de Creștere
- Sistem recenzii
- Căutare avansată
- Listări promovate
- Considerare aplicație mobilă

---

## 🌍 Localizare
- **Limbă:** Română (principală)
- **Monedă:** RON (Lei)
- **Regiune:** România (începe local, scalează național)

---

## 📊 Metrici de Succes (Viitor)
- Număr cereri de ofertă
- Înregistrări prestatori
- Rată conversie rezervări
- Valoare medie rezervare
- Satisfacție clienți (NPS)
