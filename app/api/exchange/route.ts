import { NextResponse } from 'next/server';
import { supabase } from '@/lib/server/supabase';
import { sendFormNotifications } from '@/lib/server/notify';
import { exchangeTemplates } from '@/lib/server/email-templates';

export async function POST(request: Request) {
  try {
    const { phone, email, desiredModelSlug, desiredModelName, make, model, year, mileage } = await request.json();

    if (!phone || !make || !model || !year) {
      return NextResponse.json({ message: 'phone, make, model and year are required' }, { status: 400 });
    }

    const { data: exchangeRequest, error: requestError } = await supabase
      .from('exchange_requests')
      .insert({
        phone,
        email: email || null,
        desired_model_slug: desiredModelSlug || null,
      })
      .select()
      .single();

    if (requestError) {
      return NextResponse.json({ message: requestError.message }, { status: 400 });
    }

    const { data: vehicle, error: vehicleError } = await supabase
      .from('exchange_vehicles')
      .insert({
        exchange_request_id: exchangeRequest.id,
        make,
        model,
        year,
        mileage: mileage || null,
      })
      .select()
      .single();

    if (vehicleError) {
      // Rollback the exchange request if vehicle insert fails
      await supabase.from('exchange_requests').delete().eq('id', exchangeRequest.id);
      return NextResponse.json({ message: vehicleError.message }, { status: 400 });
    }

    // Fire-and-forget email notifications
    sendFormNotifications(
      email,
      exchangeTemplates({ phone, email, desiredModelSlug, desiredModelName, make, model, year, mileage })
    ).catch((err) => console.error('Exchange notification error:', err));

    return NextResponse.json({ ...exchangeRequest, vehicle }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
