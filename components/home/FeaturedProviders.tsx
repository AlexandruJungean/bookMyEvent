import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ProviderCard from "@/components/furnizori/ProviderCard";
import { getPrestatoriPromovati } from "@/lib/mockData";

export default function FeaturedProviders() {
  const featuredProviders = getPrestatoriPromovati();

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-custom">
        <SectionTitle
          title="Caută furnizori pentru eveniment"
          subtitle="Descoperă prestatorii noștri verificați și alege serviciile perfecte pentru evenimentul tău"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProviders.map((provider, index) => (
            <div
              key={provider.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProviderCard provider={provider} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/furnizori" variant="outline" size="lg">
            Vezi toți furnizorii
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}

