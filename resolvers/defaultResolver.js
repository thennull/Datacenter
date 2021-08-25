const User = require("./users");
const Rack = require("./racks");
const Cage = require("./cages");
const Pdu = require("./pdus");
const Hardware = require("./hardwares");
const PatchPanel = require("./patch_panels");
const { merge } = require("lodash");

module.exports = merge(User, Rack, Cage, Pdu, Hardware, PatchPanel, {});
