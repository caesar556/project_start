import { Star } from "lucide-react";

export default function HeroRating() {
  return (
    <div className="flex items-center justify-center gap-3 mb-10">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <span className="text-white/70 text-sm">
        5.0 Bewertung • 1.000+ Kunden
      </span>
    </div>
  );
}
