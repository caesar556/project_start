"use client";

import { CheckCircle2, Star, Users, Trophy, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const stats = [
  { label: "Jahre Erfahrung", value: "15+", icon: Trophy },
  { label: "Zufriedene Kunden", value: "5k+", icon: Users },
  { label: "Durchschnittsbewertung", value: "4.9", icon: Star },
  { label: "Erfolgreiche Umzüge", value: "10k+", icon: CheckCircle2 },
];

const features = [
  "Transparentes Festpreisangebot ohne versteckte Kosten",
  "Erfahrenes und fest angestelltes Fachpersonal",
  "Umfassender Versicherungsschutz für Ihr Inventar",
  "Modernstes Equipment und Fuhrpark",
];

export default function AboutUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content - Text & Features */}
          <div className="flex-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-sm font-bold mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A00]"></span>
                </span>
                Über uns
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#0D1628] leading-tight mb-6">
                Wir machen Ihren <span className="text-[#FF6A00]">Umzug zum Kinderspiel</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Seit über 15 Jahren sind wir Ihr vertrauenswürdiger Partner für Umzüge und Entrümpelungen. 
                Unser Anspruch ist es, jeden Umzug so stressfrei und effizient wie möglich zu gestalten – 
                egal ob Privatumzug, Firmenumzug oder internationale Logistik.
              </p>
            </motion.div>

            <motion.div 
              className="grid gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="bg-[#FF6A00] hover:bg-[#e65f00] text-white font-bold rounded-xl shadow-lg shadow-[#FF6A00]/20 group">
                Mehr erfahren
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-none shadow-xl shadow-slate-200/50 bg-white hover:translate-y-[-5px] transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="mx-auto w-12 h-12 rounded-2xl bg-[#0D1628]/5 flex items-center justify-center text-[#FF6A00]">
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="text-3xl md:text-4xl font-black text-[#0D1628]">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Trust Badges placeholder or secondary message */}
            <motion.div 
              className="mt-8 p-6 bg-[#0D1628] rounded-3xl text-white flex items-center justify-between gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex-1">
                <p className="font-bold text-lg mb-1 text-[#FF6A00]">Professionalität garantiert</p>
                <p className="text-sm text-white/70">Zertifiziertes Mitglied der Transport-Innung</p>
              </div>
              <Shield className="w-12 h-12 text-[#FF6A00] opacity-50" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
