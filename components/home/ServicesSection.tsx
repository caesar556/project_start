"use client";

import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServicesCta, ServicesHead } from "@/components/common";
import {
  Home,
  Building2,
  Trash2,
  Package,
  Wrench,
  Warehouse,
  Music,
  Heart,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { Service } from "@/types";
import { useScrollAnimation } from "@/hooks/animation/useAnimation";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Trash2,
  Package,
  Wrench,
  Warehouse,
  Music,
  Heart,
};

type ServicesSectionProps = {
  services: Service[];
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({
    trigger: containerRef,
    start: "top 80%",
    y: 40,
  });

  return (
    <section ref={containerRef} className="relative py-24 bg-background overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] " />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <div className="opacity-0 translate-y-8 animate-in duration-700 fill-mode-forwards">
          <ServicesHead />
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Package;

            return (
              <Card
                key={service._id}
                tabIndex={0}
                role="button"
                className="
                  group relative overflow-hidden rounded-2xl
                  shadow-lg transition-all duration-300 ease-out
                  cursor-pointer

                  hover:scale-[1.03] hover:shadow-2xl
                  focus:scale-[1.03] focus:shadow-2xl
                  focus:outline-none focus:ring-2 focus:ring-orange-500
                  active:scale-[0.97]
                "
              >
                <CardHeader className="pb-4 relative z-10">
                  <div
                    className="
                      w-16 h-16 mb-6 rounded-2xl
                      flex items-center justify-center
                      bg-orange-500/10
                      transition-transform duration-300 ease-out
                      group-hover:scale-110 group-hover:rotate-12
                      group-focus:scale-110 group-focus:rotate-12
                    "
                  >
                    <Icon className="h-8 w-8 text-orange-500" />
                  </div>

                  <CardTitle
                    className="
                    text-xl font-bold
                    transition-colors duration-300
                    group-hover:text-orange-500
                  "
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="leading-relaxed text-[15px]">
                    {service.description}
                  </CardDescription>

                  <div
                    className="
                    mt-5 flex items-center gap-1
                    text-orange-500 font-semibold text-sm
                    opacity-0 translate-y-1
                    transition-all duration-300
                    group-hover:opacity-100 group-hover:translate-y-0
                  "
                  >
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="opacity-0 translate-y-8 animate-in duration-700 fill-mode-forwards delay-300">
          <ServicesCta />
        </div>
      </div>
    </section>
  );
}
