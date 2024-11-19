const express = require("express");
const secureApi = require("../../middleware/secureApi");
const _ = express.Router();




_.post("/registration",secureApi,(req,res)=>{
    console.log(req.body);
    // console.log(__dirname)
})





module.exports = _;