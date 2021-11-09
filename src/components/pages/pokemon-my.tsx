import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { deletePokemon } from '../../redux/actions';
import { PokemonState } from '../../redux/reducers';

function PokemonMy() {
  const pokemons = useSelector<PokemonState, PokemonState['pokemonItems']>((state) => state.pokemonItems);
  const dispatch = useDispatch();
  let loading = false;

  const onRemovePokemon = (id: any, nickname: any) => {
    swal({
      title: 'Are you sure to release ' + nickname + '?',
      text: 'Once removed, you will not be able to recover this pokemon again!',
      icon: 'warning',
      buttons: ['Cancel', 'Release'],
      dangerMode: true,
    }).then((willDelete: any) => {
      if (willDelete) {
        dispatch(deletePokemon(id));

        swal('Poof! ' + nickname + ' has been released!', {
          icon: 'success',
        });
      } else {
        swal(nickname + ' is safe!');
      }
    });
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <h1>My Pokemons</h1>
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
          <h1>My Pokemon</h1>
          <hr />
          <div className="row">
            {pokemons.map((pokemon: any) => {
              return (
                <div className="col-md-6">
                  <div className="card mb-2" key={pokemon.id}>
                    <div className="row">
                      <div className="col-md-4 col-xs-12">
                        <Card style={{ width: '100%' }}>
                          <Card.Img variant="top" src={pokemon.image} />
                        </Card>
                      </div>
                      <div className="card-body col-md-8 col-xs-12 p-4">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="text-default">{pokemon.nickname}</h2>
                            <p className="text-default">({pokemon.name})</p>
                          </div>
                          <div className="col-sm-4">
                            <button
                              className="btn btn-danger"
                              onClick={() => onRemovePokemon(pokemon.id, pokemon.nickname)}
                            >
                              Release
                            </button>
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

export default PokemonMy;
