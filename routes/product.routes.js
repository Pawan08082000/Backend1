const controller = require("../controllers/product.controller");
const { authJwt } = require("../middlewares");


const express = require("express");
const router = express.Router();

module.exports = [
    router.post("/insert",
    authJwt.verifyToken,
    controller.insertProduct,
    ),

    router.get("/show",
    controller.getProduct)
]