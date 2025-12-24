"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";
import SectionTitle from "@/components/ui/SectionTitle";
import { CONTACT_INFO, TIPURI_EVENIMENTE } from "@/lib/constants";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brown-800 mb-4">
            Contactează-ne
          </h1>
          <p className="text-xl text-brown-500 max-w-2xl mx-auto">
            Suntem aici să te ajutăm să organizezi evenimentul perfect. Trimite-ne un mesaj și îți răspundem în maximum 24 de ore.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-cream-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brown-800 mb-4">
                    Mesaj trimis cu succes!
                  </h3>
                  <p className="text-brown-500 mb-6">
                    Îți mulțumim pentru mesaj! Echipa noastră te va contacta în cel mai scurt timp posibil.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Trimite alt mesaj
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold text-brown-800 mb-6">
                    Cere ofertă gratuită
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="Nume complet *"
                        placeholder="Introduceți numele"
                        required
                      />
                      <Input
                        label="Telefon *"
                        type="tel"
                        placeholder="+40 7XX XXX XXX"
                        required
                      />
                    </div>
                    
                    <Input
                      label="Email *"
                      type="email"
                      placeholder="email@exemplu.com"
                      required
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Select label="Tip eveniment *" required>
                        <option value="">Selectează tipul</option>
                        {TIPURI_EVENIMENTE.map((tip) => (
                          <option key={tip} value={tip}>
                            {tip}
                          </option>
                        ))}
                      </Select>
                      <Input
                        label="Data evenimentului"
                        type="date"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="Număr invitați"
                        type="number"
                        placeholder="ex: 100"
                      />
                      <Input
                        label="Locație eveniment"
                        placeholder="Oraș, locație"
                      />
                    </div>

                    <Textarea
                      label="Mesaj / Detalii suplimentare"
                      placeholder="Spune-ne mai multe despre evenimentul tău și ce servicii te interesează..."
                      rows={4}
                    />

                    <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Se trimite...
                        </>
                      ) : (
                        <>
                          Trimite cererea
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-brown-800 mb-6">
                Informații de contact
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800">Telefon</h3>
                    <p className="text-brown-600">{CONTACT_INFO.telefon}</p>
                    <p className="text-sm text-brown-500">{CONTACT_INFO.program}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800">Email</h3>
                    <p className="text-brown-600">{CONTACT_INFO.email}</p>
                    <p className="text-sm text-brown-500">Răspundem în max. 24 ore</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800">Locație</h3>
                    <p className="text-brown-600">{CONTACT_INFO.adresa}</p>
                    <p className="text-sm text-brown-500">Servicii în toată țara</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800">Preferi WhatsApp?</h3>
                    <p className="text-sm text-brown-500">Răspuns rapid prin mesaj</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Bună! Sunt interesat de serviciile pentru evenimente.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Scrie-ne pe WhatsApp
                </a>
              </div>

              {/* FAQ */}
              <div className="mt-8">
                <h3 className="font-semibold text-brown-800 mb-4">Întrebări frecvente</h3>
                <div className="space-y-4">
                  <details className="bg-cream-50 rounded-xl p-4 group">
                    <summary className="font-medium text-brown-800 cursor-pointer list-none flex items-center justify-between">
                      Cât durează până primesc o ofertă?
                      <svg className="w-5 h-5 text-brown-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-brown-600 text-sm">
                      Răspundem la toate cererile în maximum 24 de ore lucrătoare. Pentru urgențe, te recomandăm să ne contactezi pe WhatsApp.
                    </p>
                  </details>
                  <details className="bg-cream-50 rounded-xl p-4 group">
                    <summary className="font-medium text-brown-800 cursor-pointer list-none flex items-center justify-between">
                      Care sunt metodele de plată acceptate?
                      <svg className="w-5 h-5 text-brown-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-brown-600 text-sm">
                      Acceptăm transfer bancar, card (Stripe) și numerar. Pentru rezervare se solicită un avans de 30%.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

