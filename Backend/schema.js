const mongoose = require("mongoose");

const fineSchema = new mongoose.Schema({
  name : String,
  aadhar : String,
  offence : String,
  amount : String
});

const fineModel = mongoose.model("Fine", fineSchema);

module.exports = fineModel;
