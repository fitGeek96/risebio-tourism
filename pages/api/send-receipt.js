import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, offer } = req.body;
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      let mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: `Receipt for ${name}`,
        text: `Your selected offer: ${offer.title}\nTotal Price: ${offer.price}`,
      };

      const info = await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Error sending email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
