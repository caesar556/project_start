"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";
import logo from "@/assets/logo.jpeg";
import HeaderBox from "../common/HeaderBox";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalSettings } from "@/hooks/useGlobalSettings";
import { COMPANY_INFO } from "@/constants";
import NavBadge from "../common/navbar/NavBadge";

const serviceArea = "Österreich & Europaweit";

const navLinkVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { settings } = useGlobalSettings();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-lg"
          : "bg-card shadow-sm"
      }`}
    >
      <div
        className="text-white"
        style={{ background: "linear-gradient(90deg, #0D1628, #1A2642)" }}
      >
        <div className="container mx-auto px-4 py-2.5 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:+${settings?.phone || COMPANY_INFO.phone}`}
              className="flex items-center gap-2 font-medium"
            >
              <div className="bg-yellow-900 rounded-full p-2 ">
                <Phone className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline">
                {settings?.phone || COMPANY_INFO.phone}
              </span>
            </a>

            <a
              href={`https://wa.me/${settings?.whatsapp || COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium"
            >
              <div className="bg-green-900 rounded-full p-2 ">
                <MessageCircle className="h-4 w-4" />
              </div>
              <span className="hidden md:inline ">WhatsApp</span>
            </a>

            <a
              href={`mailto:${settings?.email || COMPANY_INFO.email}`}
              className="flex items-center gap-2 font-medium"
            >
              <div className="bg-gray-600 rounded-full p-2 ">
                <Mail className="h-4 w-4" />
              </div>
              <span className="hidden md:inline ">
                {settings?.email || COMPANY_INFO.email}
              </span>
            </a>
          </div>
          <div className="flex gap-4">
            <HeaderBox />
            <div className="hidden xl:flex items-center gap-2 font-medium">
              <Globe className="h-4 w-4" />
              {settings?.openingHours || COMPANY_INFO.openingHours}
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-4 focus:outline-none"
          >
            <Image
              src={logo}
              alt={`${settings?.companyName || COMPANY_INFO.name} Umzugsfirma`}
              width={80}
              height={80}
              className="
                p-2
                rounded-lg
                shadow-md
                transition-transform
                duration-300
                ease-out
                will-change-transform
                group-hover:scale-110
                group-focus-visible:scale-110
                active:scale-105
              "
              priority
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold block">
                {settings?.companyName || COMPANY_INFO.name}
              </span>
              <span className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                {serviceArea}
              </span>
            </div>
          </Link>

          <motion.div 
            className="hidden lg:flex gap-1"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.6
                }
              }
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div key={item.href} variants={navLinkVariants}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2.5 rounded-xl font-medium transition text-[16px] ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-muted/30 rounded-2xl p-4 space-y-2 overflow-hidden"
            >
              <NavBadge />
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-card"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
