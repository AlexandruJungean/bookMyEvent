import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { CATEGORII_SERVICII } from "@/lib/constants";

const serviceIcons: Record<string, React.ReactNode> = {
  barman: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-4.669.867M5 14.5l-1.402 1.402c-1.232 1.232-.65 3.318 1.067 3.611l4.669.867M12 21v-3" />
    </svg>
  ),
  ospatar: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  "wine-corner": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-6m0 0c-3 0-6-2-6-6 0-2 0-4 1-6h10c1 2 1 4 1 6 0 4-3 6-6 6zm-4 6h8" />
    </svg>
  ),
  "prosecco-corner": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3v3.879c0 .663-.218 1.308-.62 1.834L6.045 12.6a8.25 8.25 0 00-1.545 4.8v.9a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-.9a8.25 8.25 0 00-1.545-4.8l-3.085-3.887A3.004 3.004 0 0114.25 6.88V3M9.75 3h4.5m-4.5 0V1.5m4.5 1.5V1.5" />
    </svg>
  ),
  "cocktail-bar": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 6 9-6M12 12v9m-4 0h8M7 3h10l-5 9L7 3z" />
    </svg>
  ),
  "coffee-corner": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M12 9v6m-7.5 3h15a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 0019.5 12H18V7.5A4.5 4.5 0 0013.5 3h-3A4.5 4.5 0 006 7.5V12H4.5A1.5 1.5 0 003 13.5v3A1.5 1.5 0 004.5 18z" />
    </svg>
  ),
  "shot-corner": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6V6zm3 3v6m6-6v6" />
    </svg>
  ),
};

export default function ServicesOverview() {
  const displayedServices = CATEGORII_SERVICII.slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Servicii complete pentru evenimente"
          subtitle="De la bar mobil și barmani profesioniști, până la ospătari eleganți și wine corners rafinate"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {displayedServices.map((service, index) => (
            <Link
              key={service.id}
              href={`/furnizori?categorie=${service.id}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center p-6 rounded-2xl bg-cream-50 border border-cream-200 hover:border-gold-400 hover:bg-cream-100 transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-cream-200 group-hover:bg-gold-100 flex items-center justify-center text-brown-600 group-hover:text-gold-600 transition-all duration-300 mb-4">
                  {serviceIcons[service.id] || serviceIcons.barman}
                </div>
                <h3 className="font-medium text-brown-800 text-center text-sm md:text-base">
                  {service.nume}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

