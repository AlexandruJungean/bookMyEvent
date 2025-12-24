import { Suspense } from "react";
import FurnizoriContent from "./FurnizoriContent";

// Loading component for Suspense fallback
function FurnizoriLoading() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200 py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brown-800 mb-4">
              Găsește furnizorul perfect
            </h1>
            <p className="text-lg text-brown-500 mb-8">
              Explorează prestatorii noștri verificați și alege serviciile potrivite pentru evenimentul tău
            </p>
            {/* Loading placeholder for filter tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-24 bg-cream-200 rounded-full animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Loading */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="h-6 w-32 bg-cream-200 rounded animate-pulse mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-cream-200">
                <div className="aspect-[4/3] bg-cream-200 animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="h-5 bg-cream-200 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-cream-200 rounded animate-pulse w-1/2" />
                  <div className="h-4 bg-cream-200 rounded animate-pulse w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function FurnizoriPage() {
  return (
    <Suspense fallback={<FurnizoriLoading />}>
      <FurnizoriContent />
    </Suspense>
  );
}
