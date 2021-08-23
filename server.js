const express = require("express");
const cookies = require("cookie-parser");
const cors = require("cors");
const hpp = require("hpp");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const sanitize = require("express-mongo-sanitize");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const User = require("./resolvers/users.js");

// Config File

dotenv.config({ path: "./config/setup.env" });

const app = express();

var limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

// Middlewares

app.disable("X-powered-by");
app.use(xssClean());
app.use(cors());
app.use(hpp());

app.use(express.json());
app.use(cookies());
app.use(sanitize());
app.use(limiter);

var server = new ApolloServer({
  typeDefs: fs.readFileSync(path.resolve(__dirname, "schemas/users.gql"), {
    encoding: "utf8",
  }), // need to be changed
  resolvers: User,
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

app.listen(process.env.PORT, function () {
  console.log(
    `Listening on: http://${process.env.SERVER}:${process.env.PORT}/graphql`
  );
});
