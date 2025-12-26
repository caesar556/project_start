"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type TestimonialType = {
  _id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
  isFeatured?: boolean;
  isPublished?: boolean;
};

export default function DashboardTestimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      setTestimonials(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      const res = await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete testimonial");
      setTestimonials(testimonials.filter((t) => t._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting testimonial");
    }
  };

  return (
    <div className="space-y-6">
      {loading ? (
        [...Array(3)].map((_, idx) => (
          <Card key={idx} className="bg-card border-0 shadow-xl rounded-2xl">
            <CardContent className="pt-10 pb-8 px-7">
              <Skeleton className="h-4 w-24 mb-5" />
              <Skeleton className="h-20 w-full mb-8" />
              <div className="flex items-center gap-4">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial._id}
              className="relative bg-card border border-border/50 shadow-xl rounded-2xl"
            >
              <CardContent className="pt-10 pb-8 px-7 relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`h-5 w-5 ${star <= testimonial.rating ? "text-orange-500" : "text-muted"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <CardDescription className="mb-6 italic line-clamp-4">
                  "{testimonial.text}"
                </CardDescription>

                <div className="flex items-center justify-between pt-5 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-gray-500">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <p className="text-xs text-muted-foreground">
                      {new Date(testimonial.date).toLocaleDateString("de-AT", {
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(testimonial._id)}
                    >
                      <Trash className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
