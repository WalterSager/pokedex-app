import { useEffect, useState } from "react";
import { getPokemonDetails } from "../services/pokeapi";
import type { PokemonDetails } from "../types/pokemon";

export function usePokemonDetails(selected: string | number | null) {
  const [data, setData] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    if (!selected) return;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const details = await getPokemonDetails(selected);
        if (active) setData(details);
      } catch (e: any) {
        if (active) setError(e.message || "Error cargando detalles");
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => { active = false; };
  }, [selected]);

  return { data, loading, error };
}
