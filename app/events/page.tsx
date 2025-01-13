"use client";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { FaCalendar, FaUsers, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Events() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // sau un loading state
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/events-hero.jpg"
            alt="Events hero"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
            Evenimente Private
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]">
            Creăm momente memorabile pentru toate ocaziile speciale
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-8" />
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-textPrimary mb-6">
              Evenimente Viitoare
            </h2>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              Alătură-te experiențelor noastre culinare și culturale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {siteConfig.events.upcoming.map((event, index) => (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-background dark:bg-backgroundAlt rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <FaCalendar />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-4">
                    {event.title}
                  </h3>
                  <p className="text-textSecondary mb-6">{event.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary hover:text-primaryDark transition-colors"
                  >
                    Rezervă un loc <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-24 px-4 bg-backgroundAlt">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-textPrimary mb-6">
              Evenimente Private
            </h2>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              Transformăm viziunea ta într-o realitate memorabilă
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.events.private.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background dark:bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-textPrimary mb-4">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <FaUsers />
                    <span className="font-medium">{event.capacity}</span>
                  </div>
                  <p className="text-textSecondary mb-6">{event.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary hover:text-primaryDark transition-colors"
                  >
                    Solicită o ofertă <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
