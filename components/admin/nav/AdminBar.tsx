"use client";

import { Bell, LifeBuoy, Search, User, LogOut, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminTopBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-16 px-4 lg:px-8 flex items-center justify-between gap-4 border-b bg-white dark:bg-zinc-900 dark:border-zinc-800 sticky top-0 z-30 shadow-sm transition-colors duration-300">
      <div className="flex items-center flex-1 max-w-md relative group hidden md:flex">
        <Search className="absolute left-3 h-4 w-4 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
        <Input
          placeholder="Anfragen suchen..."
          className="pl-10 h-10 bg-gray-50 dark:bg-zinc-800 border-gray-100 dark:border-zinc-700 focus:bg-white dark:focus:bg-zinc-900 focus:border-orange-500 transition-all rounded-full dark:text-zinc-100"
        />
      </div>

      <div className="flex items-center gap-2 md:gap-4 ml-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-zinc-800 rounded-full"
        >
          {mounted && theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <a
          href="https://albawab-marketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 dark:bg-zinc-800 text-orange-600 dark:text-orange-400 text-sm font-medium hover:bg-orange-100 dark:hover:bg-zinc-700 transition"
        >
          <LifeBuoy className="w-4 h-4" />
          <span className="hidden sm:inline">Support</span>
        </a>

        <Button variant="ghost" size="icon" className="relative text-gray-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-zinc-800 rounded-full">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900" />
        </Button>

        <div className="h-8 w-px bg-gray-200 dark:bg-zinc-800 mx-1 hidden sm:block" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 p-1 pr-2 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-full transition-all">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                AD
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-zinc-300 hidden sm:inline-block">Admin</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl border-gray-100 dark:border-zinc-800 dark:bg-zinc-900 shadow-xl">
            <DropdownMenuLabel className="font-bold text-gray-900 dark:text-zinc-100">Mein Konto</DropdownMenuLabel>
            <DropdownMenuSeparator className="dark:bg-zinc-800" />
            <DropdownMenuItem className="cursor-pointer gap-2 focus:bg-orange-50 dark:focus:bg-zinc-800 focus:text-orange-600 dark:focus:text-orange-400">
              <User className="h-4 w-4" /> Profil
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer gap-2 focus:bg-orange-50 dark:focus:bg-zinc-800 focus:text-orange-600 dark:focus:text-orange-400">
              <LogOut className="h-4 w-4" /> Abmelden
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}