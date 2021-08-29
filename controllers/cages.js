const Cage = require("../models/cages");
const { asyncHandler } = require("../utils/asyncWrapper");
const { UserInputError } = require("apollo-server-express");

// Create cage

exports.createCage = asyncHandler(async function (
  root,
  { data },
  context,
  info
) {
  let cage = await Cage.create(data);
  if (!cage) throw new UserInputError("Could not insert cage: " + data.code);
  return cage;
});

exports.getCages = asyncHandler(async function (root, args, context, info) {
  let cages = await Cage.find({}).select("-__v").lean().exec();
  return cages;
});

exports.getCage = asyncHandler(async function (root, { id }, context, info) {
  let cage = await Cage.findOne({ _id: id }).lean().exec();
  if (!cage) throw new UserInputError("could not find cage: " + id);

  return cage;
});

exports.updateCage = asyncHandler(async function (
  root,
  { id, data },
  context,
  info
) {
  let cage = await Cage.findByIdAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  }).exec();
  if (!cage) throw new UserInputError("Could not update cage: " + id);
  return cage;
});

exports.deleteCage = asyncHandler(async function (root, { id }, context, info) {
  let cageId = await Cage.findOne({ _id: id }, "_id").lean().exec();
  if (!cageId) throw new UserInputError("Could not find cage: " + id);
  await Cage.deleteOne({ _id: cageId }).exec();
  return true;
});
