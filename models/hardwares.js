const mongoose = require("mongoose");

var hardwareSchema = new mongoose.Schema({
  rackId: {
    type: mongoose.Schema.ObjectId,
    ref: "Rack",
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  units: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
  },
  server: {
    type: Boolean,
  },
  network: {
    type: Boolean,
  },
  tape: {
    type: Boolean,
  },
  storage: {
    type: Boolean,
  },
  dvr: {
    type: Boolean,
  },
  connType: {
    type: String,
    requried: true,
  },
  hostname: {
    type: String,
    required: true,
  },
  ipAddress: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    requird: true,
  },
});

module.exports = mongoose.model("Hardware", hardwareSchema);
