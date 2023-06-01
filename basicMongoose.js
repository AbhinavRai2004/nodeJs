const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

const main = async() => {
    const ProductsModel = mongoose.model('Products', ProductSchema);
    let data = new ProductsModel({ name: "max 131", price: 200 });
    let result = await data.save();
    console.log(result);
}

main();