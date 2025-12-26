"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronRight,
  Globe,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";
import logo from "@/assets/logo.jpeg";
import HeaderBox from "../common/HeaderBox";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);


const COMPANY_INFO = {
  name: "Richard Umzug",
  phone: "004368120697499",
  email: "Info@RichardUmzug.at",
  whatsapp: "4368120697499",
  openingHours: "Mo-Sa: 07:00 - 20:00 Uhr",
  serviceArea: "Österreich & Europaweit",
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const desktopLinksRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (desktopLinksRef.current) {
      const links = desktopLinksRef.current.querySelectorAll("a");
      links.forEach((link) => {
        const split = new SplitText(link, { type: "chars" });
        gsap.from(split.chars, {
          opacity: 0,
          y: 80,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.3,
          ease: "power2.out",
        });
      });
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen && mobileLinksRef.current) {
      const links = mobileLinksRef.current.querySelectorAll("a");
      gsap.from(links, {
        opacity: 0,
        x: 80,
        stagger: 0.2,
        delay: 0.3,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-lg"
          : "bg-card shadow-sm"
      }`}
    >
      {/* Top Bar */}
      <div
        className="text-white"
        style={{ background: "linear-gradient(90deg, #0D1628, #1A2642)" }}
      >
        <div className="container mx-auto px-4 py-2.5 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:+${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 font-medium"
            >
              <div className="bg-yellow-900 rounded-full p-2 ">
                <Phone className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
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
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden lg:flex items-center gap-2 font-medium"
            >
              <div className="bg-gray-600 rounded-full p-2 ">
                <Mail className="h-4 w-4" />
              </div>
              {COMPANY_INFO.email}
            </a>
          </div>
          <div className="flex gap-4">
            <HeaderBox />
            <div className="hidden xl:flex items-center gap-2 font-medium">
              <Globe className="h-4 w-4" />
              {COMPANY_INFO.openingHours}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 ">
            <Image
              src={logo}
              alt={`${COMPANY_INFO.name} Umzugsfirma`}
              width={70}
              height={70}
              className="p-2 rounded-lg shadow-md"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold block">
                {COMPANY_INFO.name}
              </span>
              <span className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                {COMPANY_INFO.serviceArea}
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div ref={desktopLinksRef} className="hidden lg:flex gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-xl font-medium transition text-[16px] ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={mobileLinksRef} className="lg:hidden mt-4 bg-muted/30 rounded-2xl p-4 space-y-2">
            <div className="w-full flex justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-lg font-bold w-[40%] bg-violet-700 "
              >
                <Link href="/umzug-anfragen">
                  Jetzt Angebot anfordern
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-card"
              >
                {item.label}
                <ChevronRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
