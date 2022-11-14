const {Schema, model} = require("mongoose");

const ProductSchema = Schema({
    _id: String,
    name: String,
    price: Number,
    stock: Number,
    provider: String,
    avaiable: Boolean
})

module.exports = model("Products", ProductSchema);