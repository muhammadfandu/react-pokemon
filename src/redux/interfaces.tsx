export interface Abilities {
  ability: Ability;
}

export interface Ability {
  name: String;
}

export interface Moves {
  move: Move;
}

export interface Move {
  name: String;
}

export interface Types {
  type: Type;
}

export interface Type {
  name: String;
}

export interface Pokemon {
  id: number;
  name: String;
  abilities: Abilities[];
  moves: Moves[];
  types: Types[];
  message: String;
  status: Boolean;
}

export interface MyPokemon {
  id: any;
  nickname: string;
  name: string;
  image: string;
  url: string;
}

export interface PokemonItem {
  id: any;
  nickname: string;
  name: string;
  image: string;
  url: string;
}

export interface PokemonState {
  pokemonItems: MyPokemon[];
  selectedPokemon: PokemonItem;
}
