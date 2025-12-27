import { Award, Shield, Users } from "lucide-react";

export default function Badges({ averageRating }: { averageRating: string }) {
  return (
    <section className="bg-card border-b">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center gap-4 p-4">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {averageRating}
              </p>
              <p className="text-sm text-muted-foreground">
                Durchschnittliche Bewertung
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 p-4">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">1.000+</p>
              <p className="text-sm text-muted-foreground">Zufriedene Kunden</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 p-4">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">20+</p>
              <p className="text-sm text-muted-foreground">Länder in Europa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
