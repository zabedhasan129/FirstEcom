const express = require("express");
const _ = express.Router()
const apiRoutes = require("./api")

let apiBaseUrl = process.env.BASEURL

_.use(apiBaseUrl,apiRoutes)


_.use(apiBaseUrl, (req,res)=> res.send("Sawon sir vala na,heti aree khali pochay"))



module.exports = _;