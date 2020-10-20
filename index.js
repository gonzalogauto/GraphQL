const express = require('express')
const app = express()
const port = 3000
var { graphqlHTTP } = require('express-graphql');
const graphschema = require('./src/schema');
const dotenv = require('dotenv');
dotenv.config();


app.use('/graphql', graphqlHTTP({
  schema: graphschema.schema,
  graphiql: true,
}));

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))