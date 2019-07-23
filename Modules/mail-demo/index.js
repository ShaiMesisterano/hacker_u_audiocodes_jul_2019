const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

let transporter = nodemailer.createTransport(
  smtpTransport({
    host: "debugmail.io",
    port: 25,
    auth: {
      user: "***",
      pass: "***"
    }
  })
);
let mailOptions = {
  from: "abc@domain.com",
  to: "abc@domain.com",
  cc: "",
  subject: "Example",
  text: "Hello, how are you?",
  html: "<h1>Hello, how are you?</h1>"
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) return console.error(error);

  console.log("Success");
});
