export type PokemonListItem = {
  id: number;
  name: string;
  image: string;
};

export type PokemonDetails = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  stats: { name: string; base: number }[];
  sprites: { front: string; artwork: string };
};
