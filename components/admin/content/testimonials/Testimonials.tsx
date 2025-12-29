"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, Quote, Trash } from "lucide-react";

import { useApi } from "@/hooks/useApi";

type TestimonialType = {
  _id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
};

export default function DashboardTestimonials() {
  const { data: testimonials, loading, del } = useApi<TestimonialType[]>("/api/testimonials");

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      await del(id);
    } catch (err) {
      console.error(err);
      alert("Error deleting testimonial");
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="rounded-2xl shadow-xl">
            <CardContent className="p-7 space-y-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-10 w-40" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials?.map((t) => (
        <Card
          key={t._id}
          className="relative bg-card border shadow-xl rounded-2xl overflow-hidden
                     transition-all hover:-translate-y-2"
        >
          {/* Gradient top bar */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-orange-500 to-slate-900" />

          <CardContent className="pt-10 pb-8 px-7 relative">
            {/* Delete button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDelete(t._id)}
              className="absolute top-0  left-0   text-red-500 hover:bg-red-500/10"
            >
              <Trash size={25} />
            </Button>

            {/* Quote icon */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Quote className="h-5 w-5 text-orange-500" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`h-5 w-5 ${
                    s <= t.rating
                      ? "fill-orange-500 text-orange-500"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>

            {/* Text */}
            <p className="italic text-sm mb-8 leading-relaxed line-clamp-4">
              "{t.text}"
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.city}</p>
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
  );
}
