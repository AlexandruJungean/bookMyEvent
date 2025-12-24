import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";
import { formatPrice } from "@/lib/utils";

const packages = [
  {
    name: "Basic",
    price: 1500,
    description: "Ideal pentru petreceri mici și intime",
    features: [
      "Bar mobil elegant",
      "1 barman profesionist",
      "Până la 50 invitați",
      "4 ore servicii",
      "Menu 10 cocktail-uri clasice",
      "Echipamente profesionale",
    ],
  },
  {
    name: "Premium",
    price: 2500,
    description: "Pentru evenimente de dimensiuni medii",
    features: [
      "Bar mobil premium cu LED",
      "2 barmani profesioniști",
      "Până la 150 invitați",
      "6 ore servicii",
      "Menu 20 cocktail-uri",
      "Show flair inclus",
      "Cocktail-uri signature personalizate",
      "Decorațiuni bar tematice",
    ],
    popular: true,
  },
  {
    name: "All Inclusive",
    price: 4500,
    description: "Experiența completă pentru evenimente mari",
    features: [
      "2 baruri mobile premium",
      "4 barmani profesioniști",
      "Număr nelimitat invitați",
      "8+ ore servicii",
      "Menu personalizat complet",
      "Show flair & molecular",
      "Băuturi premium incluse",
      "Coordonator dedicat",
      "Setup și cleanup inclus",
    ],
  },
];

const galleryImages = [
  { src: "/images/gallery-bar-setup-1.png", alt: "Setup bar mobil" },
  { src: "/images/gallery-bar-setup-2.png", alt: "Bar mobil la eveniment" },
  { src: "/images/gallery-cocktails-1.png", alt: "Cocktail-uri premium" },
  { src: "/images/gallery-cocktails-2.png", alt: "Preparare cocktail" },
  { src: "/images/gallery-event-1.png", alt: "Eveniment corporate" },
  { src: "/images/gallery-event-2.png", alt: "Nuntă" },
];

export default function ServiciiPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-main2.png"
            alt="Bar mobil"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/90 via-brown-900/70 to-brown-900/50" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-4">
              Serviciul nostru premium
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-white">Bar Mobil & Servicii de</span>
              <br />
              <span className="text-gold-400">Bartending</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transformăm evenimentul tău într-o experiență de neuitat cu cocktail-uri de excepție și servicii profesionale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 bg-white hover:bg-cream-100"
                style={{ color: '#2D2D2D' }}
              >
                Cere ofertă gratuită
              </a>
              <a
                href="#pachete"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 bg-transparent border-2 border-white hover:bg-white hover:text-brown-800"
                style={{ color: '#FFFFFF' }}
              >
                Vezi pachetele
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Ce oferim"
            subtitle="Servicii complete de bar mobil pentru orice tip de eveniment"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-4.669.867M5 14.5l-1.402 1.402c-1.232 1.232-.65 3.318 1.067 3.611l4.669.867M12 21v-3" />
                  </svg>
                ),
                title: "Cocktail-uri Premium",
                description: "Preparate cu ingrediente de calitate superioară",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                title: "Barmani Profesioniști",
                description: "Echipă cu experiență în evenimente de top",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ),
                title: "Show Flair",
                description: "Spectacol de bartending care impresionează",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: "Personalizare",
                description: "Cocktail-uri signature pentru evenimentul tău",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-cream-100 flex items-center justify-center text-brown-600 group-hover:bg-gold-100 group-hover:text-gold-600 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-brown-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-brown-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionTitle
            title="Galerie"
            subtitle="Momente din evenimentele noastre"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="img-zoom h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pachete" className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Alege pachetul potrivit"
            subtitle="Pachete flexibile pentru orice buget și dimensiune de eveniment"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                  pkg.popular
                    ? "border-gold-400 shadow-2xl shadow-gold-500/20 scale-105"
                    : "border-cream-200 hover:border-cream-300 hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="gold" className="px-4 py-1.5 text-sm shadow-lg">
                      Cel mai popular
                    </Badge>
                  </div>
                )}
                
                <h3 className="text-2xl font-heading font-bold text-brown-800 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-brown-500 text-sm mb-6">{pkg.description}</p>
                
                <div className="mb-8">
                  <span className="text-sm text-brown-500">de la</span>
                  <div className="text-4xl font-bold text-brown-800">
                    {formatPrice(pkg.price)} <span className="text-lg font-normal">RON</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brown-600">
                      <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={pkg.popular ? "primary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Alege pachetul
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brown-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ai nevoie de ceva personalizat?
          </h2>
          <p className="text-cream-300 text-lg mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru o ofertă personalizată. Putem adapta serviciile la nevoile specifice ale evenimentului tău.
          </p>
          <Button href="/contact" size="lg" variant="gold">
            Solicită ofertă personalizată
          </Button>
        </div>
      </section>
    </div>
  );
}

