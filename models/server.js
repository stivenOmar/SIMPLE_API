require("dotenv").config();
const express = require('express'); //devuelve un objeto servidor configurado
const cors = require("cors");

class Server {
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;
        this.userRoute = "/user";

        this.configureMiddlewares();
        this.configureRoutes();
    }

    configureRoutes = () => {
        this.app.use(this.userRoute, require("../routes/user.routes"));
    }

    configureMiddlewares = () => {
        this.app.use(cors());
    }

    listen = () => {
        this.app.listen(this.PORT, () => { 
            console.log("Runnig in PORT ", this.PORT)
        });
    }
}

module.exports = Server;