const { MongoClient } = require('mongodb')
    //  or
    // const {} = require('mongodb').MongoClient;
const url = 'mongodb://0.0.0.0:27017';
const database = 'e-comm';

const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('Products');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();