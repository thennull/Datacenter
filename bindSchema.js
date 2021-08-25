// Bring all schemas by directory discovery/scan and compile them for the export

const path = require("path");
const fs = require("fs");

let schemaDir = path.resolve(__dirname, "schemas");
let queriesDir = path.resolve(__dirname, "queries");

let schemaFiles = fs.readdirSync(schemaDir);
let queryFiles = fs.readdirSync(queriesDir);

let schema = schemaFiles.reduce(function (prev, curr) {
  return prev.concat(
    fs.readFileSync(path.resolve(schemaDir, curr), {
      encoding: "utf8",
    })
  );
}, "");

let query = queryFiles.reduce(function (prev, curr) {
  return prev.concat(
    fs.readFileSync(path.resolve(queriesDir, curr), {
      encoding: "utf8",
    })
  );
}, "");

module.exports = {
  schema,
  query,
};
