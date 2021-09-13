const Pdu = require("../models/pdus");
const { asyncHandler } = require("../utils/asyncWrapper");
const { UserInputError } = require("apollo-server-express");

exports.getPdu = asyncHandler(async function (root, { id }, context, info) {
  if (!id.match(/^[a-z0-9]{24}$/))
    throw UserInputError("Please provide a valid pdu ID");
  let pdu = await Pdu.findOne({ _id: id }, "-__v").lean().exec();
  if (!pdu) throw new UserInputError("Could not find this pdu: " + id);
  return pdu;
});

exports.getPdus = asyncHandler(async function (root, args, context, info) {
  let pdus = await Pdu.find({}, "-__v").lean().exec();
  if (!pdus) throw new UserInputError("Could not find any pdu");
  return pdus;
});

exports.createPdu = asyncHandler(async function (
  root,
  { data },
  context,
  info
) {
  let pdu = await Pdu.create(data);
  if (!pdu) throw new UserInputError("Could not create this pdu");
  return pdu;
});
exports.updatePdu = asyncHandler(async function (
  root,
  { id, data },
  context,
  info
) {
  if (!id.match(/^[a-z0-9]{24}$/))
    throw UserInputError("Please provide a valid pdu ID");
  let pdu = await Pdu.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  })
    .lean()
    .exec();
  if (!pdu) throw new UserInputError("Could not update this pdu");
  return pdu;
});
exports.deletePdu = asyncHandler(async function () {});
