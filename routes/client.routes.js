const { Router } = require("express");
const router = Router();
const clientController = require("../controllers/client.controller");

router.get("/", clientController.getClients);

module.exports = router;