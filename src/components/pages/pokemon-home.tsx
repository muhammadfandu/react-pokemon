import { PokemonItem } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { deletePokemon, selectPokemon } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { LOAD_POKEMON } from '../../graphql/queries';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const random = Math.floor(Math.random() * 1000);

function PokemonHome() {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);

  const { error, loading, data } = useQuery(LOAD_POKEMON, { variables: { limit: 16, offset: random } });
  useEffect(() => {
    if (data) {
      setPokemons(data.pokemons.results);
    }
  }, [data]);

  const onSelectPokemon = (pokemon: PokemonItem) => {
    dispatch(selectPokemon(pokemon));
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <h1>Explore Pokemon</h1>
        <hr />
        <div className="d-flex align-items-center m-5">
          <strong>Loading...</strong>
          <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mt-4">
        <div className="pokemon-app">
          <h1>Explore Pokemon</h1>
          <hr />
          <div className="row">
            {pokemons.map((pokemon: any) => {
              return (
                <div className="col-md-6">
                  <div className="card mb-2" key={pokemon.id} onClick={() => onSelectPokemon(pokemon)}>
                    <div className="row">
                      <div className="col-md-4 col-xs-12">
                        <Card style={{ width: '100%' }}>
                          <Card.Img variant="top" src={pokemon.image} />
                        </Card>
                      </div>
                      <div className="card-body col-md-8 col-xs-12 p-4">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="text-default">{pokemon.name}</h2>
                            <p>Owned: 0</p>
                          </div>
                          <div className="col-sm-4">
                            <Link to="/detail" className="btn btn-primary float-end">
                              Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonHome;
