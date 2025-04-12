import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
// This will be set in deployment platform (like Netlify/Vercel)
const resend = new Resend(process.env.RESEND_API_KEY || 're_3UrF9BZL_G68MTU2UF68KaYZb9nnW457W');

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate the inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to Zach
    const { data: dataToOwner, error: errorToOwner } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'zturner1102@protonmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation to the submitter
    const { data: dataToSender, error: errorToSender } = await resend.emails.send({
      from: 'Zachary Turner <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hello ${name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,</p>
        <p>Zachary Turner</p>
      `,
    });

    if (errorToOwner || errorToSender) {
      return NextResponse.json(
        { error: errorToOwner || errorToSender },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data: { dataToOwner, dataToSender } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
