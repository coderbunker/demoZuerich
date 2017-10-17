/* server.js */
//var express = require('express');
//var graphqlHTTP = require('express-graphql');
//var { buildSchema } = require('graphql');

import express from 'express'
import postgraphql from 'postgraphql'

const app = express()

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
//    field: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
//  },
//  field: () => {
//    return 'This is the return for field';
  },
}

var app = express();
//app.use('/graphql', graphqlHTTP({
app.use('/graphql' ({
  schema: "atlas",
  password: Lucatoni22,
  rootValue: root,
  graphiql: true,
}));

/*arduino {
  temperatur(id: ID): temperatur
}

type temperatur{
	id: ID
}
*/
app.use(postgraphql('postgres://192.168.1.231:5432'))


app.listen(4000);
//console.log('Running a GraphQL API server at localhost:4000/graphql');
