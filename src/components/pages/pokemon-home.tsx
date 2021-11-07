import { PokemonState } from '../../redux/reducers';
import { useSelector, useDispatch } from 'react-redux';
import DiaryForm from '../diary-form/DiaryForm';

function PokemonHome() {
  const pokemons = useSelector<PokemonState, PokemonState['pokemonItems']>((state) => state.pokemonItems);
  const dispatch = useDispatch();
  console.log(pokemons);

  const addPokemon = (pokemons: string) => {
    dispatch({ type: 'ADD_POKE', payload: pokemons });
  };

  return (
    <div className="container mt-4">
      <div className="diary-app">
        <h1>Dear Diary</h1>
        <DiaryForm />
      </div>
    </div>
  );
}

export default PokemonHome;
