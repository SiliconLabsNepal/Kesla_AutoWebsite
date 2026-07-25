import { NextResponse } from 'next/server';
import { supabase } from '@/lib/server/supabase';
import { sendFormNotifications } from '@/lib/server/notify';
import { bookingTemplates } from '@/lib/server/email-templates';

export async function POST(request: Request) {
  try {
    const { modelSlug, modelName, firstName, lastName, phone, email, color, dealerId, preferredDate, notes } = await request.json();

    if (!modelSlug || !firstName || !phone) {
      return NextResponse.json({ message: 'modelSlug, firstName and phone are required' }, { status: 400 });
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
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    // Fire-and-forget email notifications
    sendFormNotifications(
      email,
      bookingTemplates({ modelSlug, modelName, firstName, lastName, phone, email, color, dealerId, preferredDate, notes })
    ).catch((err) => console.error('Booking notification error:', err));

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
