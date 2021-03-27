const express = require("express");
const router = express.Router()
const api = require("../services/api")

//api.get("/cliente") .then(response =>criarLista(response.data)).catch(error => console.log(error))
api.get('/cliente')
    .then(response =>criarLista(response.data))
    .catch(error => console.log(error))

    
    const criarLista = (clientes)=>{
        const ulClientes = document.getElementById('clientes')
        clientes.map(cliente=>{
            const listaCliente = document.createElement('li')
            listaCliente.innerHTML =
            `Nome: ${cliente.nome_clientes}
            Telefone:${cliente.telefone}`
            ulClientes.appendChild(listaCliente)
        })
    }

module.exports = api;