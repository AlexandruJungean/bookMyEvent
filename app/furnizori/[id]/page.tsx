import { notFound } from "next/navigation";
import Link from "next/link";
import { getPrestatorById, PRESTATORI } from "@/lib/mockData";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { CATEGORII_SERVICII } from "@/lib/constants";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRESTATORI.map((provider) => ({
    id: provider.id,
  }));
}

export default async function ProviderDetailPage({ params }: PageProps) {
  const { id } = await params;
  const provider = getPrestatorById(id);

  if (!provider) {
    notFound();
  }

  const categoryInfo = CATEGORII_SERVICII.find((c) => c.id === provider.categorie);

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-brown-500 hover:text-brown-700 transition-colors">
              Acasă
            </Link>
            <span className="text-brown-300">/</span>
            <Link href="/furnizori" className="text-brown-500 hover:text-brown-700 transition-colors">
              Furnizori
            </Link>
            <span className="text-brown-300">/</span>
            <span className="text-brown-800 font-medium">{provider.titlu}</span>
          </nav>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={provider.imagineCoperta}
                alt={provider.nume}
                className="w-full h-full object-cover"
              />
            </div>
            {provider.imagini.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {provider.imagini.slice(0, 3).map((img, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={img}
                      alt={`${provider.nume} - ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {provider.esteVerificat && (
                <Badge variant="success">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verificat
                </Badge>
              )}
              <Badge>{categoryInfo?.nume || provider.categorie}</Badge>
              <Badge variant="outline">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {provider.locatie}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-brown-800 mb-2">
              {provider.titlu}
            </h1>
            <p className="text-lg text-brown-500 mb-4">{provider.nume}</p>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(provider.rating) ? "text-gold-500" : "text-cream-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 font-semibold text-brown-800">{provider.rating}</span>
                <span className="text-brown-500">({provider.numarRecenzii} recenzii)</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-cream-50 rounded-2xl p-6 mb-6">
              {provider.tipPret === "oferta" ? (
                <div>
                  <p className="text-sm text-brown-500 mb-1">Preț</p>
                  <p className="text-2xl font-bold text-brown-800">Cere ofertă personalizată</p>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-brown-500 mb-1">Preț de la</p>
                  <p className="text-3xl font-bold text-brown-800">
                    {formatPrice(provider.pretDeLa!)} RON
                    <span className="text-lg font-normal text-brown-500">/{provider.unitatePret}</span>
                  </p>
                </div>
              )}
              {provider.experienta && (
                <p className="text-sm text-brown-500 mt-2">
                  Experiență: {provider.experienta}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-brown-800 mb-3">
                Descriere
              </h2>
              <p className="text-brown-600 leading-relaxed">{provider.descriere}</p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" className="flex-1">
                Cere ofertă
              </Button>
              <Button
                href={`https://wa.me/40742123456?text=Bună! Sunt interesat de serviciile ${provider.titlu}`}
                variant="secondary"
                size="lg"
                className="flex-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Packages */}
        {provider.pachete && provider.pachete.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brown-800 mb-8 text-center">
              Pachete disponibile
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {provider.pachete.map((pachet) => (
                <div
                  key={pachet.id}
                  className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${
                    pachet.estePopular
                      ? "border-gold-400 shadow-xl shadow-gold-500/10"
                      : "border-cream-200 hover:border-cream-300"
                  }`}
                >
                  {pachet.estePopular && (
                    <Badge variant="gold" className="mb-4">
                      Cel mai popular
                    </Badge>
                  )}
                  <h3 className="text-xl font-heading font-semibold text-brown-800 mb-2">
                    {pachet.nume}
                  </h3>
                  <p className="text-brown-500 text-sm mb-4">{pachet.descriere}</p>
                  <div className="mb-6">
                    <span className="text-sm text-brown-500">
                      {pachet.tipPret === "deLa" ? "de la " : ""}
                    </span>
                    <span className="text-3xl font-bold text-brown-800">
                      {formatPrice(pachet.pret)} RON
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pachet.caracteristici.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-brown-600">
                        <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant={pachet.estePopular ? "primary" : "outline"}
                    className="w-full"
                  >
                    Alege pachetul
                  </Button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

