"use client";
import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/types";
import {
  ArrowRight,
  Building2,
  Check,
  Heart,
  Home,
  LucideIcon,
  Music,
  Package,
  Trash2,
  Warehouse,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

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

export default function CityServices({ name }: { name: string }) {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("/api/services");
      const data: Service[] = await res.json();
      setServices(data);
      setIsLoading(false);
    };
    fetchServices();
  }, []);

  return (
    <div className="mb-16">
      <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">
        Was wir bieten
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
        Unsere Leistungen in {name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <Loading />
        ) : (
          services?.map((service) => {
            const Icon = iconMap[service.icon] || Check;
            return (
              <Card
                key={service._id}
                className="border border-orange-400 shadow-lg hover:shadow-lg transition-all hover:-translate-y-1 hover:border-orange-500/30"
              >
                <CardContent className="p-5 flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255, 106, 0, 0.1)" }}
                  >
                    <Icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
      <div className="mt-6 text-center">
        <Button asChild variant="outline" className="rounded-xl">
          <Link href="/leistungen">
            Alle Leistungen ansehen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
