"use client";

import ArtworkGrid from "@/components/artwork-grid";
import Container from "@/components/container";
import { Input } from "@/components/ui/input";
import { arts } from "@/data/arts";
import { useState } from "react";
export default function Home() {
  const [search, setSearch] = useState("");

  const filteredArts = arts.filter((art) =>
    art.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    // debounce
    setTimeout(() => {
      setSearch(value);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Container className="flex-1 flex flex-col">
        <div className="flex flex-col gap-4 py-6">
          <h1 className="text-4xl font-bold">Rechercher</h1>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">
              Millions de œuvres, articles et collections.
            </span>
            <Input
              placeholder="Rechercher par..."
              className="max-w-2xl"
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="flex-1">
          <ArtworkGrid data={filteredArts} />
        </div>
      </Container>
    </div>
  );
}
