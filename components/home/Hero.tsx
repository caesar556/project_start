"use client";

import { Shield, Clock, ThumbsUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Geometric, HeroCta, HeroRating } from "@/components/common";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden py-8">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0D1628 0%, #121A2F 30%, #1A2642 60%, #0D1628 100%)",
        }}
      />

      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(30, 45, 80, 0.8) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 85% 85%, rgba(20, 35, 65, 0.6) 0%, transparent 50%)",
          }}
        />
      </div>

      <Geometric />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full"
            style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
              boxShadow: "0 8px 32px rgba(255, 106, 0, 0.35)",
            }}
          >
            <Award className="h-5 w-5 text-white" />
            <span className="text-white font-bold text-sm">
              Nr. 1 Umzugsfirma Wien & Umgebung
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight"
          >
            Ihr{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6A00] via-[#FF8534] to-[#FF6A00]"
            >
              günstiger Umzug
            </span>
            <br />
            in besten Händen.
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
          >
            Professionelle Umzüge & Entrümpelungen in Wien, ganz Österreich und
            europaweit.
            <span className="block mt-2 text-white/60">
              Schnell, zuverlässig und fair.
            </span>
          </motion.p>

          <motion.div variants={fadeIn}>
            <HeroRating />
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <HeroCta />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto "
          >
            {[
              { icon: Shield, label: "Vollversichert" },
              { icon: Clock, label: "Pünktlich" },
              { icon: ThumbsUp, label: "1.000+ Kunden" },
            ].map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeIn}
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
              >
                <Icon className="h-5 w-5 text-white" />
                <span className="text-white text-sm font-semibold">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
