const user = require("./users.js");
const rack = require("./racks.js");

let systemQueries = `
  type Query {
    ${user}
    ${rack}
  }
`;
module.exports = systemQueries;
