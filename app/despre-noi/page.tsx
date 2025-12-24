import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

const stats = [
  { value: "500+", label: "Evenimente" },
  { value: "50+", label: "Prestatori" },
  { value: "10K+", label: "Invitați serviți" },
  { value: "4.9", label: "Rating mediu" },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Calitate",
    description: "Verificăm fiecare prestator pentru a asigura cele mai înalte standarde de servicii.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Inovație",
    description: "Aducem tehnologia în industria evenimentelor pentru o experiență simplificată.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Pasiune",
    description: "Iubim evenimentele și ne dedicăm să facem fiecare unul special și memorabil.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Comunitate",
    description: "Construim o comunitate de profesioniști dedicați și clienți mulțumiți.",
  },
];

export default function DespreNoiPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200 py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brown-800 mb-6">
                Povestea noastră
              </h1>
              <p className="text-xl text-brown-500 mb-6">
                Am pornit cu o viziune simplă: să facem organizarea evenimentelor mai ușoară și mai plăcută pentru toată lumea.
              </p>
              <p className="text-brown-600">
                Din experiența noastră în industria evenimentelor, am observat cât de dificil poate fi să găsești prestatori de încredere pentru un eveniment important. De aceea am creat evenimente.com - o platformă care conectează organizatorii cu cei mai buni profesioniști verificați.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/team-founder.png"
                  alt="Echipa evenimente.com"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/team-group.png"
                  alt="Echipa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brown-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-cream-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown-800 mb-6">
              Misiunea noastră
            </h2>
            <p className="text-xl text-brown-600 leading-relaxed">
              Să transformăm modul în care sunt organizate evenimentele în România, oferind o platformă unde calitatea întâlnește confortul. Credem că fiecare eveniment merită să fie special, iar găsirea serviciilor potrivite nu ar trebui să fie o provocare.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionTitle
            title="Valorile noastre"
            subtitle="Principiile care ne ghidează în tot ceea ce facem"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-cream-200 group-hover:bg-gold-100 flex items-center justify-center text-brown-600 group-hover:text-gold-600 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-brown-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-brown-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-brown-700 to-brown-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Hai să creăm împreună
            <br />
            <span className="text-gold-400">evenimente memorabile</span>
          </h2>
          <p className="text-cream-300 text-lg mb-8 max-w-2xl mx-auto">
            Fie că ești organizator în căutarea serviciilor perfecte sau prestator care dorește să-și crească afacerea, suntem aici pentru tine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="gold">
              Contactează-ne
            </Button>
            <Button href="/devino-partener" size="lg" variant="outline-light">
              Devino partener
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

