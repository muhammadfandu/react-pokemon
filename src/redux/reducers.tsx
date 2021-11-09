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

const initialState = {
  pokemonItems: [
    {
      id: 0,
      nickname: '',
      name: '',
      image: '',
      url: '',
    },
  ],
  selectedPokemon: {
    id: 0,
    nickname: '',
    name: '',
    image: '',
    url: '',
  },
};

export const pokemonReducers = (state: PokemonState = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_POKE': {
      let newId = state.pokemonItems[state.pokemonItems.length - 1].id + 1;
      let newPokemon = {
        id: newId,
        nickname: action.nickname,
        name: action.payload.name,
        image: action.payload.image,
        url: action.payload.url,
      };

      console.log(newPokemon);
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
