"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Home, Package, Info, ShoppingBag, Phone, Menu, X } from "lucide-react";

const desktopLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const mobileLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Products", href: "/#products", icon: Package },
  { label: "Shop", href: "/shop", icon: ShoppingBag },
  { label: "About", href: "/about", icon: Info },
  { label: "Contact", href: "/#contact", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // 1. Setup traditional scroll tracking for styling the navbar
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. Setup IntersectionObserver for precise section tracking
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in the upper part of viewport
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveHash(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all sections with IDs
    const sections = document.querySelectorAll(
      "section[id], footer[id], div[id]",
    );
    sections.forEach((section) => observer.observe(section));

    // Handle initial hash check
    if (window.location.hash) {
      setActiveHash(window.location.hash.replace("#", ""));
    } else if (window.scrollY === 0) {
      setActiveHash("");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [pathname]); // Re-run when path changes

  const getIsActive = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.replace("/#", "");
      return pathname === "/" && activeHash === hash;
    }
    // Strict match for root so it doesn't stay active when on /about
    if (href === "/") {
      return pathname === "/" && !activeHash;
    }
    // For other paths
    return pathname.startsWith(href) && href !== "/";
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Smooth scrolling for "Home" button if already on Home page
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveHash(""); // reset active hash manually
      setMobileMenuOpen(false);
      return;
    }

    // Standard hash scrolling implementation for smooth movement
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const hash = href.replace("/", "");
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        // Update URL without jump
        window.history.pushState(null, "", hash);
      }
      setMobileMenuOpen(false);
      return;
    }

    // Default linking
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 
        Desktop: Wide Floating Pill Navigation 
        Mobile: Sleek Top Bar 
      */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:top-5 md:left-1/2 md:-translate-x-1/2 md:w-[95%] lg:w-[85%] md:max-w-6xl md:rounded-full ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b md:border border-stone-200/50"
            : "bg-white/70 md:bg-white/80 backdrop-blur-md md:shadow-md border-b md:border border-transparent md:border-stone-100"
        }`}
      >
        <div className="px-4 sm:px-6 md:px-5 lg:px-6">
          <div className="flex items-center justify-between h-16 md:h-[70px] gap-4">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-[#296B46]/20 group-hover:ring-[#296B46]/60 group-hover:shadow-[0_0_15px_rgba(41,107,70,0.3)] transition-all duration-300">
                <Image
                  src="/images/circular-logo.png"
                  alt="Arun Bamboo Salt"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="hidden sm:block leading-none">
                <span className="font-extrabold text-base lg:text-lg text-stone-900 block group-hover:text-[#296B46] transition-colors">
                  Arun Bamboo Salt
                </span>
              </div>
            </Link>

            {/* Desktop Links - wider spacing */}
            <div className="hidden lg:flex flex-1 justify-center items-center">
              <div className="flex items-center gap-2 lg:gap-3 bg-stone-100/50 rounded-full p-1.5 border border-stone-200/50 shadow-inner">
                {desktopLinks.map((link) => {
                  const isActive = getIsActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`px-4 lg:px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ease-out select-none ${
                        isActive
                          ? "text-[#296B46] bg-white shadow-sm ring-1 ring-black/5 scale-[1.02]"
                          : "text-stone-500 hover:text-stone-900 hover:bg-black/5 hover:scale-[1.02]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Desktop CTA & Mobile Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/shop"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#296B46] to-[#1b4a30] text-white px-6 lg:px-8 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_4px_20px_rgba(41,107,70,0.4)] transition-all duration-300 active:scale-95 group"
              >
                <ShoppingBag className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-300" />
                Shop Now
              </Link>
              <button
                className="lg:hidden p-2 text-stone-600 hover:text-[#296B46] hover:bg-stone-100 rounded-full transition-colors active:scale-95"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 
        Mobile Fullscreen Overlay menu 
      */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className={`pt-24 px-6 space-y-3 transition-transform duration-500 delay-75 ${mobileMenuOpen ? "translate-y-0" : "translate-y-8"}`}
        >
          {desktopLinks.map((link) => {
            const isActive = getIsActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block text-2xl font-extrabold pb-4 border-b border-stone-100 transition-colors ${
                  isActive
                    ? "text-[#296B46]"
                    : "text-stone-700 hover:text-stone-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-6 pb-24">
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#296B46] text-white px-6 py-4 rounded-full font-bold w-full text-lg shadow-lg shadow-[#296B46]/30 active:scale-95 transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              Visit Shop
            </Link>
          </div>
        </div>
      </div>

      {/* 
        Mobile Bottom Tab Bar (YouTube App style)
      */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-stone-200/60 z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around px-2 h-[68px]">
          {mobileLinks.map((link) => {
            const isActive = getIsActive(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                className="flex flex-col items-center justify-center w-[20%] pt-1 pb-1 relative group"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {/* Active Indicator bar */}
                {isActive && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#296B46] rounded-b-full shadow-[0_2px_8px_rgba(41,107,70,0.5)] transition-all duration-300" />
                )}
                <div
                  className={`p-1.5 rounded-xl transition-all duration-300 ease-out ${isActive ? "scale-110 mb-0.5" : "text-stone-500 group-hover:text-stone-800 group-hover:scale-105 group-hover:bg-black/5"}`}
                >
                  <Icon
                    className={`w-[22px] h-[22px] transition-colors duration-300 ${isActive ? "text-[#296B46]" : ""}`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </div>
                <span
                  className={`text-[10px] font-bold tracking-tight transition-all duration-300 ${
                    isActive
                      ? "text-[#296B46] translate-y-0"
                      : "text-stone-500 -translate-y-0.5"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
