import {ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})
function App() {
  return (
   <ApolloProvider client={client} >
      <div className="App">
       <h1>Hello world</h1>
      </div>
   </ApolloProvider>
  );
}

export default App;
