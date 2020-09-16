const bodyParser = require("body-parser")
const express = require("express")
const nodemailer = require("nodemailer")
const app = express()
app.use(bodyParser.urlencoded())
const contactAddress = "info@luxfloors.co.uk"
const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.production.GMAIL_ADDRESS,
    pass: process.env.production.GMAIL_PASSWORD,
  },
})
nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 993,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "info@luxfloors.co.uk",
      pass: "4SEbnP4XHnSH"
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
  });
app.post("/contact", function (req, res) {
  mailer.sendMail(
    {
      from: req.body.from,
      to: [contactAddress],
      subject: req.body.subject || "[No subject]",
      html: req.body.message || "[No message]",
    },
    function (err, info) {
      if (err) return res.status(500).send(err)
      res.json({ success: true })
    }
  )
})
app.listen(3000)