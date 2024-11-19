const express = require("express");
const _ = express.Router()
const apiRoutes = require("./api")

let apiBaseUrl = process.env.BASEURL

_.use(apiBaseUrl,apiRoutes)



module.exports = _;