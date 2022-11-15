const { response, request} = require("express");
const Product = require("../models/product");
const {isObjectEmpty} = require("./helpers")

const getProducts = async (req = request, res = response) => {
    
    let finderProperty = req.query;

    if (!isObjectEmpty(finderProperty)) {
        return findByProperties(req, res);
    }

    const products = await Product.find();
    res.status(200).json(products);
}

const findByProperties = async (req = request, res = response) => {
    const property = req.query;
    const [propertyName] = Object.keys(property);

    const products = propertyName.toLowerCase() == "select" ?
        await getProductsByProperties(property[propertyName]) :
        await getProductsByPropertyValue(property)

    return res.status(200).json(products);
}

const getProductsByProperties = async (properties) => {
    const [,formatProperties,] = properties.split('"');
    const products = await Product.find().select(formatProperties);
    return products
}

const getProductsByPropertyValue = async (property) => {
    const products = await Product.find(property);
    return products
}


module.exports = {
    getProducts
}