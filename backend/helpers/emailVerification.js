const nodemailer = require("nodemailer");

async function emailVerification(email){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "nazmussakibprodhan@gmail.com",
          pass: "mzxtxbxtdqrlopnr",
        },
      });

      const info = await transporter.sendMail({
        from: '"Ecommerce Website " <maddison53@ethereal.email>', 
        to: email,
        subject: "Verify Your Email", 
        text: "Please Verify your Email", 
        html: "<div><img alt=sakib src=https://i.ibb.co/zbkngW8/IMG-20240327-131802.jpg style=width:200px><h1>Please Verify your Email</h1><p>You are wanted to create a account in our ecommerce website.if you wanted to continue please verify your email.</p><button style=background-color:teal;color:azure;font-size:20px;padding:15px;border:none;border-radius:10px>Verify</button></div>", 
      });
    
}

module.exports = emailVerification