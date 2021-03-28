const express = require("express");
const router = express.Router();


router.get("/cliente",(req, res) => {
        res.send("teste")
        
    });


    module.exports=router;