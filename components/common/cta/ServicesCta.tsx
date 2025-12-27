import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesCta() {
  return (
    <div className="text-center">
      <Button
        asChild
        size="lg"
        className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-xl"
      >
        <Link href="/leistungen">
          Alle Leistungen entdecken
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
