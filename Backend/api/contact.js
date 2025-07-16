const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

const ADMIN_EMAIL = 'adarshreddy2106@gmail.com';
const ADMIN_PASS = 'hlph uzwm tlgb ubwt'; // use your mail and app password

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ADMIN_EMAIL,
    pass: ADMIN_PASS,
  },
});

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    // Create email subject
    const emailSubject = `ACE Website Contact: Message from ${name}`;

    // Create email content
    const emailContent = `
You have received a new message from the ACE website contact form:

Name: ${name}
Email: ${email}
Message:
${message}

---
This message was sent from the Association of Civil Engineering website.
Reply directly to this email to respond to the sender.
    `;

    // Send email
    await transporter.sendMail({
      from: `"ACE Website" <${ADMIN_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: emailSubject,
      replyTo: email,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This message was sent from the Association of Civil Engineering website.<br>
            Reply directly to this email to respond to the sender.
          </p>
        </div>
      `
    });

    console.log(`Email sent successfully from ${email}`);
    res.json({ success: true, message: 'Message sent successfully!' });

  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

module.exports = router;