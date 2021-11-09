export interface PokemonItem {
  id: any;
  name: string;
}
export interface PokemonState {
  pokemonItems: PokemonItem[];
  selectedPokemon: PokemonItem;
}

const initialState = {
  pokemonItems: [
    {
      id: 1,
      name: 'hello',
    },
  ],
  selectedPokemon: {
    id: 1,
    name: 'hello',
  },
};

export const pokemonReducers = (state: PokemonState = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_POKE': {
      let newId = state.pokemonItems[state.pokemonItems.length - 1].id + 1;
      let newPokemon = {
        id: newId,
        name: action.payload,
      };
      return { ...state, pokemonItems: [...state.pokemonItems, newPokemon], selectedPokemon: state.selectedPokemon };
    }
    case 'DELETE_POKE': {
      return {
        ...state,
        pokemonItems: state.pokemonItems.filter((item) => item.id !== action.payload),
        selectedPokemon: state.selectedPokemon,
      };
    }
    case 'SELECT_POKE': {
      return {
        ...state,
        pokemonItems: state.pokemonItems,
        selectedPokemon: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
