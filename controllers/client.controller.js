const { response, request } = require("express");
const Client = require("../models/client");

const getClients = async (req = request, res = response) => {

    let property = req.query;

    if(isObjectEmpty(property)){
        return getAllClients(res);
    }

    let [nameProperty] = Object.keys(property);

    if(nameProperty.toLowerCase() == "select"){
        return getClientsBy(res, property[nameProperty]); 
    }
    
    return getClientsByProperty(res, property);
}

const isObjectEmpty = (object) => {
    return Object.entries(object).length === 0;
}

const getAllClients = async (res = response) => {
    const clients = await Client.find();
    res.status(200).json(clients);
}

const getClientsBy = async (res = response, properties) => {
    const [,formatProperties,] = properties.split('"');
    const clients = await Client.find().select(formatProperties);
    res.status(200).json(clients);
}

const getClientsByProperty = async (res = response, property) => {
    const clients = await Client.find(property);
    res.status(200).json(clients);
}

module.exports = {
    getClients
}