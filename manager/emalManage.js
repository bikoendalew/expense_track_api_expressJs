const nodemailer=require('nodemailer')


const emailManager=async(to,text,subject)=>{
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user:process.env.email_user,
          pass: process.env.email_password
        }
      });
      
      await transport.sendMail({
        to:to,
        from:"info@expensetracker.com",
        text:text,
        subject:subject
      })
}

module.exports = emailManager