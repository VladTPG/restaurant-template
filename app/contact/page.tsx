import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-textPrimary">
            Contactează-ne
          </h1>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Suntem aici pentru a răspunde la întrebările tale și pentru a-ți
            oferi cea mai bună experiență.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6 text-textPrimary">
              Informații de Contact
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-textPrimary">
                    Adresa
                  </h3>
                  <p className="text-textSecondary">
                    {siteConfig.contact.address}
                    <br />
                    {siteConfig.contact.city}, {siteConfig.contact.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-textPrimary">
                    Telefon
                  </h3>
                  <p className="text-textSecondary">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-textPrimary">Email</h3>
                  <p className="text-textSecondary">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Program */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-6 text-textPrimary">
                Program
              </h2>
              <div className="space-y-2 text-textSecondary">
                <p className="flex justify-between">
                  <span>Luni - Vineri:</span>
                  <span>{siteConfig.hours.monday}</span>
                </p>
                <p className="flex justify-between">
                  <span>Sâmbătă:</span>
                  <span>{siteConfig.hours.saturday}</span>
                </p>
                <p className="flex justify-between">
                  <span>Duminică:</span>
                  <span>{siteConfig.hours.sunday}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-backgroundAlt p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-textPrimary">
              Trimite-ne un mesaj
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-textPrimary"
                  >
                    Nume
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-textSecondary/20 bg-background text-textPrimary placeholder-textSecondary/50 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-textPrimary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-textSecondary/20 bg-background text-textPrimary placeholder-textSecondary/50 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-textPrimary"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-textSecondary/20 bg-background text-textPrimary placeholder-textSecondary/50 focus:outline-none focus:border-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 rounded-lg text-sm font-semibold"
              >
                Trimite Mesaj
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
