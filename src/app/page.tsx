"use client";

import ArtworkGrid from "@/components/artwork-grid";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { arts } from "@/data/arts";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredArts = arts.filter(
    (art) =>
      art.name.toLowerCase().includes(search.toLowerCase()) ||
      art.artist.toLowerCase().includes(search.toLowerCase()) ||
      art.country.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="https://images.metmuseum.org/CRDImages/dp/web-large/DP889132.jpg"
          alt="Museum hero"
          fill
          priority
          className="object-cover brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

        <Container className="relative z-10 h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Explorer l&apos;art
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Découvrez une collection de plus de 1000 œuvres d&apos;art
              interactive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 cursor-pointer"
                onClick={() => alert("En cours de développement")}
              >
                Réserver une visite
              </Button>
              <Button
                size="lg"
                variant="link"
                className="border-white text-white hover:bg-white/20 cursor-pointer"
                onClick={() => router.push("/about")}
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Search and gallery section */}
      <Container className="py-8 md:py-12">
        <div className="sticky top-[64px] z-20 pt-2 pb-2 bg-white">
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Parcourez la collection
            </h2>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                Parcourez notre collection de plus de 1000 œuvres d&apos;art,
                objets d&apos;art et pièces historiques.
              </span>
              <div className="relative max-w-2xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Rechercher par artiste, titre ou pays..."
                  className="pl-10"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          {filteredArts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">
                Aucun résultat trouvé
              </h3>
              <p className="text-muted-foreground">
                Essayez d&apos;ajuster vos termes de recherche
              </p>
            </div>
          ) : (
            <ArtworkGrid data={filteredArts} />
          )}
        </div>
      </Container>
    </main>
  );
}
