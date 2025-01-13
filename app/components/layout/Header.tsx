import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="fixed w-full z-50 md:bg-[#1a161431] bg-background/80 backdrop-blur-lg bg-[#1a1614]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="relative w-12 h-12">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            <Navigation />
            <Link
              href="/reservations"
              className="btn-primary px-6 py-2 rounded-full text-sm font-semibold"
            >
              Rezervă Acum
            </Link>
          </div>

          <div className="md:hidden">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
