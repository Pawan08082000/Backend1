const nodemailer = require("nodemailer");
const config = require("../config/auth.config");

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationEmail = (email, subject, body) => {
    transport.sendMail({
      from: user,
      to: email,
      subject: subject,
      html: body,
    }).catch(err => console.log(err));
  };