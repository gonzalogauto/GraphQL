const express = require('express')
const app = express()
const port = 3000
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const { comentarios } = require('./data.json');

var schema = buildSchema(`
  type Query {
    comentarios:[Comentarios]
    totalcomentarios: Int
    comentarios_buscar(usuario: String):[Comentarios]
  }

  type Comentarios {
    usuario: String,
    mensaje: String
  }
`);

var root = { 
    comentarios: () => comentarios,
    totalcomentarios:()=>comentarios.length,
    comentarios_buscar:(args)=>{
        let usuario=args.usuario;
        return comentarios.filter(element=>element.usuario==usuario);
    }
};


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => console.log(`Example app listening on port port!`))