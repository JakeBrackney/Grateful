const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/gratitude"), { useNewUrlParser: true };
mongoose.Promise = Promise;
module.exports = mongoose;