const supabase = require('../config/supabase');

async function checkHealth(req, res) {
  const { error } = await supabase.from('bookings').select('id').limit(1);

  if (error) {
    return res.status(500).json({ connected: false, error: error.message });
  }

  res.json({ connected: true });
}

module.exports = { checkHealth };
