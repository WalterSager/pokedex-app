import React, { useCallback, useState } from "react";
import { usePaginatedPokemon } from "./hooks/paginatePuchamon";
import { usePokemonDetails } from "./hooks/detallesPuchamon";
import PokemonGrid from "./components/PokeGrid";
import PokemonModal from "./components/PokeModal";

export default function App() {
  const { items, page, setPage, loading, error } = usePaginatedPokemon(72);
  const [selected, setSelected] = useState<string | number | null>(null);
  const { data, loading: loadingDetails, error: errorDetails } = usePokemonDetails(selected);

  const onSelect = useCallback((idOrName: string | number) => setSelected(idOrName), []);
  const onClose = useCallback(() => setSelected(null), []);
  const onPrev = () => setPage(p => Math.max(0, p - 1));
  const onNext = () => setPage(p => p + 1);

  return (
    <main className="max-w-6xl mx-auto p-4">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">POKEDEX</h1>
        <a
          className="text-sm opacity-70 hover:opacity-100"
          href="https://dev-sager.site"
          target="_blank"
          rel="noreferrer"
        >
          Walter Sager
        </a>
      </header>

      <div className="mb-6 p-4 rounded shadow">
        <p className="text-white">
          Este es un ejercicio para aprender un poco de React, TypeScript y TailwindCSS consumiendo la
          API pública de{" "}
          <a
            className="underline"
            href="https://pokeapi.co/"
            target="_blank"
            rel="noreferrer"
          >
            PokeAPI
          </a>
        </p>
      </div>

      <PokemonGrid
        items={items}
        loading={loading}
        error={error}
        onSelect={onSelect}
        page={page}
        onPrev={onPrev}
        onNext={onNext}
      />

      <PokemonModal
        open={selected !== null}
        onClose={onClose}
        loading={loadingDetails}
        error={errorDetails}
        data={data}
      />
    </main>
  );
}
