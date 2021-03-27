const axios = require("axios")

const api = axios({
    baseURL: "https://api-erp-tg.herokuapp.com"
})

module.exports = api