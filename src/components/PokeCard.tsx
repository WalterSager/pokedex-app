import React from "react";
import type { PokemonListItem } from "../types/pokemon";

type Props = { item: PokemonListItem; onClick: (idOrName: string | number) => void; };

export default function PokemonCard({ item, onClick }: Props) {
  return (
    <button
      className="p-3 rounded-xl shadow hover:shadow-md bg-white dark:bg-zinc-900 transition grid place-items-center"
      onClick={() => onClick(item.id)}
      aria-label={`Ver detalles de ${item.name}`}
    >
      <img src={item.image} alt={item.name} width={196} height={196} loading="lazy" />
      <div className="mt-2 text-sm capitalize font-medium">{item.name}</div>
      <div className="text-xs text-zinc-500">#{item.id}</div>
    </button>
  );
}
