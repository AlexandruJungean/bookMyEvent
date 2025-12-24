export type CategorieServiciu =
  | "barman"
  | "ospatar"
  | "wine-corner"
  | "prosecco-corner"
  | "shot-corner"
  | "cocktail-bar"
  | "coffee-corner";

export interface InfoCategorieServiciu {
  id: CategorieServiciu;
  nume: string;
  numePlural: string;
  descriere: string;
}

export interface PachetServiciu {
  id: string;
  nume: string;
  descriere: string;
  pret: number;
  tipPret: "fix" | "deLa";
  caracteristici: string[];
  estePopular?: boolean;
}

export interface Prestator {
  id: string;
  nume: string;
  slug: string;
  categorie: CategorieServiciu;
  titlu: string;
  descriere: string;
  descriereScurta: string;
  tipPret: "fix" | "orar" | "oferta";
  pretDeLa?: number;
  unitatePret?: "oră" | "eveniment" | "pachet";
  imagini: string[];
  imagineCoperta: string;
  rating: number;
  numarRecenzii: number;
  locatie: string;
  esteVerificat: boolean;
  estePromovat: boolean;
  pachete?: PachetServiciu[];
  experienta?: string;
  telefon?: string;
  email?: string;
}

export interface PachetEveniment {
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
  imagine: string;
}

export interface Testimonial {
  id: string;
  nume: string;
  rol: string;
  continut: string;
  rating: number;
  imagine?: string;
  dataEveniment?: string;
}

export interface CerereOferta {
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

export interface ElementNavigare {
  nume: string;
  href: string;
}

