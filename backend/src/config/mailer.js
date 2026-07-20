const nodemailer = require('nodemailer');

// Single Zoho transporter for the info@keslaautonepal.com mailbox — used for
// both admin notifications and customer confirmation emails.
const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST,
  port: Number(process.env.ZOHO_SMTP_PORT) || 465,
  secure: process.env.ZOHO_SMTP_SECURE !== 'false',
  auth: {
    user: process.env.ZOHO_SMTP_USER,
    pass: process.env.ZOHO_SMTP_PASS,
  },
});

module.exports = transporter;
