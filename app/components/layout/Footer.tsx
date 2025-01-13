import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-background dark:bg-backgroundAlt border-t border-primary/20 dark:border-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Program */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-textPrimary">
              Program
            </h3>
            <div className="space-y-2 text-textSecondary">
              <p>Luni - Vineri: {siteConfig.hours.monday}</p>
              <p>Sâmbătă: {siteConfig.hours.saturday}</p>
              <p>Duminică: {siteConfig.hours.sunday}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-textPrimary">
              Contact
            </h3>
            <div className="space-y-2 text-textSecondary">
              <p>{siteConfig.contact.address}</p>
              <p>
                {siteConfig.contact.city}, {siteConfig.contact.country}
              </p>
              <p>Tel: {siteConfig.contact.phone}</p>
              <p>Email: {siteConfig.contact.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-textPrimary">
              Link-uri Rapide
            </h3>
            <div className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-textSecondary hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-textPrimary">
              Social Media
            </h3>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-textSecondary hover:text-primary transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-textSecondary hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-textSecondary hover:text-primary transition-colors"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-textSecondary/80 mt-12">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Toate drepturile
            rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
