const express = require("express");
const routes = express.Router()
const authroutes = require("./authRoutes")


routes.use("/auth",authroutes)





module.exports = routes;