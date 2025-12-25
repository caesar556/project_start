import { AlertTriangle, Calculator, Info, Tag } from "lucide-react";
import { Button } from "../ui/button";

export default function Result({CALCULATOR_CONFIG}) {
  return (
    <>
      {estimate && (
        <div
          className="rounded-3xl p-8 animate-fade-in relative"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 106, 0, 0.1) 0%, rgba(13, 22, 40, 0.5) 100%)",
            border: "2px solid rgba(255, 106, 0, 0.3)",
            boxShadow: "0 20px 60px rgba(255, 106, 0, 0.15)",
          }}
        >
          {/* Rabatt Badge */}
          <div
            className="absolute -top-3 -right-3 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg animate-pulse"
            style={{
              background: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)",
              color: "white",
              boxShadow: "0 4px 20px rgba(220, 38, 38, 0.5)",
            }}
          >
            <Tag className="h-4 w-4" />
            {CALCULATOR_CONFIG.rabattText}
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
              }}
            >
              <Calculator className="h-7 w-7 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-xl text-white">
                {CALCULATOR_CONFIG.resultCard.title}
              </h4>
              {estimate.distance !== null && (
                <p className="text-white/60">
                  Entfernung: ca. {estimate.distance} km von {fromCity}
                </p>
              )}
              {estimate.usedFallback && (
                <div className="flex items-center gap-1 text-amber-400 text-sm mt-1">
                  <Info className="h-4 w-4" />
                  <span>{CALCULATOR_CONFIG.tooltips.fallbackInfo}</span>
                </div>
              )}
            </div>
          </div>

          {/* Route Summary */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 rounded-xl"
            style={{ background: "rgba(255, 255, 255, 0.05)" }}
          >
            <div>
              <p className="text-white/50 text-xs mb-1">Von</p>
              <p className="text-white font-medium">{fromCity || "-"}</p>
            </div>
            <div>
              <p className="text-white/50 text-xs mb-1">Nach</p>
              <p className="text-white font-medium">{toCity || "-"}</p>
            </div>
            <div>
              <p className="text-white/50 text-xs mb-1">Wohnfläche</p>
              <p className="text-white font-medium">{area} m²</p>
            </div>
            <div>
              <p className="text-white/50 text-xs mb-1">Zimmer</p>
              <p className="text-white font-medium">{rooms}</p>
            </div>
          </div>

          {/* Price Display with Discount */}
          <div
            className="text-center py-8 mb-6 rounded-2xl"
            style={{ background: "rgba(255, 255, 255, 0.05)" }}
          >
            {/* Original Price (Strikethrough) */}
            <div className="mb-2">
              <span className="text-red-400 text-lg">
                {CALCULATOR_CONFIG.resultCard.originalpreisLabel}{" "}
              </span>
              <span className="text-red-400 text-2xl line-through">
                {estimate.fakeOriginalPrice.toLocaleString("de-AT")}€
              </span>
            </div>

            {/* Discounted Price */}
            <div className="mb-2">
              <span className="text-white/70 text-lg">
                {CALCULATOR_CONFIG.resultCard.rabattpreisLabel}
              </span>
            </div>
            <p
              className="text-5xl md:text-6xl font-extrabold mb-3"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FFAB00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {estimate.min.toLocaleString("de-AT")}€ –{" "}
              {estimate.max.toLocaleString("de-AT")}€
            </p>
            <p className="text-white/70 text-lg">Geschätzter Preisrahmen</p>
            <div className="flex items-center justify-center gap-2 mt-3 text-sm text-white/50">
              <Shield className="h-4 w-4" />
              <span>{CALCULATOR_CONFIG.resultCard.inklusiveText}</span>
            </div>
          </div>

          <div
            className="flex items-start gap-3 p-4 rounded-xl mb-6"
            style={{
              background: "rgba(255, 171, 0, 0.1)",
              border: "1px solid rgba(255, 171, 0, 0.2)",
            }}
          >
            <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-white/80">
              {CALCULATOR_CONFIG.resultCard.disclaimer}
            </p>
          </div>

          <Button
            size="lg"
            className="w-full rounded-xl text-lg h-16 border-0 shadow-lg hover:scale-[1.02] transition-transform text-white font-bold"
            style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
              boxShadow: "0 10px 40px rgba(255, 106, 0, 0.4)",
            }}
            onClick={() => {
              const params = new URLSearchParams({
                fromCity,
                toCity,
                area: String(area),
                rooms: String(rooms),
                fromFloor: String(fromFloor),
                toFloor: String(toFloor),
                fromElevator: String(fromElevator),
                toElevator: String(toElevator),
                packing: String(packing),
                assembly: String(assembly),
                cleaning: String(cleaning),
                decluttering: String(decluttering),
                noParking: String(noParking),
                estimatedMin: String(estimate?.min || 0),
                estimatedMax: String(estimate?.max || 0),
                originalPrice: String(estimate?.fakeOriginalPrice || 0),
              });
              navigate(`/umzug-anfragen?${params.toString()}`);
            }}
          >
            {CALCULATOR_CONFIG.resultCard.ctaText}
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      )}

      {!estimate && (
        <div
          className="rounded-3xl p-10 text-center"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: "rgba(255, 106, 0, 0.1)" }}
          >
            <Calculator className="h-10 w-10 text-orange-400" />
          </div>
          <h4 className="font-bold text-lg text-white mb-2">
            {CALCULATOR_CONFIG.emptyState.title}
          </h4>
          <p className="text-white/60">
            {CALCULATOR_CONFIG.emptyState.description}
          </p>
        </div>
      )}
    </>
  );
}
