const mongoose = require("mongoose");

var uri = `mongodb://localhost:27017/Datacenter`;

var serv = async function () {
  try {
    let conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    if (conn) console.log(`Mongo database connected - OK`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = serv;
