const express = require("express");
const router = express.Router();


router.get("/cliente",(req, res) => {
        res.render("teste")
        
    });


    module.exports=router;