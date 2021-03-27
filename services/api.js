import axios from "axios"

//const axios = require("axios")


const api = axios.create({
    baseURL: "https://api-erp-tg.herokuapp.com"
})

module.exports = api