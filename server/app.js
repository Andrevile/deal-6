const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.status(200).json("Hello, Welcome to Moon & Nam's express world!");
});

app.listen(3000, ()=> {
    console.log("listening at http://localhost:3000");
})