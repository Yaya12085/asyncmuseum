"use client";
import { links } from "@/data/links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <div className="sticky top-0 z-50 h-16 px-4 flex items-center justify-between bg-white">
      <Link href="/" className="text-2xl font-bold">
        AsyncMuseum
      </Link>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn("text-sm", isActive(link.href) && "text-[#100de0]")}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <Button>Ticket</Button>
      </div>
    </div>
  );
}
