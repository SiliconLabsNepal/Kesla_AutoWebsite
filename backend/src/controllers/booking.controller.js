const supabase = require('../config/supabase');
const { sendFormNotifications } = require('../services/notify');
const { bookingTemplates } = require('../emails/templates');

// Handles submissions from app/book/[slug]/page.tsx
async function createBooking(req, res, next) {
  try {
    const { modelSlug, modelName, firstName, lastName, phone, email, color, dealerId, preferredDate, notes } = req.body;

    if (!modelSlug || !firstName || !phone) {
      return res.status(400).json({ message: 'modelSlug, firstName and phone are required' });
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert({
        model_slug: modelSlug,
        first_name: firstName,
        last_name: lastName || null,
        phone,
        email: email || null,
        color: color || null,
        dealer_id: dealerId || null,
        preferred_date: preferredDate || null,
        notes: notes || null,
      })
      .select()
      .single();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(201).json(data);

    sendFormNotifications(
      email,
      bookingTemplates({ modelSlug, modelName, firstName, lastName, phone, email, color, dealerId, preferredDate, notes })
    ).catch((err) => console.error('Booking notification error:', err));
  } catch (err) {
    next(err);
  }
}

module.exports = { createBooking };
