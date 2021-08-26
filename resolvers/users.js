const {
  getUsers,
  getUser,
  createUser,
  usersDepartment,
  countUsersDepartment,
  updateUser,
  deleteUser,
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
    updateUser,
    createUser,
    deleteUser,
  },

  User: {
    fullName: function (root) {
      return `${root.fname} ${root.lname}`;
    },
  },
};
