const mongoose = require("mongoose");

var rackSchema = new mongoose.Schema({
  cageId: {
    type: mongoose.Schema.ObjectId,
    ref: "Cage",
    required: true,
  },
  codigo: {
    type: String,
    required: true,
  },
  rackType: {
    type: String,
    required: true,
  },
  rackUnits: {
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

rackSchema.index({ codigo: 1, cageId: 1 }, { unique: true });

module.exports = mongoose.model("Rack", rackSchema);
