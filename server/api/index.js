const { Router } = require('express');
const message = require('./message');
const messages = require('./messages');
const user = require('./user');
const users = require('./users');
const init = require('./init');

module.exports = () => {
	let api = Router();

	api.use('/message', message());
	api.use('/messages', messages());
	api.use('/user', user());
	api.use('/users', users());

	// Warning! Remove this api in production
	api.use('/init', init());

	return api;
};
