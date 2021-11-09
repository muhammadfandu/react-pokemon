import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POKEMON_DETAIL } from '../../graphql/queries';
import { addPokemon } from '../../redux/actions';
import { PokemonItem, PokemonState } from '../../redux/reducers';

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

function PokemonDetail() {
  const dispatch = useDispatch();
  const pokemonState = useSelector<PokemonState, PokemonState['selectedPokemon']>((state) => state.selectedPokemon);
  const [pokemon, setPokemon] = useState<Pokemon>();
  let typesId = 0;
  let movesId = 0;
  let abilitiesId = 0;

  const { error, loading, data } = useQuery(LOAD_POKEMON_DETAIL, { variables: { name: pokemonState.name } });
  useEffect(() => {
    if (data) {
      setPokemon(data.pokemon);
    }
  }, [data]);

  const onAddPokemon = (pokemon: PokemonItem) => {
    if (Math.round(Math.random()) == 1) {
      let nickname = prompt('Successfully catched, give your pokemon a cool nickname:', '');
      let name = '';
      if (nickname != null && nickname != '') name = nickname;
      dispatch(addPokemon(name, pokemon));
    } else {
      alert('Failed to catch, try again later');
    }
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <h1>Pokemon Detail</h1>
        <hr />
        <div className="d-flex align-items-center m-5">
          <strong>Loading...</strong>
          <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
      </div>
    );
  } else {
    if (pokemon) {
      return (
        <div className="container mt-4">
          <div className="pokemon-app">
            <h1>Pokemon Detail</h1>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-2" key={pokemon.id}>
                  <div className="row">
                    <div className="col-md-4 col-xs-12">
                      <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={pokemonState.image} />
                      </Card>
                    </div>
                    <div className="card-body col-md-8 col-xs-12 p-4">
                      <div className="row">
                        <div className="col-sm-8 col-xs-12">
                          <h1 className="text-default mb-4">{pokemon.name}</h1>
                          <p>Types:</p>
                          <ul className="list-group">
                            {pokemon.types.map((types) => {
                              typesId++;
                              return (
                                <li className="list-group-item" key={typesId}>
                                  {types.type.name}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="col-sm-8 col-xs-12">
                          <div className="d-grid gap-2">
                            <button
                              className="btn btn-success float-end  mt-4"
                              onClick={() => onAddPokemon(pokemonState)}
                            >
                              Catch (50% chance)
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-2">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Pokemon Abilites</Accordion.Header>
                    <Accordion.Body>
                      {pokemon.abilities.map((abilities) => {
                        abilitiesId++;
                        return (
                          <li className="list-group-item" key={abilitiesId}>
                            {abilities.ability.name}
                          </li>
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Pokemon Moves</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        <div className="col-md-12">
                          {pokemon.moves.map((moves) => {
                            movesId++;
                            return (
                              <button type="button" className="btn btn-secondary m-1" key={movesId}>
                                {' '}
                                {moves.move.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="container mt-4"></div>;
    }
  }
}

export default PokemonDetail;
