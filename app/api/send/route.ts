import MessageUsEmail from '../../components/MessageUsEmail';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest) {
  console.log("Received request:", req);
  const { body } = await req.json();
  console.log("Parsed body:", body);
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: subject,
      react: MessageUsEmail({name: email, email: email, message: message}),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}