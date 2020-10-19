const express = require('express')
const app = express()
const port = 3000
var { graphqlHTTP } = require('express-graphql');
const graphschema = require('./src/schema');



app.use('/graphql', graphqlHTTP({
  schema: graphschema.schema,
  graphiql: true,
}));

app.listen(port, () => console.log(`Example app listening on port port!`))