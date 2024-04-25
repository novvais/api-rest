const express = require("express")
const instrutores = require("./controllers/instrutores")

const rote = express()

rote.get("/instrutores", instrutores.listagem)
rote.get("/instrutores/:id", instrutores.identificador)
rote.post("/instrutores", instrutores.cadastro)
rote.put("/instrutores/:id", instrutores.atualizarInstrutor)
rote.patch("/instrutores/:id/status", instrutores.atualizarDados)
rote.delete("/instrutores/:id" , instrutores.deleteIntrutor)

module.exports = rote