import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, service, message } = await req.json();
    
    // Automatically get the current year
    const currentYear = new Date().getFullYear();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Juan Medical Notifications" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Service Request: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f2f6f5; color: #334155; }
            .wrapper { width: 100%; background-color: #f2f6f5; padding: 40px 0; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-top: 6px solid #1e635f; overflow: hidden; }
            .header { padding: 30px 40px; border-bottom: 1px solid #eef2f1; }
            .header h1 { margin: 0; font-size: 20px; color: #1e635f; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; }
            .header span { color: #8bc34a; }
            .content { padding: 40px; }
            .field-group { margin-bottom: 25px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8; font-weight: 700; margin-bottom: 5px; display: block; }
            .value { font-size: 16px; color: #1e293b; font-weight: 500; line-height: 1.5; }
            .service-pill { display: inline-block; background-color: #eef3f2; color: #1e635f; padding: 6px 14px; font-size: 13px; font-weight: 700; border-radius: 2px; }
            .message-box { background-color: #f8fafc; padding: 25px; border-left: 3px solid #8bc34a; margin-top: 10px; }
            .message-text { font-size: 15px; color: #475569; line-height: 1.7; white-space: pre-wrap; }
            .footer { padding: 25px; text-align: center; background-color: #1e635f; }
            .footer p { margin: 0; font-size: 11px; color: #ffffff; opacity: 0.7; letter-spacing: 0.5px; }
            a { color: #1e635f; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="header">
                <h1>Juan Medical <span>Inquiry</span></h1>
              </div>
              <div class="content">
                <div class="field-group">
                  <span class="label">Inquirer Name</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field-group">
                  <span class="label">Phone Number</span>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                <div class="field-group">
                  <span class="label">Service Requested</span>
                  <div class="value">
                    <div class="service-pill">${service || 'Not Specified'}</div>
                  </div>
                </div>
                <div class="field-group" style="margin-bottom: 0;">
                  <span class="label">Message</span>
                  <div class="message-box">
                    <div class="message-text">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>© ${currentYear} Juan Medical Company. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return Response.json({ success: false });
  }
}