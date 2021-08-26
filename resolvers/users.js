const {
  getUsers,
  getUser,
  createUser,
  usersDepartment,
  countUsersDepartment,
} = require("../controllers/users");

// Final Export to Apollo server
module.exports = {
  Query: {
    getUsers,
    getUser,
    usersDepartment,
    countUsersDepartment,
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
