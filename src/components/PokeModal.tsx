import React, { useEffect, useRef } from "react";
import type { PokemonDetails } from "../types/pokemon";

type Props = {
  open: boolean;
  onClose: () => void;
  loading: boolean;
  error: string | null;
  data: PokemonDetails | null;
};

export default function PokemonModal({ open, onClose, loading, error, data }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = dialogRef.current!;
    if (open && !dlg.open) dlg.showModal();
    if (!open && dlg.open) dlg.close();
  }, [open]);

  return (
    <dialog ref={dialogRef} className="rounded-2xl p-0 backdrop:bg-black/50 w-11/12 max-w-xl" onClose={onClose}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold capitalize">{data?.name ?? "Detalles"}</h2>
          <button className="text-sm px-2 py-1 border rounded" onClick={onClose} aria-label="Cerrar">Cerrar</button>
        </div>

        {loading && <p>Cargando...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {!loading && !error && data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src={data.sprites.artwork || data.sprites.front}
              alt={data.name}
              className="w-full h-48 object-contain"
            />
            <div className="text-sm">
              <p><b>ID:</b> {data.id}</p>
              <p><b>Altura:</b> {data.height}</p>
              <p><b>Peso:</b> {data.weight}</p>
              <p><b>Tipos:</b> {data.types.join(", ")}</p>
              <p><b>Habilidades:</b> {data.abilities.join(", ")}</p>
              <div className="mt-2">
                <b>Stats:</b>
                <ul className="list-disc list-inside">
                  {data.stats.map(s => <li key={s.name}>{s.name}: {s.base}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}
