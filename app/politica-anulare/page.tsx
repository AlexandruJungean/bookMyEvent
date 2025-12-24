import { SITE_NAME, CONTACT_INFO } from "@/lib/constants";

export default function PoliticaAnularePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-cream-50 py-12 border-b border-cream-200">
        <div className="container-custom">
          <h1 className="text-4xl font-heading font-bold text-brown-800">
            Politica de Anulare
          </h1>
          <p className="text-brown-500 mt-2">Ultima actualizare: Decembrie 2025</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <section className="mb-8">
            <p className="text-brown-600 text-lg">
              Înțelegem că planurile se pot schimba. Această politică descrie condițiile de anulare a rezervărilor efectuate prin {SITE_NAME}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              Anulări efectuate de client
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white font-bold">30+</span>
                  </div>
                  <h3 className="font-semibold text-brown-800">Cu peste 30 de zile înainte</h3>
                </div>
                <p className="text-brown-600">
                  <strong className="text-green-700">Rambursare 100%</strong> - Primești înapoi întreaga sumă achitată ca avans.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-white font-bold">15-30</span>
                  </div>
                  <h3 className="font-semibold text-brown-800">Cu 15-30 de zile înainte</h3>
                </div>
                <p className="text-brown-600">
                  <strong className="text-yellow-700">Rambursare 50%</strong> - Primești înapoi jumătate din avansul achitat.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-white font-bold">&lt;15</span>
                  </div>
                  <h3 className="font-semibold text-brown-800">Cu mai puțin de 15 zile înainte</h3>
                </div>
                <p className="text-brown-600">
                  <strong className="text-red-700">Fără rambursare</strong> - Avansul nu se restituie.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              Anulări efectuate de prestator
            </h2>
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-200">
              <p className="text-brown-600 mb-4">
                În cazul în care prestatorul anulează rezervarea, {SITE_NAME} oferă:
              </p>
              <ul className="list-disc pl-6 text-brown-600 space-y-2">
                <li><strong>Rambursare 100%</strong> a tuturor sumelor achitate</li>
                <li><strong>Asistență gratuită</strong> pentru găsirea unui prestator alternativ</li>
                <li><strong>Discount 10%</strong> pentru o rezervare viitoare ca gest de bună voință</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              Reprogramări
            </h2>
            <p className="text-brown-600 mb-4">
              Reprogramarea evenimentului este posibilă fără costuri suplimentare dacă:
            </p>
            <ul className="list-disc pl-6 text-brown-600 space-y-2">
              <li>Noua dată este în următoarele 6 luni</li>
              <li>Prestatorul este disponibil la noua dată</li>
              <li>Solicitarea este făcută cu minim 7 zile înainte de data inițială</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              Forță majoră
            </h2>
            <p className="text-brown-600">
              În cazul unor circumstanțe excepționale (dezastre naturale, pandemii, restricții legale), se aplică condiții speciale. Contactați-ne pentru a discuta opțiunile disponibile.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              Cum solicit o anulare?
            </h2>
            <p className="text-brown-600 mb-4">
              Pentru a solicita anularea unei rezervări, contactați-ne prin:
            </p>
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-200">
              <ul className="space-y-3 text-brown-600">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email: {CONTACT_INFO.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Telefon: {CONTACT_INFO.telefon}</span>
                </li>
              </ul>
              <p className="text-sm text-brown-500 mt-4">
                Menționați numărul rezervării și motivul anulării pentru o procesare rapidă.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

