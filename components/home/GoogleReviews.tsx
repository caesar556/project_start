"use client";

import { Star, CheckCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/constants";

export default function GoogleReviews() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7) return `vor ${diffDays} Tagen`;
    if (diffDays < 30) return `vor ${Math.floor(diffDays / 7)} Wochen`;
    if (diffDays < 365) return `vor ${Math.floor(diffDays / 30)} Monaten`;
    return `vor ${Math.floor(diffDays / 365)} Jahren`;
  };

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  const totalReviews = 256;

  return (
    <section className="py-16 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">AUSGEZEICHNET</h2>

          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-7 w-7 fill-orange-500 text-orange-500"
              />
            ))}
          </div>

          <p className="text-muted-foreground">
            Basierend auf <span className="font-semibold">{totalReviews}</span>{" "}
            Bewertungen
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full rounded-2xl border card-hover">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                        {getInitial(review.name)}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{review.name}</h3>
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(review.date)}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-orange-500 text-orange-500"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm leading-relaxed line-clamp-4">
                      {review.text}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
