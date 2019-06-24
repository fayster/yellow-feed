const { Router } = require('express');
const { asyncMiddleware } = require('../utils');
const UsersModel = require('../models/users');

module.exports = () => {
	const user = Router();

	user.get('/:id', asyncMiddleware(async (req, res) => {
		const id = req.params.id;
		const info = await UsersModel.findOne({ unique_name: id });

		// delay imitation
		setTimeout(() => {
			res.send(info);
		}, 2000);

		// res.send(info);
	}));

	return user;
};