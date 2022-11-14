require("dotenv").config();
const express = require('express');
const cors = require("cors");
const {dbConnection} = require("../database/config");

const deployApi = async () =>{
    const APP = express();
    const PORT = process.env.PORT;

    await dbConnection();
    configureMiddlewares(APP);
    configureRoutes(APP);
    listen(APP, PORT);
}

configureMiddlewares = (server) =>{
    server.use(cors());
}

configureRoutes = (server) => {
    server.use("/product", require("../routes/product.routes"));
    server.use("/client", require("../routes/client.routes"));
}

listen = (server, port = 3000) => {
    server.listen(port, ()=>{
        console.log("Running in PORT ", port);
    })
}

module.exports = deployApi;