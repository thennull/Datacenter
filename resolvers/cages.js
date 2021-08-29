const {
  createCage,
  getCage,
  getCages,
  updateCage,
  deleteCage,
} = require("../controllers/cages");

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
};
