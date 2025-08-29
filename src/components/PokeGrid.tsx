import React from "react";
import PokemonCard from "./PokeCard";
import type { PokemonListItem } from "../types/pokemon";

type Props = {
  items: PokemonListItem[];
  loading: boolean;
  error: string | null;
  onSelect: (idOrName: string | number) => void;
  page: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function PokemonGrid({ items, loading, error, onSelect, page, onPrev, onNext }: Props) {
  if (loading) return <p className="p-4">Cargando...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;

  const mapeo = items.map(p => (
          <PokemonCard key={p.id} item={p} onClick={onSelect} />
        ))

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
        {mapeo}
      </div>

      <div className="flex items-center justify-center gap-3">
        <button className="px-3 py-1 rounded border" onClick={onPrev} disabled={page === 0}>Anterior</button>
        <span className="text-sm">Página {page + 1}</span>
        <button className="px-3 py-1 rounded border" onClick={onNext}>Siguiente</button>
      </div>
    </div>
  );
}
