const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const api = require('./api');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api router
app.use('/api', api());
app.use(cors());

app.listen(port, () => {
	mongoose
		.connect('mongodb://localhost:27017/yellow-feed', { useNewUrlParser: true })
		.then(() => {
			console.log(`Started on port ${port}`);
		})
		.catch(console.error);
});

module.exports = app;