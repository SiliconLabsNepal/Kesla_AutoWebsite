import { NextResponse } from 'next/server';
import { supabase } from '@/lib/server/supabase';
import { sendFormNotifications } from '@/lib/server/notify';
import { contactTemplates } from '@/lib/server/email-templates';

export async function POST(request: Request) {
  try {
    const { name, phone, email, subject, message } = await request.json();

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
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    // Fire-and-forget email notifications
    sendFormNotifications(
      email,
      contactTemplates({ name, phone, email, subject, message })
    ).catch((err) => console.error('Contact notification error:', err));

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
