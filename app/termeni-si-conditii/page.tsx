import { SITE_NAME, CONTACT_INFO } from "@/lib/constants";

export default function TermeniPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-cream-50 py-12 border-b border-cream-200">
        <div className="container-custom">
          <h1 className="text-4xl font-heading font-bold text-brown-800">
            Termeni și Condiții
          </h1>
          <p className="text-brown-500 mt-2">Ultima actualizare: Decembrie 2025</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto prose prose-brown">
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              1. Informații generale
            </h2>
            <p className="text-brown-600 mb-4">
              Bine ați venit pe {SITE_NAME}! Acești termeni și condiții guvernează utilizarea platformei noastre și serviciile oferite prin intermediul acesteia.
            </p>
            <p className="text-brown-600">
              Prin accesarea și utilizarea platformei, acceptați în totalitate acești termeni și condiții. Dacă nu sunteți de acord cu oricare dintre acești termeni, vă rugăm să nu utilizați platforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              2. Definiții
            </h2>
            <ul className="list-disc pl-6 text-brown-600 space-y-2">
              <li><strong>Platformă</strong> - site-ul web {SITE_NAME} și toate serviciile asociate</li>
              <li><strong>Client</strong> - persoana fizică sau juridică care rezervă servicii prin platformă</li>
              <li><strong>Prestator</strong> - furnizorul de servicii listat pe platformă</li>
              <li><strong>Servicii</strong> - serviciile de catering, bartending, ospătărie și altele oferite prin platformă</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              3. Serviciile platformei
            </h2>
            <p className="text-brown-600 mb-4">
              {SITE_NAME} funcționează ca o platformă de intermediere între clienți și prestatori de servicii pentru evenimente. Platforma facilitează:
            </p>
            <ul className="list-disc pl-6 text-brown-600 space-y-2">
              <li>Căutarea și compararea prestatorilor de servicii</li>
              <li>Solicitarea de oferte personalizate</li>
              <li>Comunicarea între clienți și prestatori</li>
              <li>Procesarea rezervărilor și plăților</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              4. Rezervări și plăți
            </h2>
            <p className="text-brown-600 mb-4">
              Pentru confirmarea unei rezervări, clientul trebuie să achite un avans de minimum 30% din valoarea totală a serviciilor. Restul sumei se achită conform termenelor stabilite în contract.
            </p>
            <p className="text-brown-600">
              Platforma reține un comision din valoarea serviciilor, conform acordului cu fiecare prestator. Acest comision este inclus în prețul final afișat clientului.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              5. Anulări și rambursări
            </h2>
            <p className="text-brown-600 mb-4">
              Politica de anulare variază în funcție de tipul serviciului și de termenul rămas până la eveniment:
            </p>
            <ul className="list-disc pl-6 text-brown-600 space-y-2">
              <li>Anulare cu peste 30 de zile înainte: rambursare 100% din avans</li>
              <li>Anulare cu 15-30 de zile înainte: rambursare 50% din avans</li>
              <li>Anulare cu mai puțin de 15 zile înainte: avansul nu se rambursează</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              6. Responsabilități
            </h2>
            <p className="text-brown-600 mb-4">
              <strong>Responsabilitatea platformei:</strong> Asigurăm verificarea prestatorilor și facilitarea comunicării, dar nu suntem parte contractantă directă în relația client-prestator.
            </p>
            <p className="text-brown-600">
              <strong>Responsabilitatea prestatorului:</strong> Prestatorul este responsabil pentru calitatea serviciilor oferite și pentru respectarea angajamentelor asumate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              7. Contact
            </h2>
            <p className="text-brown-600">
              Pentru orice întrebări legate de acești termeni și condiții, ne puteți contacta la:
            </p>
            <ul className="list-none pl-0 text-brown-600 mt-4">
              <li>Email: {CONTACT_INFO.email}</li>
              <li>Telefon: {CONTACT_INFO.telefon}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

