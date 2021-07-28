const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
	},
	password: String,
	email: {
		type: String,
		unique: true,
	},
	age: Number,
	currentActivity: String,
	profilePicUrl: String,
	bio: String,
});

const User = mongoose.model("user", userSchema, "users");

module.exports = User;
