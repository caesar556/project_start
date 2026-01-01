"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  MapPin,
  Star,
  Settings,
  Menu,
  X,
  BarChart3,
  LifeBuoy,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useGlobalSettings } from "@/hooks/useGlobalSettings";

const menuItems = [
  { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  {
    path: "/dashboard/analytics",
    icon: BarChart3,
    label: "Analytics & Statistiken",
  },
  { path: "/dashboard/services", icon: Briefcase, label: "Leistungen" },
  { path: "/dashboard/cities", icon: MapPin, label: "Städte-Seiten" },
  { path: "/dashboard/testimonials", icon: Star, label: "Bewertungen" },
  {
    path: "/dashboard/settings",
    icon: Settings,
    label: "Globale Einstellungen",
  },
];

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { settings } = useGlobalSettings();
  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white text-gray-900 shadow-md"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 w-64 transition-transform duration-200",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "bg-white dark:bg-zinc-900 shadow-xl border-r dark:border-zinc-800",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-zinc-800">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 text-center">
              {settings?.companyName}
            </h1>
            <p className="text-md text-gray-500 dark:text-zinc-400 text-center">Admin Panel</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.path ||
                (item.path !== "/dashboard" && pathname.startsWith(item.path));

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                    isActive
                      ? "bg-[#FF6A00] text-white shadow-md shadow-orange-500/20"
                      : "text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-100",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Support */}
          <div className="p-4 border-t border-gray-200 dark:border-zinc-800">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://albawab-marketing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] hover:bg-[#FF6A00]/20 transition"
                >
                  <LifeBuoy className="h-5 w-5" />
                  <span className="text-sm font-medium">Support</span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                Kontaktieren Sie den technischen Support
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-zinc-800 text-xs text-center text-gray-400 dark:text-zinc-500">
            © 2025 Richard Umzug
            <div className="mt-1">
              Entwickelt von{" "}
              <a
                href="https://albawab-marketing.com"
                target="_blank"
                className="text-[#FF6A00] hover:underline"
              >
                Albawab Alshamil Marketing
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
