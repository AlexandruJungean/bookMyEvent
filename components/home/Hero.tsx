import Button from "@/components/ui/Button";
import { SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brown-300" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/10 rounded-full mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-sm font-medium text-brown-600">
                Prestatori verificați pentru evenimentul tău
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-in-up stagger-1">
              <span className="text-brown-800">Bar mobil</span>
              <br className="hidden sm:block" />
              <span className="text-brown-800"> & </span>
              <span className="text-gold-600">servicii complete</span>
              <br className="hidden sm:block" />
              <span className="text-brown-700">pentru evenimente</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-brown-500 mb-8 max-w-lg animate-fade-in-up stagger-2">
              {SITE_DESCRIPTION}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <Button href="/contact" size="lg">
                Cere ofertă
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/furnizori" variant="outline" size="lg">
                Caută furnizori
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-cream-300 animate-fade-in-up stagger-4">
              <div>
                <div className="text-3xl font-heading font-bold text-brown-800">500+</div>
                <div className="text-sm text-brown-500">Evenimente</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-brown-800">50+</div>
                <div className="text-sm text-brown-500">Prestatori</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-brown-800">4.9</div>
                <div className="text-sm text-brown-500">Rating mediu</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-fade-in stagger-2">
            <div className="relative">
              {/* Main Image */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ minHeight: '600px', height: 'calc(100vh - 200px)', maxHeight: '800px' }}
              >
                <img
                  src="/images/hero-main1.png"
                  alt="Bar mobil pentru evenimente"
                  className="w-full h-full object-cover"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent" />
                
                {/* Floating card */}
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-brown-800">Prestatori Verificați</div>
                      <div className="text-sm text-brown-500">Calitate garantată</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brown-400/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

