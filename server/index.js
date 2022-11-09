const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema/schema');
const {resolvers} = require('./resolver/resolver');
 
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) =>{
    console.log(`Your api is running at: ${url}`)
})