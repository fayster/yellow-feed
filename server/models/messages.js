const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
	text: { type: String, required: false },
	media: { type: String, required: false },
	createdAt: { type: Date, default: new Date() },
	authorId: { type: String, required: true },
	comments: { type: Number, required: false, default: 0 },
	likes: { type: Number, required: false, default: 0 },
	reposts: { type: Number, required: false, default: 0 },
}, { timestamps: true });

module.exports = model('Message', MessageSchema);
