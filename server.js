const express = require("express");
const cookies = require("cookie-parser");
const cors = require("cors");
const hpp = require("hpp");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const database = require("./config/db");
const { query, schema } = require("./bindSchema");
const resolvers = require("./resolvers/defaultResolver.js");

// Config File

dotenv.config({ path: "./config/setup.env" });

// Database

database();

// Express server

const app = express();

var limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

// Middlewares

app.disable("X-powered-by");
app.use(xssClean());
app.use(cors());

// app.use(express.json());
app.use(cookies());
app.use(hpp());

// Apollo server

var server = new ApolloServer({
  typeDefs: [query, schema],
  resolvers,
});

server
  .start()
  .then(function () {
    server.applyMiddleware({ app, path: "/graphql" });
  })
  .catch(function (error) {
    console.error(error);
    process.exit(1);
  });

// Express start

app.listen(process.env.PORT, function () {
  console.log(
    `Listening on: http://${process.env.SERVER}:${process.env.PORT}/graphql`
  );
});
