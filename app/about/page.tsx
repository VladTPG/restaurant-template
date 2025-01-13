"use client";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  FaHeart,
  FaStar,
  FaUsers,
  FaWifi,
  FaWheelchair,
  FaParking,
  FaBabyCarriage,
  FaDog,
  FaCreditCard,
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
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
            src={siteConfig.about.hero.image}
            alt="About hero"
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
            {siteConfig.about.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]">
            {siteConfig.about.hero.subtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-8" />
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={siteConfig.about.story.image}
                alt="Our story"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-textPrimary mb-8">
                {siteConfig.about.story.title}
              </h2>
              <div className="space-y-6 text-textSecondary leading-relaxed">
                {siteConfig.about.story.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-backgroundAlt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-textPrimary mb-6">
              Echipa Noastră
            </h2>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              Profesioniști pasionați care aduc magia în fiecare farfurie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {siteConfig.about.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-80 mb-6 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-textPrimary">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-textSecondary">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="text-4xl text-primary mb-4">
                <FaHeart className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-textPrimary">
                Pasiune
              </h3>
              <p className="text-textSecondary">
                Punem suflet în fiecare preparat și experiență pe care o creăm
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl text-primary mb-4">
                <FaStar className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-textPrimary">
                Calitate
              </h3>
              <p className="text-textSecondary">
                Folosim doar ingrediente premium și tehnici rafinate
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl text-primary mb-4">
                <FaUsers className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-textPrimary">
                Tradiție
              </h3>
              <p className="text-textSecondary">
                Păstrăm vie moștenirea culinară de peste două decenii
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 px-4 bg-backgroundAlt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-textPrimary mb-6">
              Facilități
            </h2>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              Confort și accesibilitate pentru toți oaspeții noștri
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="text-3xl text-primary">
                <FaWifi className="mx-auto" />
              </div>
              <p className="text-sm font-medium text-textPrimary">
                Wi-Fi Gratuit
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center space-y-3"
            >
              <div className="text-3xl text-primary">
                <FaWheelchair className="mx-auto" />
              </div>
              <p className="text-sm font-medium text-textPrimary">
                Acces Persoane cu Dizabilități
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center space-y-3"
            >
              <div className="text-3xl text-primary">
                <FaParking className="mx-auto" />
              </div>
              <p className="text-sm font-medium text-textPrimary">
                Parcare Gratuită
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center space-y-3"
            >
              <div className="text-3xl text-primary">
                <FaBabyCarriage className="mx-auto" />
              </div>
              <p className="text-sm font-medium text-textPrimary">
                Scaune pentru Copii
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center space-y-3"
            >
              <div className="text-3xl text-primary">
                <FaDog className="mx-auto" />
              </div>
              <p className="text-sm font-medium text-textPrimary">
                Pet Friendly
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="text-3xl text-primary">
                <FaCreditCard className="mx-auto" />
              </div>
              <p className="text-sm font-medium text-textPrimary">
                Plată cu Cardul
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center space-y-3"
            >
              <div className="text-3xl text-primary">
                <FaLeaf className="mx-auto" />
              </div>
              <p className="text-sm font-medium text-textPrimary">
                Opțiuni Vegetariene
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
