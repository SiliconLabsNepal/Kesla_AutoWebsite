const supabase = require('../config/supabase');
const { sendFormNotifications } = require('../services/notify');
const { contactTemplates } = require('../emails/templates');

// Handles submissions from app/contact/page.tsx
async function createContactMessage(req, res, next) {
  try {
    const { name, phone, email, subject, message } = req.body;

    const { data, error } = await supabase
      .from('contact_messages')
      .insert({
        name: name || null,
        phone: phone || null,
        email: email || null,
        subject: subject || null,
        message: message || null,
      })
      .select()
      .single();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(201).json(data);

    sendFormNotifications(email, contactTemplates({ name, phone, email, subject, message })).catch((err) =>
      console.error('Contact notification error:', err)
    );
  } catch (err) {
    next(err);
  }
}

module.exports = { createContactMessage };
