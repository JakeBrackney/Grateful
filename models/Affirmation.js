const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Affirmation = new Schema ({
	text: String,
	createdAt: {
		type: Date,
		default: Date.now()
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User"
	}
})

module.exports = mongoose.model('Affirmation', Affirmation)