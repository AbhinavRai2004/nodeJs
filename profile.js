const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')
app.set('view engine', 'ejs')

app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/profile', (_, resp) => {
    const user = {
        name: 'Abhinav',
        email: 'Abhinav@test.com',
        country: 'USA',
    }
    resp.render('profile', { user })
});

app.listen(5700)