const express = require('express');
const dbconnect = require('./databaseConnection');

const app = express();
app.use(express.json());

app.get('/', async(req, resp) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    resp.send(data);
})

app.post('/', async(req, resp) => {
    let data = await dbconnect();
    let result = await data.insert(req.body);
    resp.send(result);
    // console.log(req.body);
    // resp.send({ name: 'anil' })
})

// app.put('/', async(req, resp) => {
//     let data = await dbconnect();
//     // let result = await data.updateOne({ name: "m40" }, { $set: req.body });
//     let result = await data.updateOne({name : req.body.name}, { $set: req.body });
//     resp.send({ result: "update" });
// })

// BY PASSING PARAMETER IN URL.
app.put('/:name', async(req, resp) => {
    let data = await dbconnect();
    // let result = await data.updateOne({ name: "m40" }, { $set: req.body });
    let result = await data.updateOne({ name: req.params.name }, { $set: req.body });
    resp.send({ result: "update" });
})
app.listen(5500);