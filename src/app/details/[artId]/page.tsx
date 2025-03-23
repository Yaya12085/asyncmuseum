"use client";
import { ArtworkCard } from "@/components/artwork-grid";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { arts } from "@/data/arts";
import { ArrowLeft, Maximize, XIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

export default function ArtworkDetailsPage(props: {
  params: Promise<{ artId: string }>;
}) {
  const router = useRouter();
  const params = use(props.params);
  const { artId } = params;
  const artwork = arts.find((art) => art.id === Number(artId));
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!artwork) return <p>Artwork not found</p>;

  const relatedArtworks = arts
    .filter(
      (art) =>
        art.id !== artwork.id &&
        (art.artist === artwork.artist || art.country === artwork.country)
    )
    .slice(0, 4);

  return (
    <Container>
      <div className="mb-6 mt-4">
        <Button
          variant="ghost"
          size="icon"
          className="flex items-center gap-1 z-10 bg-black hover:bg-black/50 text-white cursor-pointer rounded-full"
          onClick={() => router.back()}
        >
          <ArrowLeft />
        </Button>
      </div>

      <div className="overflow-hidden border-0">
        <div className="flex flex-col lg:flex-row">
          <div className="relative lg:w-1/2 aspect-square lg:aspect-auto">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white"
              onClick={() => setLightboxOpen(true)}
            >
              <Maximize className="h-4 w-4" />
            </Button>
            <Image
              src={artwork.image}
              alt={artwork.name}
              fill
              priority
              className="object-contain cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            />
          </div>

          <div className="flex flex-col gap-6 p-6 lg:p-8 lg:w-1/2">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{artwork.country}</Badge>
                <Badge variant="outline">{artwork.date}</Badge>
              </div>
              <h1 className="text-3xl font-bold mt-3 md:text-4xl">
                {artwork.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                by {artwork.artist}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {artwork.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Artworks Section */}
      {relatedArtworks.length > 0 && (
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-6">Related Artworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedArtworks.map((relatedArt) => (
              <ArtworkCard key={relatedArt.id} artwork={relatedArt} />
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setLightboxOpen(false)}
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
      )}
    </Container>
  );
}
