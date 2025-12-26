import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-dvh bg-black/90">
      <Spinner className="size-8 text-orange-500" />
    </div>
  );
}
