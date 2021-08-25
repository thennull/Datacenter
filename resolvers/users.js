const { getUsers, getUser, createUser } = require("../controllers/users");

// Final Export to Apollo server
module.exports = {
  Query: {
    getUsers,
    getUser,
  },
  Mutation: {
    updateUser: function (_, { name }) {
      return { name };
    },
    createUser,
  },

  User: {
    fullName: function (root) {
      return `${root.fname} ${root.lname}`;
    },
  },
};
