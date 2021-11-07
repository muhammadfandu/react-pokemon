import { BrowserRouter as Router } from 'react-router-dom';
import { PokemonState } from '../redux/reducers';
import { useSelector } from 'react-redux';

import './App.scss';
import Main from './Main';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
