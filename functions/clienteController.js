const express = require("express");
const router = express.Router();


router.get("/cliente",(req, res) => {
        res.render("admin/clientes/index")
        
    });


    module.exports=router;