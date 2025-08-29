import { useEffect, useState } from "react";
import { getPokemonPage } from "../services/pokeapi";
import type { PokemonListItem } from "../types/pokemon";

export function usePaginatedPokemon(pageSize = 24) {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const offset = page * pageSize;

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPokemonPage(offset, pageSize);
        if (active) setItems(data);
      } catch (e: any) {
        if (active) setError(e.message || "Error cargando pokémon");
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => { active = false; };
  }, [offset, pageSize]);

  return { items, page, setPage, loading, error };
}
