const { response, request} = require("express");


const getUser = (req = request, res = response) => { //configuracion de una ruta
    res.status(200).json({name:"Omar Calderon *"});
}


module.exports = {
    getUser
}