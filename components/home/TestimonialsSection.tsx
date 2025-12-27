"use client";

import { useState, useEffect, useMemo } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;

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

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 border border-orange-500/20 bg-orange-500/10">
            <Award className="h-4 w-4 text-orange-500" />
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Kundenstimmen
            </span>
          </div>

          <h2 className="text-4xl font-extrabold mb-6">
            Das sagen unsere{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Kunden
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Über 1.000 zufriedene Kunden vertrauen auf Richard Umzug.
          </p>

          {/* Rating */}
          <div className="inline-flex items-center gap-4 bg-card rounded-2xl px-8 py-5 shadow-xl border justify-center">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-7 w-7 fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="text-left">
              <span className="text-3xl font-extrabold block">5.0</span>
              <span className="text-sm text-muted-foreground">
                {totalTestimonials} Bewertungen
              </span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {isLoading
            ? [...Array(itemsPerPage)].map((_, i) => (
                <Card key={i} className="animate-pulse h-64" />
              ))
            : visibleTestimonials.map((t) => (
                <Card
                  key={t._id}
                  className="relative bg-card border shadow-xl rounded-2xl overflow-hidden hover:-translate-y-2 transition-all"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-orange-500 to-slate-900" />

                  <CardContent className="pt-10 pb-8 px-7">
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <Quote className="h-5 w-5 text-orange-500" />
                    </div>

                    <div className="flex gap-1 mb-5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`h-5 w-5 ${
                            s <= t.rating
                              ? "fill-orange-500 text-orange-500"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="italic text-sm mb-8 leading-relaxed">
                      "{t.text}"
                    </p>

                    <div className="flex items-center justify-between pt-5 border-t">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold">{t.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {t.city}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs text-muted-foreground">
                        {new Date(t.date).toLocaleDateString("de-AT", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && !isLoading && (
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
              }
            >
              <ChevronLeft />
            </Button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={i === currentIndex ? "outline" : "default"}
                size="icon"
                className={cn("rounded-full shadow-lg", {
                  "bg-orange-500 text-white hover:bg-orange-700/50":
                    i === currentIndex,
                })}
                onClick={() => setCurrentIndex(i)}
              >
                {i + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % totalPages)}
            >
              <ChevronRight />
            </Button>
          </div>
        )}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="text-orange-500 font-semibold shadow-lg"
          >
            <Link href="/bewertungen">
              Alle length Bewertungen ansehen
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
