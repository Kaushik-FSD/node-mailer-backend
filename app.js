const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: "from@gmail.com",
  to: "to@gmail.com",
  subject: "Sending Email using Node.js",
  html: "<h1>That was easy!</h1>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(`ERRORRR!!! ${error}`);
  } else {
    console.log(`Email Sent :: ${info.response}`);
  }
});
