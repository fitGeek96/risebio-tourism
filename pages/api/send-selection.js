import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, numTel, level } = req.body;

    if (!level || !numTel || !fullName) {
      return res.status(400).json({
        success: false,
        message: "ضروري ادخال الاسم و اللقب و المستوى",
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
        tls: {
          rejectUnauthorized: false, // Allows self-signed certificates (not recommended for production)
        },
      });

      let mailOptions = {
        from: process.env.GMAIL_USER,
        to: "ablasns19@gmail.com", // Replace with distributor's email
        subject: `Nouvelle Inscription`,
        text: `
        Inscription Details
        
        - Nom & Prenom: ${fullName}
        - Numero de Tel: ${numTel}
        - Niveau actuel: ${level}
        
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
