const { createClient } = require('@supabase/supabase-js');

const rawUrl = process.env.SUPABASE_URL || '';
const supabaseUrl = rawUrl ? new URL(rawUrl).origin : rawUrl;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
