"use server";
const nodemailer = require("nodemailer");
const {
  hostName,
  portNumber,
  emailUsername,
  emailPassword,
  siteEmail,
  siteFromEmail,
  siteName,
  copyright,
  siteLogo,
  secureStatus,
  tls,
} = require("../utils/variable");

const transporter = nodemailer.createTransport({
  host: hostName,
  port: portNumber,
  auth: {
    user: emailUsername,
    pass: emailPassword,
  },
  secure: secureStatus,
  requireTLS: tls,
});

export async function sendMail({ sendTo, subject, message, name }) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error("Something Went Wrong", emailUsername, emailPassword, error);
    return;
  }
  const info = await transporter.sendMail({
    from: siteFromEmail,
    to: sendTo,
    subject: subject,
    html: `
    <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Contact Enquiry Notification</title>
     <style>
         /* Import Inter font */
         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
     </style>
 </head>
 <body style="font-family: 'Inter', sans-serif; margin: 0; padding: 0; background-color: #fff; color: #111;">
     <div style="max-width: 600px; margin: 0 auto; background-color: #fff;">
         <table role="presentation" width="100%" cellspacing="0" cellPadding="0" style="border-collapse: collapse; background:#fff;">
             <!-- Header with Logo and Title -->
             <!-- Body Content -->
             <tr>
                 <td style="padding: 20px; color: #15181E;">
                     <p style="font-size: 16px; line-height: 1.6; color:#666; padding-top:10px; padding-bottom:10px; border-bottom:solid thin #ddd; margin-bottom:20px;">${subject}</p>
                     <img src="${siteLogo}" alt="Company Logo" style="height: 50px; margin-bottom: 20px;" />
                    <P>${message}</p>
                 </td>
             </tr>
 
         </table>
     </div>
 </body>
 </html>
     `,
  });

  return info;
}

export async function ContactEmailTemplate(name, email, phone, message) {
  return `
  <!-- ✅ CHANGES: replaced #35935A with #63AF51, and #D1B33B with #145D3E -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Inquiry</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  </style>
</head>
<body style="margin:0; padding:0; font-family: 'Inter', sans-serif; background-color: #f9f9f9; color: #333;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 40px 15px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff; border-radius: 12px; box-shadow: 0 0 20px rgba(0,0,0,0.05); overflow: hidden;">

          <!-- Header -->
          <tr>
            <td align="center" style="background-color: #63AF51; padding: 40px 20px;">
              <h1 style="color: #fff; font-size: 24px; font-weight: 600; margin: 0;">New Contact Message</h1>
              <p style="color: #e8f5ee; font-size: 14px; margin-top: 8px;">Someone reached out from your website</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px 40px;">
              <h2 style="font-size: 20px; font-weight: 600; color: #63AF51; margin: 0 0 10px;">Hello Admin,</h2>
              <p style="font-size: 15px; color: #555;">You've received a new inquiry. Here are the contact details:</p>

              <!-- User Profile -->
              <div style="text-align: center; margin: 30px 0;">
                <div style="width: 80px; height: 80px; background-color: #145D3E; color: #fff; font-size: 32px; font-weight: bold; line-height: 80px; border-radius: 50%; margin: auto;">
                  ${name.charAt(0).toUpperCase()}
                </div>
                <h3 style="margin: 10px 0 5px; font-size: 20px; color: #333;">${name}</h3>
              </div>

              <!-- Info Cards -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                <tr>
                  <td style="width: 50%; padding-right: 10px;">
                    <div style="background-color: #f2f9f5; padding: 15px; border-radius: 10px;">
                      <strong style="font-size: 13px; color: #888;">Email</strong>
                      <p style="margin: 5px 0 0; font-size: 14px;">
                        <a href="mailto:${email}" style="color: #63AF51; text-decoration: none;">${email}</a>
                      </p>
                    </div>
                  </td>
                  <td style="width: 50%; padding-left: 10px;">
                    <div style="background-color: #fdf8e4; padding: 15px; border-radius: 10px;">
                      <strong style="font-size: 13px; color: #888;">Phone</strong>
                      <p style="margin: 5px 0 0; font-size: 14px;">
                        <a href="tel:${phone}" style="color: #63AF51; text-decoration: none;">${phone}</a>
                      </p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Message Box -->
              <div style="background-color: #fcfcfc; border-left: 4px solid #145D3E; border-radius: 8px; padding: 20px;">
                <strong style="display: block; margin-bottom: 10px; color: #145D3E;">Message</strong>
                <p style="margin: 0; font-size: 15px; color: #444; line-height: 1.7;">
                  ${message}
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color: #f2f2f2; padding: 20px;">
              <p style="font-size: 13px; color: #888; margin: 0;">&copy; ${new Date().getFullYear()} EEIS All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>



  `;
}

// New function for user thank you email template
export async function ThankYouEmailTemplate(name) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You for Contacting Us</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  </style>
</head>
<body style="margin:0; padding:0; font-family: 'Inter', sans-serif; background-color: #f9f9f9; color: #333;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 40px 15px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff; border-radius: 12px; box-shadow: 0 0 20px rgba(0,0,0,0.05); overflow: hidden;">

          <!-- Header -->
          <tr>
            <td align="center" style="background-color: #63AF51; padding: 40px 20px;">
              <h1 style="color: #fff; font-size: 24px; font-weight: 600; margin: 0;">Thank You!</h1>
              <p style="color: #e8f5ee; font-size: 14px; margin-top: 8px;">We've received your message</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="width: 80px; height: 80px; background-color: #145D3E; color: #fff; font-size: 32px; font-weight: bold; line-height: 80px; border-radius: 50%; margin: auto;">
                  ${name.charAt(0).toUpperCase()}
                </div>
                <h2 style="margin: 15px 0 0; font-size: 20px; color: #333;">Hello ${name}!</h2>
              </div>

              <div style="text-align: center; margin-bottom: 30px;">
                <h3 style="font-size: 18px; font-weight: 600; color: #63AF51; margin: 0 0 15px;">Thanks for contacting us!</h3>
                <p style="font-size: 16px; color: #555; line-height: 1.6; margin: 0;">
                  We've received your message and will get back to you as soon as possible. 
                  We appreciate you taking the time to reach out to us.
                </p>
              </div>

              <div style="background-color: #f2f9f5; padding: 20px; border-radius: 10px; text-align: center;">
                <p style="margin: 0; font-size: 14px; color: #666;">
                  <strong>What's next?</strong><br>
                  Our team will review your message and respond within 24-48 hours.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color: #f2f2f2; padding: 20px;">
              <p style="font-size: 13px; color: #888; margin: 0;">&copy; ${new Date().getFullYear()} ${siteName} All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}