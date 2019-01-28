const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Gratitude = new Schema ({
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

module.exports = {
	Gratitude: mongoose.model('Gratitude', Gratitude),
	Affirmation: mongoose.model('Affirmation', Affirmation)
} 