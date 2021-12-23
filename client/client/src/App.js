import BookList from './components/BookList.js';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


function App() {
  return (
    <ApolloProvider client={client}>
    <div id="main">
      <header className="GraphQL">
      <h1>Sam's Book List</h1>
      <BookList />
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
