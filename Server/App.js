const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express();



app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

// Email route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use any email service
    auth: {
      user: "jadhavakshay1548@gmail.com", // Replace with your email
      pass: "Satara@1234",     // Use App Password if Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: "jadhavakshay1548@gmail.com", // Where you want to receive messages
    subject: `New message from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(5000, ()=>{
    console.log("The Server are Listening");
})