const axios = require("axios")


class API{

    static async getCliente(){
        const response = await axios.get('https://api-erp-tg.herokuapp.com/cliente')
        console.log('response:' , response)
    }
}

API.getCliente()


module.exports=API