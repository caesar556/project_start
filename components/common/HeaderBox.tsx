import { Globe } from "lucide-react";

type HeaderBoxProps = {
  bgClassName?: string;
};

export default function HeaderBox({
  bgClassName = "bg-white/10",
}: HeaderBoxProps) {
  return (
    <div
      className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full ${bgClassName}`}
    >
      <Globe className="h-3.5 w-3.5 text-orange-500" />
      <span className="text-xs font-semibold">Österreich & Europaweit</span>
    </div>
  );
}
