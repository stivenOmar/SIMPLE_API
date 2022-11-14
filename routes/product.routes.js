const { Router } = require("express");
const router = Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.getProducts);

module.exports = router;