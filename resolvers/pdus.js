const {
  getPdu,
  getPdus,
  createPdu,
  updatePdu,
  deletePdu,
} = require("../controllers/pdus");

module.exports = {
  Query: {
    getPdu,
    getPdus,
  },
  Mutation: {
    createPdu,
    updatePdu,
    deletePdu,
  },
};
