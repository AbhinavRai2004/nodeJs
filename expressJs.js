// expressjs is a framework of nodejs.

const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(5500);