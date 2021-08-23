const mongoose = require("mongoose");

var patchSchema = new mongoose.Schema({
  rackId: {
    type: mongoose.Schema.ObjectId,
    ref: "Rack",
    required: true,
  },
  identifier: {
    type: Number,
    required: true,
  },
  portCount: {
    type: Number,
    required: true,
  },
  utp: {
    type: Boolean,
  },
  fiber: {
    type: Boolean,
  },
  bindsTo: [Number],
});

module.exports = mongoose.model("Patch", patchSchema);
