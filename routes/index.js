// IMPORTACIONES

const express = require("express")

const router = express.Router()

const indexController = require("./../controllers/indexController")

// RTUAS DE LA BASE 
router.get("/", indexController.home)
router.get("/ejemplo", indexController.ejemplo )
// EXPORTACIONES

module.exports = router