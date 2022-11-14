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
    server.use(express.json());
}

configureRoutes = (server) => {
    server.use("/product", require("../routes/product.routes"));
    server.use("/category", require("../routes/category.routes"));
}

listen = (server, port = 3000) => {
    server.listen(port, ()=>{
        console.log("Running in PORT ", port);
    })
}

module.exports = deployApi;