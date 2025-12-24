"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAVIGARE_PRINCIPALA, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg font-heading">e</span>
              </div>
            </div>
            <span className={cn(
              "text-xl font-heading font-semibold transition-colors",
              isScrolled ? "text-brown-800" : "text-brown-800"
            )}>
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGARE_PRINCIPALA.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  pathname === item.href
                    ? "bg-cream-200 text-brown-800"
                    : "text-brown-600 hover:text-brown-800 hover:bg-cream-100"
                )}
              >
                {item.nume}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-brown-600 to-brown-700 rounded-full text-sm font-medium hover:from-brown-700 hover:to-brown-800 transition-all duration-200 shadow-lg shadow-brown-600/20 hover:shadow-xl hover:shadow-brown-600/30 hover:-translate-y-0.5"
              style={{ color: '#FFFFFF' }}
            >
              Cere ofertă
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-cream-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={cn(
                  "w-full h-0.5 bg-brown-800 rounded-full transition-all duration-300 origin-center",
                  isMobileMenuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-brown-800 rounded-full transition-all duration-300",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-brown-800 rounded-full transition-all duration-300 origin-center",
                  isMobileMenuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-cream-200">
            <div className="flex flex-col gap-1">
              {NAVIGARE_PRINCIPALA.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                    pathname === item.href
                      ? "bg-cream-200 text-brown-800"
                      : "text-brown-600 hover:text-brown-800 hover:bg-cream-100"
                  )}
                >
                  {item.nume}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-cream-200">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-brown-600 to-brown-700 rounded-xl text-center font-medium hover:from-brown-700 hover:to-brown-800 transition-all duration-200"
                  style={{ color: '#FFFFFF' }}
                >
                  Cere ofertă
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

