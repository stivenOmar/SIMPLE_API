const { response, request} = require("express");
const Product = require("../models/product");

const getProducts = async (req = request, res = response) => {
    
    let property = req.query;

    if(isObjectEmpty(property)){
        return getAllProducts(res);
    }

    let [nameProperty] = Object.keys(property);

    if(nameProperty.toLowerCase() == "select"){
        return getProductsBy(res, property[nameProperty]); 
    }

    return getProductsByProperty(res, property);
}

const isObjectEmpty = (object) => {
    return Object.entries(object).length === 0;
}

const getAllProducts = async (res = response) => {
    const products = await Product.find();
    res.status(200).json(products);
}

const getProductsBy = async (res = response, properties) => {
    const [,formatProperties,] = properties.split('"');
    const products = await Product.find().select(formatProperties);
    res.status(200).json(products);
}

const getProductsByProperty = async (res = response, property) => {
    const products = await Product.find(property);
    res.status(200).json(products);
}


module.exports = {
    getProducts
}