"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, ThumbsUp, Star, Award } from "lucide-react";
import { useAnimationGsap } from "@/hooks/animation/useAnimation";
import { useRef } from "react";

export default function Hero() {
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useAnimationGsap({
    descRef,
    cardsRef,
    actionsRef,
  });

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden py-8">
      {/* Premium Dark Navy Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0D1628 0%, #121A2F 30%, #1A2642 60%, #0D1628 100%)",
        }}
      />

      {/* Subtle Animated Gradient Overlay */}
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

      {/* Subtle Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] opacity-5"
          style={{
            background:
              "linear-gradient(45deg, transparent 0%, rgba(255,106,0,0.2) 50%, transparent 100%)",
            transform: "rotate(45deg)",
            borderRadius: "30%",
          }}
        />
        <div
          className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] opacity-5"
          style={{
            background:
              "linear-gradient(-45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            transform: "rotate(-45deg)",
            borderRadius: "30%",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            ref={actionsRef}
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
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
            Ihr{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #FF6A00 0%, #FF8534 50%, #FF6A00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              günstiger Umzug
            </span>
            <br />
            in besten Händen.
          </h1>

          {/* Subheadline */}
          <p
            ref={descRef}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
          >
            Professionelle Umzüge & Entrümpelungen in Wien, ganz Österreich und
            europaweit.
            <span className="block mt-2 text-white/60">
              Schnell, zuverlässig und fair.
            </span>
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-white/70 text-sm">
              5.0 Bewertung • 1.000+ Kunden
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button
              asChild
              size="lg"
              className="px-10 py-6 font-bold rounded-xl text-white"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
              }}
            >
              <Link href="/umzug-anfragen">
                Umzugsangebot anfordern
                <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-10 py-6 rounded-xl text-white"
            >
              <Link href="/umzugskosten-rechner">Kosten berechnen</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div
            ref={cardsRef}
            className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto "
          >
            {[
              { icon: Shield, label: "Vollversichert" },
              { icon: Clock, label: "Pünktlich" },
              { icon: ThumbsUp, label: "1.000+ Kunden" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
              >
                <Icon className="h-5 w-5 text-white" />
                <span className="text-white text-sm font-semibold">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
