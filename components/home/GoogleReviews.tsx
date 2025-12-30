"use client";

import { Star, CheckCircle } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/constants";
import { formatDate } from "@/lib/utils";
import GoogleIcon from "../common/GoogleIcon";
import GoogleBadge from "../common/GoogleBadge";
import { useGsap } from "@/hooks/animation/useGSAP";
import { useRef } from "react";

export default function GoogleReviews() {
  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  const titleRef = useRef<HTMLHeadingElement>(null);

  useGsap(() => {
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const totalReviews = 256;

  return (
    <section className="py-16 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <GoogleIcon />

          <h2 ref={titleRef} className="text-2xl md:text-3xl font-bold mb-3">AUSGEZEICHNET</h2>

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

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full  p-5"
        >
          <CarouselContent className="-ml-2 md:-ml-4  py-3 ">
            {reviews?.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card
                  tabIndex={0}
                  className="
                    px-3 pt-2 rounded-lg shadow-xl bg-orange-700/10
                    transition-all duration-300 ease-out
                    cursor-pointer
                    hover:scale-[1.01] hover:shadow-2xl
                    focus:scale-[1.01] focus:shadow-2xl
                    focus:outline-none focus:ring-2 focus:ring-orange-500
                    active:scale-[0.98]
                  "
                >
                  <div
                    className="h-1"
                    style={{
                      background:
                        "linear-gradient(90deg, #0D1628 0%, #FF6A00 50%, #0D1628 100%)",
                    }}
                  />
                  <CardContent className="p-6 ">
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #0D1628 0%, #1A2642 100%)",
                          boxShadow: "0 4px 15px rgba(13, 22, 40, 0.2)",
                        }}
                      >
                        {getInitial(review.name)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground truncate">
                            {review.name}
                          </h3>
                          <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(review.date)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-orange-500 text-orange-500"
                        />
                      ))}
                    </div>

                    <p className="text-foreground/90 text-sm leading-relaxed line-clamp-4 mb-3">
                      {review.text}
                    </p>

                    <button className="text-orange-500 text-sm font-medium hover:underline">
                      Weiterlesen
                    </button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border hover:bg-muted rounded-xl" />
          <CarouselNext className="hidden md:flex -right-4 bg-card border-border hover:bg-muted rounded-xl" />
        </Carousel>
        <GoogleBadge />
      </div>
    </section>
  );
}
