const { response, request } = require("express");
const Client = require("../models/client");

const getClients = async (req = request, res = response) => {
    const clients = await Client.find();
    res.status(200).json(clients);
}

module.exports = {
    getClients
}