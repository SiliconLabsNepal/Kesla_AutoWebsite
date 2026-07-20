function renderRows(rows) {
  return rows
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 0;color:#6b7280;font-size:13px;width:160px;">${label}</td>
          <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;">${value}</td>
        </tr>`
    )
    .join('');
}

function renderEmail({ heading, intro, rows }) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;padding:24px;">
      <h2 style="color:#111827;margin-bottom:12px;">${heading}</h2>
      <p style="color:#374151;font-size:14px;line-height:1.6;">${intro}</p>
      ${rows.length
        ? `<table style="width:100%;border-collapse:collapse;margin-top:16px;border-top:1px solid #e5e7eb;">${renderRows(rows)}</table>`
        : ''
      }
      <p style="color:#9ca3af;font-size:12px;margin-top:32px;">Kesla Auto Pvt. Ltd. — Gathhaghar, Bhaktapur</p>
    </div>
  `;
}

module.exports = { renderEmail };
