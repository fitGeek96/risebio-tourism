import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  console.log("Request received:", { name, email, message }); // Debugging

  if (req.method === "POST") {
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for 587
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      let mailOptions = {
        from: email,
        to: "taxap.fiverr@gmail.com",
        subject: `Message from ${name}`,
        text: message,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Email sent:", info); // Debugging

      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Email send error:", error); // Debugging
      res.status(500).json({ error: "Error sending email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
