const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

class Mail {
    constructor(service, port, username, password, to, subject, cc) {
        this.option = {
            user: {
                service,
                port,
                name: username,
                pass: password
            },
            mail: {
                from: username,
                to,
                cc,
                subject
            }
        }
        this.transporter = nodemailer.createTransport(
            smtpTransport({
                host: service,
                port,
                auth: {
                    user: username,
                    pass: password
                }
            })
        )
    }

    send(body) {
        // let option = {...this.option.mail, text: body, html: body};
        this.option.mail.text = body;
        this.option.mail.html = body;
        this.transporter.sendMail(this.option.mail, (err, info) => {
            if (err) return console.error(err);

            console.log("Mail was sent!");
        })
    }
}

module.exports = Mail;