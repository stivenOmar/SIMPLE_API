const { response, request} = require("express");
const Product = require("../models/product");

const getProducts = async (req = request, res = response) => {
    const products = await Product.find();
    res.status(200).json(products);
}

module.exports = {
    getProducts
}