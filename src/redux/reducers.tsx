import { Action } from './actions';

export interface PokemonState {
  pokemonItems: string[];
}

const initialState = {
  pokemonItems: ['notes'],
};

export const pokemonReducers = (state: PokemonState = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_POKE': {
      return { ...state, pokemonItems: [...state.pokemonItems, action.payload] };
    }
    default: {
      return state;
    }
  }
};
