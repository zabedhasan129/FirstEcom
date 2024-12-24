const express = require("express");
const routes = express.Router()
const apiRoutes = require("./api")

let apiBaseUrl = process.env.BASEURL

routes.use(apiBaseUrl, apiRoutes)


routes.use((req, res) => {
    res.send({ error: "sawaon sir vala na heti khali areee pochay" })

})


module.exports = routes;