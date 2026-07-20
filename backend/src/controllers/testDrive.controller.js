const supabase = require('../config/supabase');
const { sendFormNotifications } = require('../services/notify');
const { testDriveTemplates } = require('../emails/templates');

// Handles submissions from app/test-drive/page.tsx
async function createTestDrive(req, res, next) {
  try {
    const { firstName, lastName, phone, email, modelId, modelName, dealerId, preferredDate } = req.body;

    const { data, error } = await supabase
      .from('test_drives')
      .insert({
        first_name: firstName || null,
        last_name: lastName || null,
        phone: phone || null,
        email: email || null,
        model_id: modelId || null,
        dealer_id: dealerId || null,
        preferred_date: preferredDate || null,
      })
      .select()
      .single();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(201).json(data);

    sendFormNotifications(email, testDriveTemplates({ firstName, lastName, phone, email, modelId, modelName, dealerId, preferredDate })).catch((err) =>
      console.error('Test drive notification error:', err)
    );
  } catch (err) {
    next(err);
  }
}

module.exports = { createTestDrive };
