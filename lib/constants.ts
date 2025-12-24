import { ElementNavigare, InfoCategorieServiciu } from "./types";

export const SITE_NAME = "evenimente.com";
export const SITE_DESCRIPTION = "Toate serviciile pentru evenimentul tău, într-un singur loc";
export const SITE_TAGLINE = "Bar mobil & servicii complete pentru evenimente";

export const CONTACT_INFO = {
  telefon: "+40 742 123 456",
  email: "contact@evenimente.com",
  whatsapp: "40742123456",
  adresa: "Oradea, Bihor, România",
  program: "Luni - Vineri: 09:00 - 18:00",
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/evenimente.com",
  instagram: "https://instagram.com/evenimente.com",
  tiktok: "https://tiktok.com/@evenimente.com",
};

export const NAVIGARE_PRINCIPALA: ElementNavigare[] = [
  { nume: "Acasă", href: "/" },
  { nume: "Furnizori", href: "/furnizori" },
  { nume: "Serviciile noastre", href: "/serviciile-noastre" },
  { nume: "Pachete", href: "/pachete" },
  { nume: "Devino partener", href: "/devino-partener" },
  { nume: "Despre noi", href: "/despre-noi" },
  { nume: "Contact", href: "/contact" },
];

export const NAVIGARE_FOOTER: ElementNavigare[] = [
  { nume: "Termeni și Condiții", href: "/termeni-si-conditii" },
  { nume: "Politica de Confidențialitate", href: "/politica-confidentialitate" },
  { nume: "Politica de Anulare", href: "/politica-anulare" },
];

export const CATEGORII_SERVICII: InfoCategorieServiciu[] = [
  {
    id: "barman",
    nume: "Barman",
    numePlural: "Barmani",
    descriere: "Barmani profesioniști pentru cocktail-uri de excepție",
  },
  {
    id: "ospatar",
    nume: "Ospătar",
    numePlural: "Ospătari",
    descriere: "Ospătari eleganți și profesioniști pentru servire impecabilă",
  },
  {
    id: "wine-corner",
    nume: "Wine Corner",
    numePlural: "Wine Corners",
    descriere: "Stații de degustare vinuri premium cu somelier",
  },
  {
    id: "prosecco-corner",
    nume: "Prosecco Corner",
    numePlural: "Prosecco Corners",
    descriere: "Bar de prosecco și șampanie pentru momente speciale",
  },
  {
    id: "cocktail-bar",
    nume: "Cocktail Bar",
    numePlural: "Cocktail Bars",
    descriere: "Bar mobil complet echipat cu barmani experți",
  },
  {
    id: "coffee-corner",
    nume: "Coffee Corner",
    numePlural: "Coffee Corners",
    descriere: "Stație de cafea specialty cu barista profesionist",
  },
  {
    id: "shot-corner",
    nume: "Shot Corner",
    numePlural: "Shot Corners",
    descriere: "Corner pentru shot-uri și băuturi speciale",
  },
];

export const TIPURI_EVENIMENTE = [
  "Nuntă",
  "Botez",
  "Petrecere privată",
  "Eveniment corporate",
  "Aniversare",
  "Lansare produs",
  "Gala",
  "Altele",
];

