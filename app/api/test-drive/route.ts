import { NextResponse } from 'next/server';
import { supabase } from '@/lib/server/supabase';
import { sendFormNotifications } from '@/lib/server/notify';
import { testDriveTemplates } from '@/lib/server/email-templates';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, phone, email, modelId, modelName, dealerId, preferredDate } = await request.json();

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
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    // Fire-and-forget email notifications
    sendFormNotifications(
      email,
      testDriveTemplates({ firstName, lastName, phone, email, modelId, modelName, dealerId, preferredDate })
    ).catch((err) => console.error('Test drive notification error:', err));

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
