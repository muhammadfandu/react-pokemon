import { PokemonState } from '../../redux/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { DiaryForm } from '../diary-form/DiaryForm';
import { addPokemon } from '../../redux/actions';

function PokemonHome() {
  const pokemons = useSelector<PokemonState, PokemonState['pokemonItems']>((state) => state.pokemonItems);
  const dispatch = useDispatch();
  console.log(pokemons);

  const onAddPokemon = (pokemons: string) => {
    dispatch(addPokemon(pokemons));
  };

  return (
    <div className="container mt-4">
      <div className="diary-app">
        <h1>Dear Diary</h1>
        <DiaryForm addPokemon={onAddPokemon} />
        <hr />
        <ul>
          {pokemons.map((pokemon) => {
            return <li key={pokemon}>{pokemon}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default PokemonHome;
