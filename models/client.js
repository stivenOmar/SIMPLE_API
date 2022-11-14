const {Schema, model} = require("mongoose");

const ClientSchema = Schema({
    _id: String,
    name: String,
    age: Number,
    city: String,
    direction: String,
    suitableForCredit: Boolean
});

module.exports = model("Clients", ClientSchema);