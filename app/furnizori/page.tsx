"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import SectionTitle from "@/components/ui/SectionTitle";
import FilterTabs from "@/components/furnizori/FilterTabs";
import ProviderCard from "@/components/furnizori/ProviderCard";
import { PRESTATORI } from "@/lib/mockData";

export default function FurnizoriPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categorie") || "toate";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProviders = useMemo(() => {
    if (activeCategory === "toate") {
      return PRESTATORI;
    }
    return PRESTATORI.filter((p) => p.categorie === activeCategory);
  }, [activeCategory]);

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
            
            {/* Filter Tabs */}
            <FilterTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-brown-500">
              <span className="font-semibold text-brown-800">{filteredProviders.length}</span>{" "}
              {filteredProviders.length === 1 ? "furnizor găsit" : "furnizori găsiți"}
            </p>
          </div>

          {/* Grid */}
          {filteredProviders.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProviders.map((provider, index) => (
                <div
                  key={provider.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProviderCard provider={provider} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-cream-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-cream-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-brown-800 mb-2">
                Niciun furnizor găsit
              </h3>
              <p className="text-brown-500">
                Nu am găsit furnizori în această categorie. Încearcă altă categorie.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

