const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
	{
		unique_name: {
			type: String,
			required: true,
			unique: true
		},
		name: {
			type: String,
			required: false,
		},
		avatar: {
			type: String,
			require: false
		},
		description: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

module.exports = model('Users', UsersSchema);