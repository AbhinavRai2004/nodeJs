const { MongoClient } = require('mongodb')
    //  or
    // const {} = require('mongodb').MongoClient;
const url = 'mongodb://0.0.0.0:27017';
const database = 'e-comm';

const client = new MongoClient(url);

async function dbconnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('Products');
}

module.exports = dbconnect;