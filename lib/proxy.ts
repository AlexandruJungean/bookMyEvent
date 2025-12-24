/**
 * API Proxy Configuration
 * This file handles API request proxying for future Supabase integration
 */

// Base API URL - will be replaced with Supabase URL in Phase 2
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

// Supabase configuration placeholders
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

/**
 * Generic fetch wrapper with error handling
 */
export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Simulated API calls for MVP (mock data)
 * These will be replaced with real Supabase calls in Phase 2
 */
export const api = {
  // Providers
  getProviders: async () => {
    // In MVP, we use mock data from lib/mockData.ts
    const { PRESTATORI } = await import("./mockData");
    return PRESTATORI;
  },

  getProviderById: async (id: string) => {
    const { getPrestatorById } = await import("./mockData");
    return getPrestatorById(id);
  },

  getProvidersByCategory: async (category: string) => {
    const { getPrestatoriByCategorie } = await import("./mockData");
    return getPrestatoriByCategorie(category);
  },

  getFeaturedProviders: async () => {
    const { getPrestatoriPromovati } = await import("./mockData");
    return getPrestatoriPromovati();
  },

  // Packages
  getPackages: async () => {
    const { PACHETE_EVENIMENTE } = await import("./mockData");
    return PACHETE_EVENIMENTE;
  },

  // Testimonials
  getTestimonials: async () => {
    const { TESTIMONIALE } = await import("./mockData");
    return TESTIMONIALE;
  },

  // Quote request (simulated)
  submitQuoteRequest: async (data: QuoteRequestData): Promise<{ success: boolean; message: string }> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In production, this would send to Supabase/email service
    console.log("Quote request submitted:", data);
    
    return {
      success: true,
      message: "Cererea ta a fost trimisă cu succes! Te vom contacta în curând.",
    };
  },

  // Contact form (simulated)
  submitContactForm: async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Contact form submitted:", data);
    
    return {
      success: true,
      message: "Mesajul tău a fost trimis! Îți vom răspunde în maximum 24 de ore.",
    };
  },

  // Partner registration (simulated)
  submitPartnerRequest: async (data: PartnerRequestData): Promise<{ success: boolean; message: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Partner request submitted:", data);
    
    return {
      success: true,
      message: "Cererea ta de parteneriat a fost înregistrată! Te vom contacta pentru următorii pași.",
    };
  },
};

// Types for form submissions
export interface QuoteRequestData {
  nume: string;
  email: string;
  telefon: string;
  tipEveniment: string;
  dataEveniment?: string;
  numarInvitati?: number;
  locatie?: string;
  servicii?: string[];
  mesaj?: string;
  prestatorId?: string;
}

export interface ContactFormData {
  nume: string;
  email: string;
  telefon?: string;
  subiect?: string;
  mesaj: string;
}

export interface PartnerRequestData {
  nume: string;
  email: string;
  telefon: string;
  categorie: string;
  experienta: string;
  descriere: string;
  localitate: string;
}

/**
 * Future Supabase client initialization
 * Uncomment and configure when integrating Supabase in Phase 2
 */
// import { createClient } from '@supabase/supabase-js';
// 
// export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// 
// export const supabaseApi = {
//   providers: {
//     getAll: () => supabase.from('prestatori').select('*'),
//     getById: (id: string) => supabase.from('prestatori').select('*').eq('id', id).single(),
//     getByCategory: (category: string) => supabase.from('prestatori').select('*').eq('categorie', category),
//   },
//   bookings: {
//     create: (data: any) => supabase.from('rezervari').insert(data),
//     getByClient: (clientId: string) => supabase.from('rezervari').select('*').eq('client_id', clientId),
//   },
// };

