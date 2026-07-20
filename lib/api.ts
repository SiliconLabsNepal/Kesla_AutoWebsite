const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function postJSON(path: string, body: unknown) {
  const res = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || 'Something went wrong. Please try again.');
  }

  return data;
}

export function submitTestDrive(payload: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  modelId: string;
  modelName: string;
  dealerId: string;
  preferredDate: string;
}) {
  return postJSON('/api/test-drive', payload);
}

export function submitBooking(payload: {
  modelSlug: string;
  modelName: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  color: string;
  dealerId: string;
  preferredDate: string;
  notes: string;
}) {
  return postJSON('/api/bookings', payload);
}

export function submitContactMessage(payload: {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}) {
  return postJSON('/api/contact', payload);
}

export function submitExchangeRequest(payload: {
  phone: string;
  email: string;
  desiredModelSlug: string;
  desiredModelName: string;
  make: string;
  model: string;
  year: string;
  mileage: string;
}) {
  return postJSON('/api/exchange', payload);
}
