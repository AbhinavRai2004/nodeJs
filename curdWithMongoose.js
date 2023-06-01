const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});

const saveInDB = async() => {
    const Product = mongoose.model('Products', productSchema);
    let data = new Product({
        name: "max 100",
        brand: 'maxx',
        price: 200,
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}
saveInDB();

const updateInDB = async() => {
    const Product = mongoose.model('Products', productSchema);
    let data = await Product.updateOne({ name: "max 6" }, {
        $set: { price: 550, name: 'max pro 6' }
    })
    console.log(data)
}

const deleteInDB = async() => {
    const Product = mongoose.model('Products', productSchema);
    let data = await Product.deleteOne({ name: 'max 100' })
    console.log(data);
}
const findInDB = async() => {
    const Product = mongoose.model('Products', productSchema);
    let data = await Product.find({ name: 'max pro 611' })
    console.log(data);
}

findInDB();