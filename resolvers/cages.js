const {
  createCage,
  getCage,
  getCages,
  updateCage,
  deleteCage,
} = require("../controllers/cages");

const { getRacksByCageId } = require("../controllers/racks");

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
    racks: getRacksByCageId,
  },
};
