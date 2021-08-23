const mongoose = require("mongoose");

var pduSchema = new mongoose.Schema({
  rackId: {
    type: mongoose.Schema.ObjectId,
    ref: "Rack",
    required: true,
  },
  sockets: {
    type: Number,
    required: true,
  },
  power: {
    type: String,
    requried: true,
  },
});

module.exports = mongoose.model("Pdu", pduSchema);
