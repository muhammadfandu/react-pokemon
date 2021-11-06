import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import NavigationBar from './navbar/navbar';
import PokemonDetail from './pages/pokemon-detail';
import PokemonHome from './pages/pokemon-home';
import PokemonMy from './pages/pokemon-my';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
