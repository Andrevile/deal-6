const express = require('express');
const cookieParser = require('cookie-parser');
// const path = require('path');
const app = express();
// eslint-disable-next-line no-unused-vars
const db = require('./db/db');

app.use(cookieParser());
// app.use('/public', express.static(path.join(__dirname, 'src', 'public'))); // 경로 미정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).json("Hello, Welcome to Moon & Nam's express world!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server Listening on ${port}`);
});
