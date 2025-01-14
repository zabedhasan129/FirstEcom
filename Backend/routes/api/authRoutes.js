const express = require("express");
const routes = express.Router();
const secureApi = require("../../middleware/secureApi");
const registrationController = require("../../controler/registrationController");
const otpController = require("../../controler/otpcontroller");
const forgetcontroller = require("../../controler/forgetcontroller")
const changepasscontroller = require("../../controler/changepasscontroller")



routes.post("/registration",registrationController)
routes.post("/otp",otpController)
routes.post("/forgetpassword",forgetcontroller)
routes.post("/Changepass",changepasscontroller)


module.exports = routes;