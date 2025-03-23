import { Artwork } from "@/data/arts";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: Artwork[];
}

export const ArtworkCard = ({ artwork }: { artwork: Artwork }) => {
  return (
    <Link href={`/details/${artwork.id}`} className="group relative">
      <div className="overflow-hidden bg-card">
        <Image
          src={artwork.image}
          alt={artwork.name}
          className="object-cover transition-transform group-hover:scale-105"
          width={400}
          height={400}
        />
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium line-clamp-2">{artwork.name}</h3>
          </div>
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <span>{artwork.artist}</span>
            <span>•</span>
            <span>{artwork.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function ArtworkGrid({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 p-6">
      {data.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}
