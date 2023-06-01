// about request and response.

const express = require('express');
const app = express();

app.get('', (req, res) => {
    console.log("data sent by browser", req.query.name)
    res.send("Hello " + req.query.name);
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(5500);