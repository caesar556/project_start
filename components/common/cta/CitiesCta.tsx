import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CitiesCta() {
  return (
    <div className="text-center mt-14">
      <Button asChild size="lg" variant="outline">
        <Link href="/leistungen">
          Alle Standorte & Leistungen von Richard Umzug
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
