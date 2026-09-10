import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // TODO: Wire up your preferred email service here.
    // Option A — Resend:
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "Prestron Contact <noreply@prestron.com>",
    //     to: process.env.CONTACT_EMAIL || "contact@prestron.com",
    //     subject: `Website contact — ${name}`,
    //     text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    //   });
    //
    // Option B — Formspree:
    //   await fetch(`https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ name, email, message }),
    //   });

    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
