const express = require("express")
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/reprograma", { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('conexão feita com sucesso.')
})

//rotas
const index = require("./routes/index")
const alunas = require("./routes/alunasRoute")
const professoras = require("./routes/professorasRoute")

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app
