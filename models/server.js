require("dotenv").config();
const express = require('express');

class Server {
    constructor(){
        this.app = express();
    }

    listen = () => {
        this.app.listen(process.env.PORT, ()=>{
            console.log("Runnig in PORT ", process.env.PORT)
        });
    }
}

module.exports = Server;