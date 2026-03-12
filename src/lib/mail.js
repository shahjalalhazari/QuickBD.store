import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD
  },
});

export async function sendOtpEmail(email, otp) {
  const info = await transporter.sendMail({
    from: `"QuickBD.store" <${process.env.EMAIL_SERVER_USER}>`,
    to: email,
    subject: "Your verificaiton OTP Code.",
    html: `<p>Your OTP code is: <b>${otp}.</b> Do not share it with anyone.</p>
          <p>It will expire in next 3 minutes.</p>`
  });
  console.log("OTP email sent:", info.messageId);
};