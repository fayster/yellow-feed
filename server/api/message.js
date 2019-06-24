const { Router } = require('express');
const { asyncMiddleware } = require('../utils');
const MessageModel = require('../models/messages');

module.exports = () => {
	const message = Router();

	message.post('/', asyncMiddleware(async (req, res, next) => {
		const { authorId, text, media } = req.body;
		const message = new MessageModel({ authorId, text, media, createdAt: new Date() });

		message.save((err) => {
			if (err) next(err);

			// delay imitation
			setTimeout(() => {
				res.send(message);
			}, 2000);

			// res.send(message);
		});
	}));

	return message;
};