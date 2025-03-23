import { Artwork } from "@/data/arts";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
export default function Litebox({
  open,
  onClose,
  artwork,
}: {
  open: boolean;
  onClose: () => void;
  artwork: Artwork;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <XIcon className="h-6 w-6" />
      </Button>
      <div className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4">
        <Image
          src={artwork.image}
          alt={artwork.name}
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
          <h3 className="text-xl font-bold">{artwork.name}</h3>
          <p className="text-sm opacity-80">
            {artwork.artist}, {artwork.date}
          </p>
        </div>
      </div>
    </div>
  );
}
