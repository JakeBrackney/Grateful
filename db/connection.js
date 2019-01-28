const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/gratitude");
mongoose.Promise = Promise;
module.exports = mongoose;