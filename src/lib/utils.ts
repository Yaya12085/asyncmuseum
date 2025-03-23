import { arts } from "@/data/arts";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getArtwork(artId: string) {
  return arts.find((artwork) => artwork.id === parseInt(artId));
}
