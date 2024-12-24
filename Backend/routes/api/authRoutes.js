const express = require("express");
const secureApi = require("../../middleware/secureApi");
const registrationController = require("../../controler/registrationController");
const otpController = require("../../controler/otpcontroller");
const routes = express.Router();




routes.post("/registration",registrationController)
routes.post("/otp",otpController)



module.exports = routes;