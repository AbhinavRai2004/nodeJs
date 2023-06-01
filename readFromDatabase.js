const dbconnect = require('./databaseConnection')
    // dbconnect().then((resp) => {
    //         resp.find().toArray().then((data) => {
    //             console.log(data);
    //         })
    //     })
    // or

const main = async() => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();