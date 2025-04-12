import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
// This will be set in deployment platform (like Netlify/Vercel)
const resend = new Resend(process.env.RESEND_API_KEY || 're_3UrF9BZL_G68MTU2UF68KaYZb9nnW457W');

// Add a constant for the registered email to make it easier to update
const REGISTERED_EMAIL = 'nohatekfounder@gmail.com';

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

    // For development/testing - send all emails to the registered email
    // Send email to Zach (actually to registered email during testing)
    const { data: dataToOwner, error: errorToOwner } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: REGISTERED_EMAIL, // Always send to registered email in testing
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // For development/testing, we'll skip the confirmation email
    // since we can only send to the registered email
    // and add information about this in the response
    const dataToSender = null;
    const errorToSender = null;
    
    // In production with verified domain, uncomment this code
    /*
    const { data: dataToSenderResponse, error: errorToSenderResponse } = await resend.emails.send({
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
    dataToSender = dataToSenderResponse;
    errorToSender = errorToSenderResponse;
    */

    if (errorToOwner || errorToSender) {
      const errorObj = errorToOwner || errorToSender;
      const errorMessage = typeof errorObj === 'object' && errorObj !== null 
        ? errorObj.message || JSON.stringify(errorObj)
        : String(errorObj);

      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Email sent successfully', 
        data: { dataToOwner, dataToSender },
        note: 'In testing mode, confirmation emails are disabled. Only the notification to the site owner is sent (to the registered email).'
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Email sending error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to send email', message: errorMessage },
      { status: 500 }
    );
  }
}
