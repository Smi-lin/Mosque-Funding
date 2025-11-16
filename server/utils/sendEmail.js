import nodemailer from "nodemailer";

const sendEmail = async ({ to, donorName, amount, message, receiptUrl, type }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    let htmlContent = "";

    if (type === "donor") {
      // Donor confirmation email
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1E5631 ; color: white; padding: 20px; text-align: center;">
            <h2>Thank You for Your Donation!</h2>
          </div>
          <div style="padding: 20px; color: #333;">
            <p>Hi <strong>${donorName}</strong>,</p>
            <p>We have received your generous donation of <strong>₦${amount}</strong> to support the mosque renovation project.</p>
            ${message ? `<p>Your message: "${message}"</p>` : ""}
            ${receiptUrl ? `<p><strong>Receipt:</strong></p>
            <img src="${receiptUrl}" alt="Donation Receipt" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;" />` : ""}
            <p>We truly appreciate your support and generosity!</p>
            <div style="margin-top: 20px; text-align: center;">
              <a href="https://yourwebsite.com/donate" style="display: inline-block; padding: 10px 20px; background-color: #1E5631; color: white; border-radius: 5px; text-decoration: none;">Donate Again</a>
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #777;">This is an automated email. Please do not reply.</p>
          </div>
          <div style="background-color: #f3f3f3; padding: 10px; text-align: center; font-size: 12px; color: #555;">
            Mosque Funding Project © 2025
          </div>
        </div>
      `;
    } else if (type === "admin") {
      // Mosque/admin notification email
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1E5631; color: white; padding: 20px; text-align: center;">
            <h2>New Donation Received!</h2>
          </div>
          <div style="padding: 20px; color: #333;">
            <p>Hello Mosque Team,</p>
            <p>A new donation has been made to the mosque renovation project:</p>
            <ul>
              <li><strong>Donor Name:</strong> ${donorName}</li>
              <li><strong>Amount:</strong> ₦${amount}</li>
              ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
              ${receiptUrl ? `<li><strong>Receipt:</strong> <a href="${receiptUrl}" target="_blank">View Receipt</a></li>` : ""}
            </ul>
            <p>Please check your dashboard for more details.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #777;">This is an automated notification email.</p>
          </div>
          <div style="background-color: #f3f3f3; padding: 10px; text-align: center; font-size: 12px; color: #555;">
            Mosque Funding Project © 2025
          </div>
        </div>
      `;
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: type === "donor" ? "Donation Confirmation" : "New Donation Received",
      html: htmlContent,
    });

    console.log(`Email sent successfully to ${to}!`);
  } catch (error) {
    console.log("Email sending error:", error);
  }
};

export default sendEmail;
