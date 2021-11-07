import { Routes, Route } from 'react-router-dom';
import NavigationBar from './navbar/navbar';
import PokemonDetail from './pages/pokemon-detail';
import PokemonHome from './pages/pokemon-home';
import PokemonMy from './pages/pokemon-my';

function Main() {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<PokemonHome />}></Route>
          <Route path="/detail" element={<PokemonDetail />}></Route>
          <Route path="/my" element={<PokemonMy />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Main;
