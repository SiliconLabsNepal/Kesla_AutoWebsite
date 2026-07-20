const supabase = require('../config/supabase');
const { sendFormNotifications } = require('../services/notify');
const { exchangeTemplates } = require('../emails/templates');

// Handles submissions from app/exchange/page.tsx
async function createExchangeRequest(req, res, next) {
  try {
    const { phone, email, desiredModelSlug, desiredModelName, make, model, year, mileage } = req.body;

    if (!phone || !make || !model || !year) {
      return res.status(400).json({ message: 'phone, make, model and year are required' });
    }

    const { data: request, error: requestError } = await supabase
      .from('exchange_requests')
      .insert({
        phone,
        email: email || null,
        desired_model_slug: desiredModelSlug || null,
      })
      .select()
      .single();

    if (requestError) {
      return res.status(400).json({ message: requestError.message });
    }

    const { data: vehicle, error: vehicleError } = await supabase
      .from('exchange_vehicles')
      .insert({
        exchange_request_id: request.id,
        make,
        model,
        year,
        mileage: mileage || null,
      })
      .select()
      .single();

    if (vehicleError) {
      await supabase.from('exchange_requests').delete().eq('id', request.id);
      return res.status(400).json({ message: vehicleError.message });
    }

    res.status(201).json({ ...request, vehicle });

    sendFormNotifications(
      email,
      exchangeTemplates({ phone, email, desiredModelSlug, desiredModelName, make, model, year, mileage })
    ).catch((err) => console.error('Exchange notification error:', err));
  } catch (err) {
    next(err);
  }
}

module.exports = { createExchangeRequest };
