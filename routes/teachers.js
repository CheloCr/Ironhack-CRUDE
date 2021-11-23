const express = require("express")

const router = express.Router()

router.get("/Chelo" , (req,res) => {
    res.send("eSTAS EN EL HOME DE CHELO")
})

router.get("/" , (req,res) => {
    res.send("eSTAS EN EL HOME DE TEACHERS")
})



module.exports = router