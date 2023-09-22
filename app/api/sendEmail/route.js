import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";

export async function POST(request) {
  const req = await request.json();

  const { fullName, phoneNumber } = req;

  const subject = `cashiyado.com | ${fullName} - יצר/ה קשר!`;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Read the email template file
  const emailTemplate = fs.readFileSync(
    "templates/emailTemplate.html",
    "utf-8",
  );

  // Replace placeholders in the template with actual values
  const emailContent = emailTemplate
    .replace(/{{ subject }}/g, subject)
    .replace(/{{ fullName }}/g, fullName)
    .replace(/{{ phoneNumber }}/g, phoneNumber);

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: subject,
    html: emailContent,
  };

  return await transporter
    .sendMail(mailOptions)
    .then((response) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 },
      );
    })
    .catch((error) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 },
      );
    });
}
