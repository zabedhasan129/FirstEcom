// const blankinput = require("../handlre/blankinput");
// const emailValidator = require("../handlre/emailValidator");
// const validPassword = require("../handlre/validPassword");
const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");



let otpController = async (req, res) => {
    const { otp, email } = req.body;

    let findEmail = await User.findOne({ email: email });

    if (findEmail) {
        console.log("find Mail",findEmail)
        console.log("otp",otp)
        if ( !findEmail.isEmailvarified && findEmail.otp == otp) {
            console.log("milse")
            await User.findOneAndUpdate({ email: email }, { otp: "", isEmailvarified:"true" })
            res.send({ success: "otp matched" })
        }
        else {
            console.log("mile nai")
            res.send({ success: "otp Not matched" })
        }
    }
}

module.exports = otpController;