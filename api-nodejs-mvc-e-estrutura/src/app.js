const express = require("express")
const app = express()//jogando express e todas as suas qualidade para a variavel

//rotas
const index = require("./routes/index")//jogando caminho para a variavel
//const professoras = require("./routes/professorasRoute")//jogando caminho para a variavel professorass


app.use(function(req, res, next){
    res.header("Acess-Control-Allow-Origin", "*")
    res.header(
        "Acess-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
next()
})

app.use("/", index)
//app.use("/professoras", professoras)

module.exports = app;