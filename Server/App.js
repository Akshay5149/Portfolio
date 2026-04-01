const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

// ✅ transporter OUTSIDE route (best practice)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "jadhavakshay1548@gmail.com",
    pass: "rkvkgeodosujwwir", // 👈 no spaces OR new app password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "jadhavakshay1548@gmail.com", // ✅ fix
    to: "jadhavakshay1548@gmail.com",
    replyTo: email, // ✅ important
    subject: `New message from ${name}`,
    text: message,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(" ERROR:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(5000, () => {
  console.log("The Server are Listening");
});