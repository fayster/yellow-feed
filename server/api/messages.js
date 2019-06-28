const { Router } = require('express');
const { asyncMiddleware } = require('../utils');
const MessageModel = require('../models/messages');

module.exports = () => {
	const messages = Router();

	messages.get('/', asyncMiddleware(async (req, res) => {
		let messages;

		if ('searchText' in req.query) {
			messages = !req.query.searchText.length
				? []
				: await MessageModel
					.find({ text: new RegExp(req.query.searchText, 'i') })
					.sort({ createdAt: -1 });
		} else {
			messages = await MessageModel
				.find({})
				.sort({ createdAt: -1 });
		}

		// delay imitation
		setTimeout(() => {
			res.send(messages);
		}, 2000);

		// res.send(messages);
	}));

	messages.get('/:authorId', asyncMiddleware(async (req, res) => {
		const authorId = req.params.authorId;
		const messages = await MessageModel.find({ authorId }).sort({ createdAt: -1 });

		// delay imitation
		setTimeout(() => {
			res.send(messages);
		}, 2000);

		// res.send(messages);
	}));

	return messages;
};