const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.sendFile
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(5500);