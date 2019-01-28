const mongoose = require("../db/connection");
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

module.exports = mongoose.model('User', User)