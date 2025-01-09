import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // Gmail use kar rahe hain
  auth: {
    user: process.env.EMAIL_USER, // Aapka Gmail email
    pass: process.env.EMAIL_PASSWORD, // Aapka Gmail password
  },
});

// POST request handler
export async function POST(request: Request) {
  try {
    // Request body se data extract karein
    const { to, subject, text } = await request.json();

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    // Email send karein
    await transporter.sendMail(mailOptions);

    // Success response
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    // Error response
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}