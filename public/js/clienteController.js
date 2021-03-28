const api = axios.create({
    baseURL: "https://api-erp-tg.herokuapp.com"
})

api.get('/cliente')
.then(response =>criarTabela(response.data))
.catch(error => console.log(error))


function criarTabela(clientes){
    var table = document.getElementById("tabelaCliente")
    for(var i=0;i< clientes.length ;i++){
        var row = `<tr> 
                        <td>${clientes[i].nome_clientes}</td>
                        <td>${clientes[i].telefone}</td>
                    </tr>`

                table.innerHTML += row
    }
    
}









