import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD
  },
});

export async function sendOtpEmail(email, otp) {
  const info = await transporter.sendMail({
    from: `${process.env.EMAIL_FROM} <${process.env.EMAIL_SERVER_USER}>`,
    to: email,
    subject: "Your verificaiton OTP Code.",
    html: `<p>Your OTP is: <b>${otp}.</b> Do not share with anyone.</p>
          <p>It will expire after 3 minutes.</p> <br/> Thank You<br/> QuickBD.store Team`
  });
  console.log("OTP email sent:", info.messageId);
};