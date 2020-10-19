const graphql = require('graphql-tools');
const { resolvers } = require('./resolvers');

const typeDefs = `
type Query {
  comentarios:[Comentarios]
  totalcomentarios: Int
  comentarios_buscar(usuario: String):[Comentarios]
}

type Comentarios {
  usuario: String,
  mensaje: String
}
`;




module.exports ={
    schema:graphql.makeExecutableSchema({
        typeDefs,
        resolvers,
    })
}