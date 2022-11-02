import { createTransport  } from 'nodemailer'
export default function contact(req, res) {
  const mail = req.body

  const transporter = createTransport({
    service: process.env.MAIL_SERVICE,
    host: process.env.MAIL_SMTP,
    port: 465,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
  });

  const mailData = {
    from: `"${mail.name}" <${mail.email}>`, // sender address
    to: "therealakarexcel@gmail.com", // list of receivers
    subject: mail.subject, // Subject line
    text: `
    Quote
    name: ${mail.name}
    phone: ${mail.phone}
    email: ${mail.email}
    `, // plain text body
    html: `
    <div style=" padding: 10px">
    <h1  style=" text-align:center">Quotation</h1>
    <h4>Prospect ${mail.name}</h4>
    <p>${mail.message}</p>
    <br/>
    <p>From ${mail.email}</p>
    </div>
    `, // html body
  }
   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}