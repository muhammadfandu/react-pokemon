import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import Main from './Main';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const link = from([new HttpLink({ uri: 'https://graphql-pokeapi.graphcdn.app/' })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Main />
      </Router>
    </ApolloProvider>
  );
}

export default App;
