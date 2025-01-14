// const blankinput = require("../handlre/blankinput");
// const emailValidator = require("../handlre/emailValidator");
// const validPassword = require("../handlre/validPassword");
const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');


let forgetcontroller = async (req, res) => {
    const { email } = req.body;

    let findEmail = await User.findOne({ email: email });

    if (findEmail) {
        var token = jwt.sign({ email: email }, "shhhhhh");
        console.log("jwt token:", token)
        const transporter = nodemailer.createTransport({
            service: "gmail",

            secure: false, // true for port 465, false for other ports
            auth: {
                user: process.env.MAIL_SENDER_USER,
                pass: process.env.MAIL_SENDER_PASS,
            },
        });
        // await keyword does not work globally......................
        const info = await transporter.sendMail({
            from: process.env.MAIL_SENDER_USER, // sender address
            to: email, // list of receivers
            subject: "Email varification for password", // Subject line
            text: "Hello world?", // plain text body
            html: `<a href="http://localhost:5173/changepass/${token}">Click for New password</a>`, // html body
        });
    }
}

module.exports = forgetcontroller;