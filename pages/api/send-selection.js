import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, destination, date } = req.body;

    if (!destination || !date || !username) {
      return res.status(400).json({
        success: false,
        message: "اسم المستخدم الوجهة والتاريخ مطلوبة",
      });
    }

    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.GMAIL_USER, // Your Gmail user
          pass: process.env.GMAIL_PASS, // Your Gmail password
        },
      });

      let mailOptions = {
        from: process.env.GMAIL_USER,
        to: "fitgeek96@gmail.com", // Replace with distributor's email
        subject: `Nouvelle sélection de voyages : ${destination}`,
        text: `
        Travel Selection Details
        
        A client has selected the following details:
        
        - Username: ${username}
        - Destination: ${destination}
        - Date: ${date}
        
        Please take the necessary action.
          `,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Email sent:", info);
      res
        .status(200)
        .json({ success: true, message: "تم إرسال البريد الإلكتروني بنجاح!" });
    } catch (error) {
      console.error("Email send error:", error);
      res
        .status(500)
        .json({ success: false, message: "خطأ في إرسال البريد الإلكتروني." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
