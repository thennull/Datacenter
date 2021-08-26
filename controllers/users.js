const User = require("../models/users");
const { asyncHandler } = require("../utils/asyncWrapper");
const { UserInputError } = require("apollo-server-express");

// Fetch Users

exports.getUsers = asyncHandler(async function (root, args, context, info) {
  return await User.find().lean().exec();
}); // Look for pagination stuff over here

// Fetch one user

exports.getUser = asyncHandler(async function (root, { email }, context, info) {
  return await User.findOne({ email }).lean().exec();
});

// Create a user

exports.createUser = asyncHandler(async function (
  root,
  { data },
  context,
  info
) {
  let user = await User.create(data);
  if (!user) throw new UserInputError("Could not create this user: \n" + data);
  return user;
});

// Users by department

exports.usersDepartment = asyncHandler(async function (
  root,
  { department },
  context,
  info
) {
  let result = await User.find({ department }, "-_id fname lname email")
    .lean()
    .exec();
  return result;
});

// Count users by Department

exports.countUsersDepartment = asyncHandler(async function (
  _,
  { department },
  __,
  ___
) {
  let result = await User.countDocuments({ department });
  return result;
});
