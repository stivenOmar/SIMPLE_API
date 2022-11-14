const { response, request} = require("express");


const getProducts = (req = request, res = response) => {
    res.status(200).json({
        
    });
}

module.exports = {
    getProducts
}