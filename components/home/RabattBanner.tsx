"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function RabattBanner() {
  return (
    <section
      className="py-12 md:py-16 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0D1628 0%, #1A2642 50%, #0D1628 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={{
              whileInView: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              className="flex-shrink-0"
              variants={fadeIn}
            >
              <div className="relative">
                <div
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center shadow-2xl animate-pulse-soft"
                  style={{
                    background:
                      "linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #DC2626 100%)",
                    boxShadow: "0 20px 60px rgba(220, 38, 38, 0.4)",
                  }}
                >
                  <span className="text-4xl md:text-5xl font-black text-white leading-none">
                    50 €
                  </span>
                  <span className="text-sm md:text-base font-bold text-white/90 mt-1">
                    *RABATT
                  </span>
                </div>

                {/* Star accent */}
                <div
                  className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
                    boxShadow: "0 4px 15px rgba(255, 106, 0, 0.4)",
                  }}
                >
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              variants={fadeIn}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Jetzt kostenlos anfragen und{" "}
                <span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF6A00 0%, #FF8534 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  50 € Rabatt
                </span>{" "}
                sichern!
              </h2>

              <p className="text-lg md:text-xl text-white/70 mb-6">
                Gültig für alle Umzüge in Wien, Österreich & Europaweit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="text-base font-bold rounded-xl border-0 transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
                    boxShadow: "0 8px 30px rgba(255, 106, 0, 0.4)",
                  }}
                >
                  <Link href="/umzug-anfragen" className="text-white">
                    Jetzt Angebot anfordern
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-white/50 mt-4 italic">
                *Sie erhalten 50 € Rabatt, wenn Sie das kostenlose
                Umzugsformular ausfüllen und einen Auftrag erteilen.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
