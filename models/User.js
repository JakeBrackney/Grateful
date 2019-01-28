const mongoose = require("../db/connection");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const User = new Schema ({
  email: String,
  password: String,
  gratitude: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gratitude"
    }
  ],
  affirmation: [
    {
      type: Schema.Types.ObjectId,
      ref: "Affirmation"
    }
  ]
})

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', User)