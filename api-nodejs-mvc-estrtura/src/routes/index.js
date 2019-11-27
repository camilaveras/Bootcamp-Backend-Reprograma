
const express = require("express")
const router = express.Router()//ele esta usando todas as ferramentas do router do express e não express inteiro


router.get("/", function(req, res){
res.status(200).send({
    title: "Reprograma turma da Kelly",
    version: "0.0.1"
})

})

//puxando dados de outro lugar

module.exports = router