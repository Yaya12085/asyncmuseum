"use client";
import { links } from "@/data/links";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="sticky top-0 z-50 px-4 py-3 flex items-center justify-between bg-white border-b h-16">
      <Link href="/" className="text-xl md:text-2xl font-bold">
        AsyncMuseum
      </Link>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-[#100de0] transition-colors",
                isActive(link.href) && "text-[#100de0]"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-4">
        <Button size="sm">Ticket</Button>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden z-50"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white p-6 md:hidden">
          <ul className="flex flex-col gap-4 mb-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-lg font-medium block py-2 hover:text-[#100de0]",
                    isActive(link.href) && "text-[#100de0]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="w-full">Ticket</Button>
        </div>
      )}
    </div>
  );
}
