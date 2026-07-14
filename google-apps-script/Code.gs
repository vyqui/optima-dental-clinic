/**
 * Optima Dental — lead intake Web App (Google Apps Script)
 * ---------------------------------------------------------------------------
 * Every lead form on the site POSTs JSON to this Web App. It emails the clinic
 * (and optionally appends to a Google Sheet). The site tags each submission
 * with a `source` so the email is titled and formatted correctly:
 *
 *   source "landing" — Meta landing page (oferte-voucher-meta) booking form
 *                      → subject "LP Lead: <name>", lists every field
 *   source "contact" — main-site contact page form
 *   source "popup"   — main-site appointment pop-up (name + phone only)
 *
 * The client may also send an explicit `subject`; if present it wins.
 *
 * HOW TO UPDATE (keeps the same /exec URL the site already uses):
 *   1. Open the existing Apps Script project for this Web App
 *      (script.google.com → the project behind the /macros/s/AKfycby…/exec URL).
 *   2. Replace the code with this file and Save.
 *   3. Fill in the CONFIG block below (recipients, and the Sheet ID if you log
 *      leads to a spreadsheet — paste the same ID the old script used so you
 *      don't lose logging).
 *   4. Deploy ▸ Manage deployments ▸ edit the active deployment ▸ Version:
 *      "New version" ▸ Deploy. Editing the existing deployment keeps the URL,
 *      so nothing on the website needs to change.
 */

// ─── CONFIG ────────────────────────────────────────────────────────────────
// Who receives every lead email. Comma-separated. Adjust to your addresses.
var LEAD_RECIPIENTS = 'contact@optimadentalclinic.com';

// Optional: append every lead to a Google Sheet. Paste the Sheet ID between the
// quotes (the long token in the sheet URL) to enable it. Leave '' to skip —
// the email is sent either way. Use the SAME id your current script uses so
// existing logging keeps working.
var LEAD_SHEET_ID = '';
var LEAD_SHEET_TAB = 'Leads';
// ────────────────────────────────────────────────────────────────────────────

function doPost(e) {
  var data = {};
  try {
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }
  } catch (err) {
    data = (e && e.parameter) || {};
  }

  var source = String(data.source || 'contact').toLowerCase();
  var name = (data.name || '').toString().trim();

  // Subject: an explicit subject from the client wins; else per-source default.
  var subject = (data.subject || '').toString().trim();
  if (!subject) {
    if (source === 'landing') {
      subject = 'LP Lead: ' + (name || 'Necunoscut');
    } else if (source === 'popup') {
      subject = 'Lead nou – Optima Dental (pop-up site)';
    } else {
      subject = 'Lead nou – Optima Dental (contact site)';
    }
  }

  var sourceLabel =
      source === 'landing' ? 'Landing Page Meta (oferte-voucher)' :
      source === 'popup'   ? 'Formular pop-up - consultatie gratuita' :
                             'Formular contact site';

  // Body: one line per field, skipping anything that wasn't provided.
  var rows = [];
  function add(label, value) {
    value = (value == null ? '' : String(value)).trim();
    if (value && value !== '—') rows.push(label + ': ' + value);
  }
  add('Nume', name);
  add('Email', data.email);
  add('Telefon', data.phone);
  add('Serviciu dorit', data.service);
  add('Voucher', data.voucher);
  add('Data preferată', data.data_preferata);
  add('Ora preferată', data.ora_preferata);
  // Free-form message. For landing leads the discrete fields above already
  // cover it, so skip to avoid duplicating the same details.
  if (source !== 'landing') add('Mesaj', data.message);
  add('Sursa', sourceLabel);
  add('Data', new Date().toString());

  var body = 'Lead nou de pe site:\n\n' + rows.join('\n');

  MailApp.sendEmail({ to: LEAD_RECIPIENTS, subject: subject, body: body });

  // Optional Google Sheet log — never let a logging error block the email.
  if (LEAD_SHEET_ID) {
    try {
      var ss = SpreadsheetApp.openById(LEAD_SHEET_ID);
      var sheet = ss.getSheetByName(LEAD_SHEET_TAB) || ss.insertSheet(LEAD_SHEET_TAB);
      sheet.appendRow([
        new Date(), source, name, data.email || '', data.phone || '',
        data.service || '', data.voucher || '', data.data_preferata || '',
        data.ora_preferata || '', data.message || ''
      ]);
    } catch (err) { /* ignore */ }
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Lets you open the /exec URL in a browser to confirm the deployment is live.
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
