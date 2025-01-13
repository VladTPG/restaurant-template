"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={siteConfig.hero.image}
            alt="Restaurant hero"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-white px-4 max-w-4xl mx-auto"
          >
            <h1 className="text-white text-6xl md:text-7xl font-bold mb-8 tracking-tight">
              {siteConfig.hero.title}
            </h1>
            <p className="text-white text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
              {siteConfig.hero.subtitle}
            </p>
            <div className="flex flex-col gap-4 justify-center items-center w-full max-w-xs mx-auto">
              <Link
                href={siteConfig.hero.cta[0].link}
                className="btn-primary px-8 py-3 rounded-full text-base font-semibold w-full text-center shadow-lg hover:shadow-xl hover:scale-105 hover:text-white transition-all duration-200"
              >
                {siteConfig.hero.cta[0].text}
              </Link>
              <Link
                href={siteConfig.hero.cta[1].link}
                className="btn-primary px-8 py-3 rounded-full text-base font-semibold w-full text-center shadow-lg hover:shadow-xl hover:scale-105 hover:text-white transition-all duration-200"
              >
                {siteConfig.hero.cta[1].text}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 section-alt">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.specialties.map((item, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <div className="card-image-container">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="text-xl font-semibold mb-3 text-textPrimary">
                      {item.title}
                    </h3>
                    <p className="text-textSecondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-backgroundAlt relative overflow-hidden">
        {/* Decorative Elements */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(var(--primary-rgb), 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(var(--primary-rgb), 0.1) 0%, transparent 50%)
            `,
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              Ce Spun Clienții Noștri
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 right-8 text-4xl text-primary opacity-20">
                  &ldquo;
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textPrimary">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-textSecondary leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Decorative dots */}
                <div className="absolute bottom-4 right-4 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-primary/20"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
