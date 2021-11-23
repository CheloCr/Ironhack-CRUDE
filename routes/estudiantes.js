const express = require("express")

const router = express.Router()

router.get("/",(req,res) => {
    res.send("Estas en la pagina de estudiantes")
})

router.get("/xchell",(req,res) => {
    res.send("Estas en la pagina de Xchell")
})



module.exports = router