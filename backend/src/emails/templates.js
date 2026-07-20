const { renderEmail } = require('./layout');

function testDriveTemplates(data) {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ');
  const vehicle = data.modelName || data.modelId;

  const customer = data.email
    ? {
        subject: 'Thanks for booking a test drive — Kesla Auto',
        html: renderEmail({
          heading: 'Thanks for booking a test drive!',
          intro: `Hi ${data.firstName || 'there'}, thank you for scheduling a test drive${vehicle ? ` for the <strong>${vehicle}</strong>` : ''}. Our team will reach out to you shortly to confirm your appointment.`,
          rows: [
            ['Vehicle', vehicle],
            ['Preferred Date', data.preferredDate],
            ['Phone', data.phone],
          ],
        }),
      }
    : null;

  const admin = {
    subject: `New Test Drive Request — ${fullName || 'Unknown'}`,
    html: renderEmail({
      heading: 'New Test Drive Request',
      intro: 'A customer just booked a test drive.',
      rows: [
        ['Name', fullName],
        ['Phone', data.phone],
        ['Email', data.email],
        ['Vehicle', vehicle],
        ['Dealer', data.dealerId],
        ['Preferred Date', data.preferredDate],
      ],
    }),
  };

  return { customer, admin };
}

function bookingTemplates(data) {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ');
  const vehicle = data.modelName || data.modelSlug;

  const customer = data.email
    ? {
        subject: `Thanks for your booking — ${vehicle || 'Kesla Auto'}`,
        html: renderEmail({
          heading: 'Thanks for booking your car!',
          intro: `Hi ${data.firstName || 'there'}, thank you for choosing to book the <strong>${vehicle}</strong>. Our team will reach out to you shortly to finalize your booking.`,
          rows: [
            ['Vehicle', vehicle],
            ['Color', data.color],
            ['Preferred Delivery', data.preferredDate],
            ['Phone', data.phone],
          ],
        }),
      }
    : null;

  const admin = {
    subject: `New Booking Request — ${vehicle || 'Unknown'}`,
    html: renderEmail({
      heading: 'New Booking Request',
      intro: 'A customer just submitted a "Book Your Car" request.',
      rows: [
        ['Name', fullName],
        ['Phone', data.phone],
        ['Email', data.email],
        ['Vehicle', vehicle],
        ['Color', data.color],
        ['Dealer', data.dealerId],
        ['Preferred Delivery', data.preferredDate],
        ['Notes', data.notes],
      ],
    }),
  };

  return { customer, admin };
}

function contactTemplates(data) {
  const customer = data.email
    ? {
        subject: "We've received your message — Kesla Auto",
        html: renderEmail({
          heading: 'Thanks for reaching out!',
          intro: `Hi ${data.name || 'there'}, thank you for contacting Kesla Auto${data.subject ? ` about <strong>${data.subject}</strong>` : ''}. Our team will get back to you shortly.`,
          rows: [
            ['Subject', data.subject],
            ['Message', data.message],
          ],
        }),
      }
    : null;

  const admin = {
    subject: `New Contact Message — ${data.subject || 'General Inquiry'}`,
    html: renderEmail({
      heading: 'New Contact Message',
      intro: 'A customer just sent a message through the contact form.',
      rows: [
        ['Name', data.name],
        ['Phone', data.phone],
        ['Email', data.email],
        ['Subject', data.subject],
        ['Message', data.message],
      ],
    }),
  };

  return { customer, admin };
}

function exchangeTemplates(data) {
  const desiredVehicle = data.desiredModelName || data.desiredModelSlug;
  const tradeIn = [data.year, data.make, data.model].filter(Boolean).join(' ');

  const customer = data.email
    ? {
        subject: 'Thanks for your exchange request — Kesla Auto',
        html: renderEmail({
          heading: 'Thanks for requesting a trade-in valuation!',
          intro: `Hi there, thank you for requesting to exchange your ${tradeIn || 'vehicle'}${desiredVehicle ? ` for a <strong>${desiredVehicle}</strong>` : ''}. Our team will reach out to you shortly with an estimated trade-in value.`,
          rows: [
            ['Trade-in Vehicle', tradeIn],
            ['Desired EV', desiredVehicle],
            ['Phone', data.phone],
          ],
        }),
      }
    : null;

  const admin = {
    subject: `New Exchange Request — ${tradeIn || 'Unknown vehicle'}`,
    html: renderEmail({
      heading: 'New Vehicle Exchange Request',
      intro: 'A customer just requested a trade-in valuation.',
      rows: [
        ['Phone', data.phone],
        ['Email', data.email],
        ['Desired EV', desiredVehicle],
        ['Trade-in Make', data.make],
        ['Trade-in Model', data.model],
        ['Year', data.year],
        ['Mileage (KM)', data.mileage],
      ],
    }),
  };

  return { customer, admin };
}

module.exports = { testDriveTemplates, bookingTemplates, contactTemplates, exchangeTemplates };
