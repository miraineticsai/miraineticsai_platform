import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, help, message } = body;

    // In a real production app, you would use a service like Resend or SendGrid here
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@mirainetics.com',
    //   to: 'contact@mirainetics.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInquiry: ${help}\nMessage: ${message}`
    // });

    console.log("Contact Form Submission received:", { name, email, company, help, message });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 });
  }
}
