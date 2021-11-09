import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POKEMON_DETAIL } from '../../graphql/queries';
import { addPokemon } from '../../redux/actions';
import swal from 'sweetalert';
import { PokemonState, Pokemon, PokemonItem } from '../../redux/interfaces';
import { css } from '@emotion/css';

function PokemonDetail() {
  const dispatch = useDispatch();
  const pokemonState = useSelector<PokemonState, PokemonState['selectedPokemon']>((state) => state.selectedPokemon);
  const myPokemons = useSelector<PokemonState, PokemonState['pokemonItems']>((state) => state.pokemonItems);
  const [pokemon, setPokemon] = useState<Pokemon>();
  let typesId = 0;
  let movesId = 0;
  let abilitiesId = 0;

  const { loading, data } = useQuery(LOAD_POKEMON_DETAIL, { variables: { name: pokemonState.name } });
  useEffect(() => {
    if (data) {
      setPokemon(data.pokemon);
    }
  }, [data]);

  const onAddPokemon = (pokemon: PokemonItem) => {
    if (Math.round(Math.random()) === 1) {
      swal('Success!', 'You got the pokemon', 'success').then((value) => {
        let isValid = false;
        let nicknameExist = false;
        let name = '';

        while (!isValid) {
          let nickname = prompt('Give your pokemon a cool nickname:', '');
          if (nickname !== null && nickname !== '') name = nickname;

          myPokemons.map((pokemon: any) => {
            if (pokemon.nickname === nickname) {
              nicknameExist = true;
              alert(nickname + ' already used, please insert another nickname');
            }
          });

          nicknameExist ? (nicknameExist = false) : (isValid = true);
        }
        if (isValid) dispatch(addPokemon(name, pokemon));
      });
    } else {
      swal('Failed!', 'The pokemon got away!', 'warning');
    }
  };

  let title: any;
  let btnCatch: any;
  if (pokemonState.nickname !== undefined && pokemonState.nickname !== '') {
    title = (
      <h1 className="text-default mb-4">
        {pokemonState.nickname}
        <small className={css({ color: '#ababab' })}> ({pokemonState.name})</small>
      </h1>
    );
    btnCatch = <button className="btn btn-success float-end  mt-4">This is your pokemon</button>;
  } else {
    title = <h1 className="text-default mb-4">{pokemonState.name}</h1>;
    btnCatch = (
      <button className="btn btn-success float-end  mt-4" onClick={() => onAddPokemon(pokemonState)}>
        Catch (50% chance)
      </button>
    );
  }

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
                          <div>{title}</div>
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
                          <div className="d-grid gap-2">{btnCatch}</div>
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
