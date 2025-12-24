import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200">
      <div className="text-center px-4">
        <div className="mb-8">
          <span className="text-9xl font-heading font-bold text-gradient">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-brown-800 mb-4">
          Pagina nu a fost găsită
        </h1>
        <p className="text-lg text-brown-500 mb-8 max-w-md mx-auto">
          Ne pare rău, dar pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            Înapoi acasă
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contactează-ne
          </Button>
        </div>
      </div>
    </div>
  );
}

