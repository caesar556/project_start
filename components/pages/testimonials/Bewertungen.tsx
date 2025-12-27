"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Globe } from "lucide-react";
import { TESTIMONIALS } from "@/constants";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import ReviewsCta from "@/components/common/cta/ReviewsCta";
import Badges from "./Badges";

export default function Bewertungen() {
  const [isLoading, setIsLoading] = useState(true);
  const testimonials = TESTIMONIALS;
  const averageRating = testimonials?.length
    ? (
        testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
      ).toFixed(1)
    : "5.0";

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Globe className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Österreichweit & Europaweit
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Kundenbewertungen – Richard Umzug
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-6">
            Das sagen unsere zufriedenen Kunden über Richard Umzug – Ihr Partner
            für Umzüge in Österreich und Europa.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-8 w-8 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="font-bold text-2xl text-primary-foreground">
              {averageRating}
            </span>
            <span className="text-primary-foreground/80">
              ({testimonials?.length || 0} Bewertungen)
            </span>
          </div>
        </div>
      </section>

      <Badges averageRating={averageRating} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4 mt-6 ">
            Erfahrungen unserer Kunden aus Österreich & Europa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lesen Sie, was unsere Kunden über ihre Erfahrungen mit Richard Umzug
            berichten. Wir sind stolz auf jeden erfolgreichen Umzug!
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <Skeleton className="h-4 w-24 mb-3" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <Skeleton className="h-4 w-32" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials?.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="relative hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.city}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {new Date(testimonial.date).toLocaleDateString("de-AT", {
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <ReviewsCta />
      </div>
    </>
  );
}
