const mongoose = require("mongoose");

var rackSchema = new mongoose.Schema({
  cageId: {
    type: mongoose.Schema.ObjectId,
    ref: "Cage",
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  units: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Rack", rackSchema);
