// app/api/send-email/route.ts (Next.js 13+)
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;

    // 1. Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password or SMTP password
      },
    });

    // 2. Mail to admin (you)
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.ADMIN_EMAIL, // your email
      subject: `New Consultation Request from ${name}`,
      html: `
       <p>Hello Admin,</p>
  <p>You have received a new contact request from <strong>${email}</strong>.</p>
  <p>Please review the request at: 
    <a href="https://betopialimited.com/contact" target="_blank" style="color:#FF9500;">View Contact</a>
  </p>
  <p>Thank you!</p>
      `,
    });

    // 3. Mail to user (confirmation)
  await transporter.sendMail({
  from: `"Betopia" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "We Received Your Request!",
  html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
    
    <!-- Header / Logo -->
    <div style="background: #fff; text-align: center; padding: 0px;">
      <img src="https://media.licdn.com/dms/image/v2/D560BAQEP0JzxAP8o8Q/company-logo_200_200/B56ZjA0KlnG0AI-/0/1755581558506/betopia_lmited_logo?e=2147483647&v=beta&t=ton4gvMq4D0mJcnde6zi1AleLUDnoOs2QM2SFlOFBsE" alt="Betopia" style="width: 150px;"/>
    </div>

    <!-- Body -->
    <div style="background: #f9f9f9; padding: 30px; text-align: center;">
      <h2 style="color: #333;">Thank you for reaching out!</h2>
      <p style="color: #555; font-size: 16px; line-height: 1.5;">
        Hi ${name},
      </p>
      <p style="color: #555; font-size: 16px; line-height: 1.5;">
        We have received your request from our website form. Our team is reviewing your submission and will get in touch with you shortly.
      </p>
      <p style="color: #555; font-size: 16px; line-height: 1.5;">
        If you have any urgent questions, feel free to reach us directly at <a href="mailto:${process.env.EMAIL_USER}" style="color: #1a73e8;">${process.env.EMAIL_USER}</a>.
      </p>
      <p style="color: #555; font-size: 16px; line-height: 1.5;">
        We appreciate your interest and look forward to connecting with you soon.
      </p>
      <p style="color: #555; font-size: 16px; line-height: 1.5;">
        Warm regards,<br/>
        Betopia Team
      </p>
    </div>

    <!-- Footer -->
    <div style="background: #111; color: #fff; text-align: center; padding: 20px; font-size: 12px;">
      <p style="margin: 0;">Betopia Email Campaign<br/>
      Email: <a href="mailto:muhammad@betopiagroup.com" style="color: #fff;">muhammad@betopiagroup.com</a><br/>
      Website: <a href="https://betopialimited.com/" style="color: #fff;">betopialimited.com</a>
      </p>
      <p style="margin-top: 10px; font-size: 10px; color: #ccc;">
        © 2026 Betopia. All rights reserved.<br/>
        This is an automated email from Betopia.
      </p>
    </div>
  </div>
  `
});



    return new Response(JSON.stringify({ message: "Emails sent" }), {
      status: 200,
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
