"use client";

import { Bell, LifeBuoy, Search, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminTopBar() {
  return (
    <header className="h-16 px-4 lg:px-8 flex items-center justify-between gap-4 border-b bg-white sticky top-0 z-30 shadow-sm">
      <div className="flex items-center flex-1 max-w-md relative group hidden md:flex">
        <Search className="absolute left-3 h-4 w-4 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
        <Input
          placeholder="Anfragen suchen..."
          className="pl-10 h-10 bg-gray-50 border-gray-100 focus:bg-white focus:border-orange-500 transition-all rounded-full"
        />
      </div>

      <div className="flex items-center gap-2 md:gap-4 ml-auto">
        <a
          href="https://albawab-marketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 text-orange-600 text-sm font-medium hover:bg-orange-100 transition"
        >
          <LifeBuoy className="w-4 h-4" />
          <span className="hidden sm:inline">Support</span>
        </a>

        <Button variant="ghost" size="icon" className="relative text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-full">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white" />
        </Button>

        <div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 p-1 pr-2 hover:bg-gray-50 rounded-full transition-all">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                AD
              </div>
              <span className="text-sm font-semibold text-gray-700 hidden sm:inline-block">Admin</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl border-gray-100 shadow-xl">
            <DropdownMenuLabel className="font-bold text-gray-900">Mein Konto</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer gap-2 focus:bg-orange-50 focus:text-orange-600">
              <User className="h-4 w-4" /> Profil
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer gap-2 focus:bg-orange-50 focus:text-orange-600">
              <LogOut className="h-4 w-4" /> Abmelden
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}