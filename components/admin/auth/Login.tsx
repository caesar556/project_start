"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Lock } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch("/api/auth/check")
      .then((res) => {
        if (res.ok) router.replace("/dashboard");
      })
      .catch(() => {});
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success("Erfolgreich angemeldet");
      router.push("/dashboard");
    } catch {
      toast.error("Anmeldung fehlgeschlagen", {
        description: "Username oder Passwort ist ungültig.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1628] p-4">
      <div className="w-full max-w-md">
        <div className="bg-[#1A2332] rounded-2xl p-8 shadow-xl">

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6A00]/20 mb-4">
              <Lock className="h-8 w-8 text-[#FF6A00]" />
            </div>
            <h1 className="text-2xl font-bold text-white">Richard Umzug</h1>
            <p className="text-white/60 mt-2">Internes Verwaltungsportal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white/80">
                Username
              </Label>
              <Input
                id="namr"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="username"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/80">
                Passwort
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white font-semibold py-3"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Anmelden...
                </>
              ) : (
                "Anmelden"
              )}
            </Button>
          </form>
        </div>

        <p className="text-center text-white/40 text-sm mt-6">
          Entwickelt von{" "}
          <a
            href="https://albawab-marketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6A00] hover:underline"
          >
            Albawab Alshamil Marketing
          </a>
        </p>
      </div>
    </div>
  );
}
