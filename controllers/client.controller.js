const { response, request } = require("express");
const Client = require("../models/client");
const { isObjectEmpty } = require("./helpers");

const getClients = async (req = request, res = response) => {
    try {
        const finderProperty = req.query;
    
        if (!isObjectEmpty(finderProperty)) {
            return findByProperties(req, res);
        }
    
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        errorApi()
    }
}

const findByProperties = async (req = request, res = response) => {
    try {
        const property = req.query;
        const [propertyName] = Object.keys(property);
    
        const clients = propertyName.toLowerCase() == "select" ?
            await getClientsByProperties(property[propertyName]) :
            await getClientsByPropertyValue(property)
    
        res.status(200).json(clients);
    } catch (error) {
        errorApi()
    }
}

const getClientsByProperties = async (properties) => {
    const [, formatProperties,] = properties.split('"');
    const clients = await Client.find().select(formatProperties)
    return clients
}

const getClientsByPropertyValue = async (property) => {
    const clients = await Client.find(property);
    return clients;
}

const errorApi = (msg = "Error api") => res.status(500).json({
    msg: "Error when consulting the clients collection"
})

module.exports = {
    getClients
}