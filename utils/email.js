const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create the Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // 2) Define the Email options
  const mailOPtions = {
    from: 'Schitiz Sharma <schitizsharma@hotmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  };
  // 3) Actually send the email
  await transporter.sendMail(mailOPtions);
};

module.exports = sendEmail;
