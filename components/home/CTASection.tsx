import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown-400/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brown-800 mb-6">
            Pregătit să organizezi
            <br />
            <span className="text-gold-600">evenimentul perfect?</span>
          </h2>
          <p className="text-lg text-brown-500 mb-8 max-w-2xl mx-auto">
            Contactează-ne astăzi pentru o ofertă personalizată. Echipa noastră te va ajuta să găsești serviciile perfecte pentru nevoile tale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Cere ofertă gratuită
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/pachete" variant="secondary" size="lg">
              Vezi pachetele
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

