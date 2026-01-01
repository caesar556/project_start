"use client";

import { useState, useEffect, useMemo } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Award, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        const data: Testimonials[] = await res.json();
        setTestimonials(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    fetchTestimonials();
  }, []);

  const totalTestimonials = useMemo(() => testimonials.length, [testimonials]);
  const totalPages = Math.ceil(totalTestimonials / itemsPerPage);

  const visibleTestimonials = useMemo(() => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  }, [currentIndex, testimonials]);

  useEffect(() => {
    if (currentIndex >= totalPages && totalPages > 0) {
      setCurrentIndex(0);
    }
  }, [totalPages, currentIndex]);

  return (
    <section className="py-24 bg-[#fafafa] dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 text-orange-500 fill-orange-500" />
            <span className="text-orange-500 font-bold text-[10px] uppercase tracking-[0.2em]">
              Bewertungen
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
            Was unsere Kunden <span className="text-orange-500">erzählen</span>
          </h2>

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Ausgezeichnet mit <span className="text-slate-900 dark:text-white font-bold text-lg">5.0/5.0</span> Sternen
            </p>
          </div>
        </motion.div>

        <div className="mb-16">
          <motion.div 
            key={currentIndex}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isLoading
              ? [...Array(itemsPerPage)].map((_, i) => (
                  <div key={i} className="h-80 rounded-3xl bg-slate-100 dark:bg-slate-900 animate-pulse" />
                ))
              : visibleTestimonials.map((t) => (
                  <motion.div 
                    key={t._id} 
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      className="group relative bg-white dark:bg-slate-900 border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] dark:shadow-none rounded-[2.5rem] overflow-hidden h-full flex flex-col"
                    >
                      <CardContent className="pt-12 pb-10 px-9 flex flex-col h-full">
                        <Quote className="absolute top-10 right-10 h-10 w-10 text-slate-100 dark:text-slate-800 transition-colors group-hover:text-orange-500/10" />
                        
                        <div className="flex gap-1 mb-8">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className={`h-4 w-4 ${
                                s <= t.rating
                                  ? "fill-orange-500 text-orange-500"
                                  : "text-slate-200 dark:text-slate-800"
                              }`}
                            />
                          ))}
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-10 flex-grow text-lg italic">
                          &ldquo;{t.text}&rdquo;
                        </p>

                        <div className="flex items-center gap-4 pt-8 border-t border-slate-50 dark:border-slate-800">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-slate-900/20">
                              {t.name.charAt(0)}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-orange-500 border-4 border-white dark:border-slate-900 flex items-center justify-center">
                              <Check size={10} className="text-white font-bold" />
                            </div>
                          </div>
                          <div className="min-w-0">
                            <p className="font-black text-slate-900 dark:text-white text-lg leading-tight">{t.name}</p>
                            <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mt-0.5">
                              {t.city}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-slate-100 dark:border-slate-900 pt-12">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">
              Seite {currentIndex + 1} von {totalPages}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)}
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={cn("w-2.5 h-2.5 rounded-full transition-all", 
                    i === currentIndex ? "bg-orange-500 w-8" : "bg-slate-200 dark:bg-slate-800"
                  )}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % totalPages)}
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          <Link href="/bewertungen" className="group flex items-center gap-3 text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs hover:text-orange-500 transition-colors">
            Alle Bewertungen
            <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
              <ChevronRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
