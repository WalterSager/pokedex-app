import { http } from "../utils/http";
import type { PokemonDetails, PokemonListItem } from "../types/pokemon";


type RawList = {
  results: { name: string; url: string }[];
  next: string | null;
  previous: string | null;
};

type RawPokemon = {
  id: number; name: string; height: number; weight: number;
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: {
    front_default: string | null;
    other?: { ["official-artwork"]?: { front_default: string | null } };
  };
};

const extractId = (url: string) => Number(url.split("/").filter(Boolean).pop());

const toListItem = (name: string, id: number): PokemonListItem => ({
  id,
  name,
  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
});

export async function getPokemonPage(offset = 0, limit = 24): Promise<PokemonListItem[]> {
  const data = await http.get<RawList>(`/pokemon?offset=${offset}&limit=${limit}`);
  return data.results.map(({ name, url }) => toListItem(name, extractId(url)));
}

export async function getPokemonDetails(nameOrId: string | number): Promise<PokemonDetails> {
  const data = await http.get<RawPokemon>(`/pokemon/${nameOrId}`);
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map(a => a.ability.name),
    types: data.types.map(t => t.type.name),
    stats: data.stats.map(s => ({ name: s.stat.name, base: s.base_stat })),
    sprites: {
      front: data.sprites.front_default ?? "",
      artwork: data.sprites.other?.["official-artwork"]?.front_default ?? "",
    },
  };
}
