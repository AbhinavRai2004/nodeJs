// const express = require('express')

// const app = express();

// const reqFilter = (req, resp, next) => {
//     if (!req.query.age) {
//         resp.send("Provide Your Age");
//     } else {
//         next();
//     }
// }

// app.use(reqFilter);
// app.get('/', (req, resp) => {
//     resp.send("Welcome To HomePage")
// });

// app.get('/user', (req, resp) => {
//     resp.send("Welcome To User Page")
// })

// app.listen(5200);

const express = require('express');

const reqFilter = require('./filemiddleWare');
const app = express();


app.get('/', (req, resp) => {
    resp.send("Welcome To HomePage")
});

app.get('/user', reqFilter, (req, resp) => {
    resp.send("Welcome To User Page")
})
app.get('/about', (req, resp) => {
    resp.send("Welcome To about Page")
})

app.listen(5200)