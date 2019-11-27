const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

// Rota para trazer tudo
router.get("/", controller.getAll)

//rota pra trazer só o nome
router.get("/nome/:nome", controller.getByName)

//rota para trazer por ID
router.get("/id/:id", controller.getById)

//rota para filtrar e deletar

router.delete("/deletar/:id", controller.deleteById)

//rota para criar com add 

router.post("/criar", controller.add)

//fazendo put

router.patch('/atualizar/:id',  controller.updateById);

//router.patch('/p/:id', controller.patch);



module.exports = router
