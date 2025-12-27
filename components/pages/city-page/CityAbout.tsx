import { cityContent } from "@/constants/content";
import { Truck } from "lucide-react";

type CityAboutProps = {
  name: string;
  slug: keyof typeof cityContent;
  distance: number;
};

export default function CityAbout({ name, distance, slug }: CityAboutProps) {
  const content = cityContent[slug];
  return (
    <div className="mb-16">
      <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">
        Richard Umzug – Ihr Partner
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        Umzüge in {name} – Österreichweit & Europaweit
      </h2>
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        content details
      </p>

      {distance > 0 && (
        <div
          className="inline-flex items-center gap-2 rounded-xl px-4 py-3"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,106,0,0.05) 0%, rgba(13,22,40,0.05) 100%)",
            border: "1px solid rgba(255,106,0,0.2)",
          }}
        >
          <Truck className="h-5 w-5 text-orange-500" />
          <span className="text-foreground">
            Entfernung von Wien: <strong>{distance} km</strong>
          </span>
        </div>
      )}
    </div>
  );
}
