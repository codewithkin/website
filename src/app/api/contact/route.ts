import nodemailer from "nodemailer";
import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";

export async function POST(request: NextRequest) {
  try {
    const {name, email, subject, message} = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {error: "Missing required fields"},
        {status: 400}
      );
    }

    // Configure your SMTP transporter (example uses Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kinzinzombe07@gmail.com",
        pass: process.env.SMTP_PASSWORD || "your-email-app-password",
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "kinzinzombe07@gmail.com",
      subject: `New Contact Form Message: ${subject}`,
      text: `
        You have received a new message from your website contact form.

        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}
      `,
      html: `
        <p>You have received a new message from your website contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({message: "Message sent successfully"});
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({error: "Internal Server Error"}, {status: 500});
  }
}
