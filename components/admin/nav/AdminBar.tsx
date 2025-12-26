"use client";

import { Bell, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminTopBar() {
  return (
    <header className="h-16 px-4 lg:px-8 flex items-center justify-end gap-4 border-b bg-white">
      {/* Support */}
      <a
        href="https://albawab-marketing.com"
        target="_blank"
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 text-orange-600 text-sm font-medium hover:bg-orange-100 transition"
      >
        <LifeBuoy className="w-4 h-4" />
        <span className="hidden sm:inline">Support</span>
      </a>

      {/* Notification Icon */}
      <Button variant="ghost" size="icon" className="relative">
        <Bell className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-orange-500" />
      </Button>
    </header>
  );
}