const { asyncHandler } = require("../utils/asyncWrapper");
const { UserInputError } = require("apollo-server-express");
const Rack = require("../models/racks");

exports.getRack = asyncHandler(async function (root, { id }, context, info) {
  let rack = await Rack.findById(id).select("-__v").lean().exec();
  if (!rack) throw new UserInputError("Could not find the rack: " + id);
  return rack;
});

exports.getRacks = asyncHandler(async function (root, args, context, info) {
  let racks = await Rack.find({})
    .select("-__v")
    .sort({ brand: 1 })
    .lean()
    .exec();
  return racks;
});

exports.createRack = asyncHandler(async function (
  root,
  { data },
  context,
  info
) {
  let rack = await Rack.create(data);
  if (!rack) throw new UserInputError("Could not create that rack");
  return rack;
});

exports.updateRack = asyncHandler(async function (
  root,
  args,
  context,
  info
) {});

exports.deleteRack = asyncHandler(async function (
  root,
  args,
  context,
  info
) {});
