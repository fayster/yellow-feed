const { Router } = require('express');
const { asyncMiddleware } = require('../utils');
const UsersModel = require('../models/users');

module.exports = () => {
	const users = Router();

	users.get('/', asyncMiddleware(async (req, res) => {
		const users = await UsersModel.find({});

		// delay imitation
		setTimeout(() => {
			res.send(users);
		}, 2000);

		// res.send(users);
	}));

	return users;
};