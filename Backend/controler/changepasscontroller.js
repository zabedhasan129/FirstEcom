// const blankinput = require("../handlre/blankinput");
// const emailValidator = require("../handlre/emailValidator");
// const validPassword = require("../handlre/validPassword");
const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');



let changepasscontroller = async (req, res) => {
    const { token,password } = req.body;

    console.log(token,password)

    
}

module.exports = changepasscontroller;