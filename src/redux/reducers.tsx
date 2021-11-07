export interface PokemonState {
  pokemonItems: string[];
}

const initialState = {
  pokemonItems: ['notes'],
};

type Action = { type: 'ADD_POKE'; payload: string };

export const pokemonReducers = (state: PokemonState = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return { ...state, pokemonItems: [...state.pokemonItems, action.payload] };
    }
    default: {
      return state;
    }
  }
};
