import { useSelector } from 'react-redux';
import { PokemonState } from '../../redux/reducers';

function PokemonDetail() {
  const pokemon = useSelector<PokemonState, PokemonState['selectedPokemon']>((state) => state.selectedPokemon);

  return (
    <div className="container mt-4">
      <div className="pokemon-app">
        <h1>Pokemon List</h1>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <table>
              <tr>
                <td>Name</td>
                <td> : </td>
                <td>{pokemon.name}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
