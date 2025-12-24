import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";
import { PACHETE_EVENIMENTE } from "@/lib/mockData";
import { CATEGORII_SERVICII } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

export default function PachetePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200 py-20">
        <div className="container-custom text-center">
          <Badge className="mb-4">Pachete Complete</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brown-800 mb-6">
            Pachete pentru evenimente
          </h1>
          <p className="text-xl text-brown-500 max-w-2xl mx-auto">
            Soluții complete care includ toate serviciile de care ai nevoie, la un preț avantajos.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {PACHETE_EVENIMENTE.map((pachet, index) => {
              return (
                <div
                  key={pachet.id}
                  className="bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={pachet.imagine}
                      alt={pachet.nume}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    {pachet.economie && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="gold" className="shadow-lg">
                          Economisești {formatPrice(pachet.economie)} RON
                        </Badge>
                      </div>
                    )}

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                        {pachet.nume}
                      </h2>
                      <p className="text-cream-200 text-sm">{pachet.numarInvitati}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-brown-600 mb-6">{pachet.descriere}</p>

                    {/* Services included */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-brown-800 mb-3 uppercase tracking-wider">
                        Servicii incluse:
                      </h3>
                      <ul className="space-y-3">
                        {pachet.servicii.map((serviciu, i) => {
                          const categoryInfo = CATEGORII_SERVICII.find(
                            (c) => c.id === serviciu.categorie
                          );
                          return (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-lg bg-cream-100 flex items-center justify-center flex-shrink-0">
                                <span className="text-sm font-bold text-gold-600">
                                  {serviciu.cantitate}x
                                </span>
                              </div>
                              <div>
                                <span className="font-medium text-brown-800">
                                  {categoryInfo?.nume || serviciu.categorie}
                                </span>
                                <p className="text-sm text-brown-500">{serviciu.descriere}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-cream-200">
                      <div>
                        <span className="text-sm text-brown-500">de la</span>
                        <div className="text-3xl font-bold text-brown-800">
                          {formatPrice(pachet.pretDeLa)} <span className="text-base font-normal">RON</span>
                        </div>
                      </div>
                      <Button href="/contact">
                        Cere ofertă
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-brown-700 to-brown-800 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Nu găsești pachetul potrivit?
            </h2>
            <p className="text-cream-300 text-lg mb-8 max-w-2xl mx-auto">
              Creăm pachete personalizate pentru nevoile tale specifice. Spune-ne ce îți dorești și îți facem o ofertă pe măsură.
            </p>
            <Button href="/contact" size="lg" variant="gold">
              Solicită pachet personalizat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

