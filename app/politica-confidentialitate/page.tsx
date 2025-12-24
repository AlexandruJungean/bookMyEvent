import { SITE_NAME, CONTACT_INFO } from "@/lib/constants";

export default function PoliticaConfidentialitatePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-cream-50 py-12 border-b border-cream-200">
        <div className="container-custom">
          <h1 className="text-4xl font-heading font-bold text-brown-800">
            Politica de Confidențialitate
          </h1>
          <p className="text-brown-500 mt-2">Ultima actualizare: Decembrie 2025</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto prose prose-brown">
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              1. Introducere
            </h2>
            <p className="text-brown-600">
              La {SITE_NAME}, respectăm confidențialitatea datelor dumneavoastră. Această politică descrie modul în care colectăm, utilizăm și protejăm informațiile personale pe care ni le furnizați prin intermediul platformei noastre.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              2. Date colectate
            </h2>
            <p className="text-brown-600 mb-4">
              Colectăm următoarele tipuri de informații:
            </p>
            <ul className="list-disc pl-6 text-brown-600 space-y-2">
              <li><strong>Date de identificare:</strong> nume, prenume, adresă de email, număr de telefon</li>
              <li><strong>Date despre eveniment:</strong> tipul evenimentului, data, locația, numărul de invitați</li>
              <li><strong>Date de navigare:</strong> adresa IP, tipul browserului, paginile vizitate</li>
              <li><strong>Date de plată:</strong> procesate securizat prin furnizori terți (Stripe, Netopia)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              3. Scopul prelucrării
            </h2>
            <p className="text-brown-600 mb-4">
              Utilizăm datele dumneavoastră pentru:
            </p>
            <ul className="list-disc pl-6 text-brown-600 space-y-2">
              <li>Procesarea cererilor de ofertă și rezervărilor</li>
              <li>Comunicarea cu dumneavoastră privind serviciile solicitate</li>
              <li>Îmbunătățirea serviciilor noastre</li>
              <li>Trimiterea de comunicări de marketing (cu acordul dumneavoastră)</li>
              <li>Conformarea cu obligațiile legale</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              4. Partajarea datelor
            </h2>
            <p className="text-brown-600 mb-4">
              Datele dumneavoastră pot fi partajate cu:
            </p>
            <ul className="list-disc pl-6 text-brown-600 space-y-2">
              <li><strong>Prestatori de servicii:</strong> pentru a facilita rezervarea</li>
              <li><strong>Procesatori de plăți:</strong> pentru tranzacții securizate</li>
              <li><strong>Autorități:</strong> când legea impune acest lucru</li>
            </ul>
            <p className="text-brown-600 mt-4">
              Nu vindem datele dumneavoastră către terțe părți în scopuri de marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              5. Drepturile dumneavoastră
            </h2>
            <p className="text-brown-600 mb-4">
              Conform GDPR, aveți următoarele drepturi:
            </p>
            <ul className="list-disc pl-6 text-brown-600 space-y-2">
              <li>Dreptul de acces la datele personale</li>
              <li>Dreptul la rectificarea datelor inexacte</li>
              <li>Dreptul la ștergerea datelor ("dreptul de a fi uitat")</li>
              <li>Dreptul la restricționarea prelucrării</li>
              <li>Dreptul la portabilitatea datelor</li>
              <li>Dreptul de a vă opune prelucrării</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              6. Securitatea datelor
            </h2>
            <p className="text-brown-600">
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat, modificării, divulgării sau distrugerii. Utilizăm criptare SSL pentru toate transmisiile de date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              7. Cookie-uri
            </h2>
            <p className="text-brown-600">
              Utilizăm cookie-uri pentru a îmbunătăți experiența de navigare. Puteți gestiona preferințele cookie-urilor din setările browserului. Cookie-urile esențiale sunt necesare pentru funcționarea platformei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-brown-800 mb-4">
              8. Contact
            </h2>
            <p className="text-brown-600">
              Pentru exercitarea drepturilor sau întrebări despre această politică:
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

