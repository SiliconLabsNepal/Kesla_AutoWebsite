import transporter from './mailer';
import type { EmailPair } from './email-templates';

export async function sendFormNotifications(customerEmail: string | undefined, { customer, admin }: EmailPair) {
  const tasks: Promise<unknown>[] = [];

  if (customer && customerEmail) {
    tasks.push(
      transporter.sendMail({
        from: process.env.CUSTOMER_MAIL_FROM,
        to: customerEmail,
        replyTo: process.env.ADMIN_EMAIL,
        subject: customer.subject,
        html: customer.html,
      })
    );
  }

  if (admin && process.env.ADMIN_EMAIL) {
    tasks.push(
      transporter.sendMail({
        from: process.env.ADMIN_MAIL_FROM,
        to: process.env.ADMIN_EMAIL,
        replyTo: customerEmail || undefined,
        subject: admin.subject,
        html: admin.html,
      })
    );
  }

  const results = await Promise.allSettled(tasks);
  results.forEach((result) => {
    if (result.status === 'rejected') {
      console.error('Failed to send notification email:', result.reason);
    }
  });
}
