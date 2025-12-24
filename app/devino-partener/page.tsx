import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Acces la Clienți",
    description: "Primești cereri de la clienți care caută exact serviciile tale. Nu mai pierzi timp cu marketing.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Comision Transparent",
    description: "Comision mic și transparent, doar la rezervările finalizate. Fără costuri ascunse sau abonamente.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Verificare & Trust",
    description: "Badge de prestator verificat care crește încrederea clienților și șansele de a fi ales.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Vizibilitate",
    description: "Profilul tău este vizibil pentru mii de clienți care caută servicii pentru evenimente.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Gestionare Simplă",
    description: "Calendar de disponibilitate, gestionare rezervări și comunicare directă cu clienții (în curând).",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Suport Dedicat",
    description: "Echipa noastră te ajută să-ți optimizezi profilul și să atragi mai mulți clienți.",
  },
];

const steps = [
  {
    number: "01",
    title: "Înscrie-te",
    description: "Completează formularul de înscriere cu detaliile despre serviciile tale.",
  },
  {
    number: "02",
    title: "Verificare",
    description: "Echipa noastră verifică informațiile și te contactează pentru detalii.",
  },
  {
    number: "03",
    title: "Profil Activ",
    description: "Îți creăm profilul și începi să primești cereri de la clienți.",
  },
  {
    number: "04",
    title: "Câștigă",
    description: "Acceptă rezervările, oferă servicii excelente și crește-ți afacerea.",
  },
];

export default function DevinoPartenerPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brown-800 to-brown-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <Badge variant="gold" className="mb-6">Pentru Prestatori</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white">Devino partener </span>
            <span className="text-gold-400">evenimente.com</span>
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto mb-10">
            Alătură-te rețelei noastre de prestatori verificați și primește cereri de la clienți care caută exact serviciile tale.
          </p>
          <Button href="/contact" size="lg" variant="gold">
            Înscrie-te acum
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="De ce să devii partener?"
            subtitle="Beneficiile de a face parte din rețeaua evenimente.com"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:border-gold-400 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-cream-200 group-hover:bg-gold-100 flex items-center justify-center text-brown-600 group-hover:text-gold-600 transition-all duration-300 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-brown-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-brown-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionTitle
            title="Cum funcționează?"
            subtitle="Pași simpli pentru a începe să primești clienți"
          />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-cream-300" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-brown-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brown-500 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cream-100 to-cream-50 rounded-3xl p-8 md:p-12 border border-cream-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown-800 mb-4">
                  Structura comisioanelor
                </h2>
                <p className="text-brown-500">
                  Comision transparent și corect, plătit doar la rezervările confirmate
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold text-gold-500 mb-2">10%</div>
                  <div className="font-semibold text-brown-800 mb-1">Standard</div>
                  <p className="text-sm text-brown-500">Comision de bază pentru toate rezervările</p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-gold-400">
                  <Badge variant="gold" className="mb-2">Recomandat</Badge>
                  <div className="text-4xl font-bold text-gold-500 mb-2">8%</div>
                  <div className="font-semibold text-brown-800 mb-1">Premium</div>
                  <p className="text-sm text-brown-500">Pentru parteneri cu peste 10 rezervări/lună</p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold text-gold-500 mb-2">5%</div>
                  <div className="font-semibold text-brown-800 mb-1">VIP</div>
                  <p className="text-sm text-brown-500">Pentru parteneri exclusivi cu contract anual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brown-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Pregătit să îți crești afacerea?
          </h2>
          <p className="text-cream-300 text-lg mb-8 max-w-2xl mx-auto">
            Completează formularul și echipa noastră te va contacta în maximum 24 de ore.
          </p>
          <Button href="/contact" size="lg" variant="gold">
            Înscrie-te acum
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </section>
    </div>
  );
}

