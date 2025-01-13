"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {siteConfig.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-white/90 hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation Button */}
      <div className="md:hidden flex items-center">
        <button
          className="p-2 text-white/90 hover:text-primary transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#1a1614] border-b border-primary/10 md:hidden overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className="px-4 py-6 space-y-4"
            >
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-white/90 hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/reservations"
                className="block py-3 text-center bg-primary hover:bg-primary-dark text-background transition-colors duration-200 rounded-full text-sm uppercase tracking-wider font-medium"
                onClick={() => setIsOpen(false)}
              >
                Rezervă Acum
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
