const {
  getRack,
  getRacks,
  createRack,
  updateRack,
  deleteRack,
} = require("../controllers/racks");

module.exports = {
  Query: {
    getRack,
    getRacks,
  },
  Mutation: {
    createRack,
    updateRack,
    deleteRack,
  },
};
