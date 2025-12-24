import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProviders from "@/components/home/FeaturedProviders";
import USPSection from "@/components/home/USPSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProviders />
      <USPSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
