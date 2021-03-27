const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")
const app = express();
const api = require("./services/api")

app.set('view engine','ejs')


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //accepting json


app.get("/",(req,res)=>{
    res.render("index")
})


module.exports=app;