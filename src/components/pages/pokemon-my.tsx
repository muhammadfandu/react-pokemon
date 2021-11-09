import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { deletePokemon, selectPokemon } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { PokemonState, PokemonItem } from '../../redux/interfaces';

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

  const onSelectPokemon = (pokemon: PokemonItem) => {
    dispatch(selectPokemon(pokemon));
  };

  let greetingsElement: any;
  if (pokemons.length === 1) {
    greetingsElement = (
      <div className="mt-4">
        <div className="d-flex justify-content-center">
          <h4>Go catch your first pokemon</h4>
        </div>
      </div>
    );
  }

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
            {greetingsElement}
            {pokemons.map((pokemon: any) => {
              if (pokemon.id > 0) {
                return (
                  <div className="col-md-6" key={pokemon.id}>
                    <div className="card mb-2">
                      <div className="row">
                        <div className="col-md-4 col-xs-12 ">
                          <div className="d-flex h-100">
                            <Card style={{ width: '100%' }} className=" justify-content-center align-self-center">
                              <Card.Img variant="top" src={pokemon.image} />
                            </Card>
                          </div>
                        </div>
                        <div className="card-body col-md-8 col-xs-12 p-4">
                          <div className="row">
                            <div className="col-sm-12">
                              <h2 className="text-default">{pokemon.nickname}</h2>
                              <p className="text-default">({pokemon.name})</p>
                            </div>
                            <div className="col-sm-12">
                              <Link
                                to="/detail"
                                className="btn btn-primary my-1 me-1"
                                onClick={() => onSelectPokemon(pokemon)}
                              >
                                Detail
                              </Link>
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
              } else {
                return <div></div>;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonMy;
