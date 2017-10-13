# GraphQL Server

To run an GraphQL API Server we use Express, a web application framework for Node.js.


### Prerequisites

Before we get started, make sure you have **NodeJS and the NPM package manager installed** on your machine.
We also recommend to use Ubuntu 16.04 or later.

### Installing

Install Express GraphQL:

```
sudo npm init
sudo npm install express express-graphql graphql --save
```

### Get Started

Setup "express-graphql" as a route on your schema.js. We'll modify a "Hello World" example:

```
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: <YourSchema>,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
```

## Testing

Run GraphQL Server:

```
sudo node schema.js
```

If you navigate in a web browser to http://localhost:4000/graphql, you should see an interface that lets you enter queries.

## Author

**Marc Anthony Roxas** - *Initial work* - [Coderbunker](https://github.com/coderbunker)

