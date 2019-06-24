const { Router } = require('express');
const { asyncMiddleware } = require('../utils');
const UsersModel = require('../models/users');
const MessageModel = require('../models/messages');
const { users, messages } = require('../fixtures');

module.exports = () => {
	const init = Router();

	init.get('/users', asyncMiddleware(async (req, res) => {
		try {
			for (let userInfo of users) {
				const user = new UsersModel({ ...userInfo });

				await user.save();
			}

			res.send('Users created successfully');
		} catch (e) {
			console.error(e);
			res.status(500).send(e.message);
		}

	}));

	init.get('/messages', asyncMiddleware(async (req, res) => {
		try {
			for (let messageInfo of messages) {
				const message = new MessageModel({ ...messageInfo });

				await message.save();
			}
		} catch (e) {
			console.error(e);
			res.status(500).send(e.message);
		}


		res.send('Messages created successfully');
	}));

	return init;
};