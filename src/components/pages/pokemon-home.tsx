import { PokemonItem, PokemonState } from '../../redux/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { DiaryForm } from '../diary-form/DiaryForm';
import { addPokemon, deletePokemon, selectPokemon } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { LOAD_POKEMON } from '../../graphql/queries';
import { useEffect, useState } from 'react';

function PokemonHome() {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);

  const { error, loading, data } = useQuery(LOAD_POKEMON);
  useEffect(() => {
    if (data) {
      setPokemons(data.pokemons.results);
    }
  }, [data]);

  const onAddPokemon = (pokemons: string) => {
    dispatch(addPokemon(pokemons));
  };

  const onDeletePokemon = (id: any) => {
    dispatch(deletePokemon(id));
  };

  const onSelectPokemon = (pokemon: PokemonItem) => {
    dispatch(selectPokemon(pokemon));
  };

  console.log(pokemons);

  return (
    <div className="container mt-4">
      <div className="pokemon-app">
        <h1>Explore Pokemon</h1>
        <hr />
        <ul>
          {pokemons.map((pokemon: any) => {
            return (
              <li key={pokemon.id}>
                {pokemon.name}{' '}
                <Link to="/detail" className="btn btn-primary" onClick={() => onSelectPokemon(pokemon)}>
                  Detail
                </Link>{' '}
                <button className="btn btn-danger" onClick={() => onDeletePokemon(pokemon.id)}>
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PokemonHome;
