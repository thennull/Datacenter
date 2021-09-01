const {
  createCage,
  getCage,
  getCages,
  updateCage,
  deleteCage,
} = require("../controllers/cages");

const { getRacks } = require("../controllers/racks");

// Cage Resolvers
module.exports = {
  Query: {
    getCage,
    getCages,
  },
  Mutation: {
    createCage,
    updateCage,
    deleteCage,
  },
  Cage: {
    racks: getRacks,
  },
};
