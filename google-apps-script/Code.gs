/**
 * Optima Dental — lead intake Web App (Google Apps Script)
 * ---------------------------------------------------------------------------
 * Drop-in replacement for the current pop-up-only doPost. Every lead form on
 * the site POSTs JSON here; this script logs the lead to the spreadsheet and
 * emails the clinic. It routes by the `source` the site sends:
 *
 *   source "landing" — Meta landing page (oferte-voucher) booking form
 *                      → subject "LP Lead: <name>", lists EVERY field
 *   source "popup"   — main-site appointment pop-up (name + phone only)
 *   source "contact" — main-site contact page form
 *
 * An explicit `subject` from the site wins over the per-source default, so
 * future subject changes need no edit here.
 *
 * TO UPDATE (keeps the same /exec URL, so the website needs no change):
 *   1. Open this Apps Script project (it is bound to the "Cereri consult" sheet).
 *   2. Replace all the code with this file and Save.
 *   3. Deploy ▸ Manage deployments ▸ edit the active deployment ▸
 *      Version: "New version" ▸ Deploy.
 */

// Who receives every lead email (comma-separated).
var LEAD_RECIPIENTS =
  'optimadental2725@gmail.com, victorgeorgescu22@gmail.com, contact@optimadentalclinic.com';
// Tab in the bound spreadsheet where leads are logged.
var LEAD_SHEET_NAME = 'Cereri consult FREE site';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();

    var source  = String(data.source || 'contact').toLowerCase();
    var name    = (data.name || '').toString().trim();
    var email   = (data.email || '').toString().trim();
    var phone   = (data.phone || '').toString().trim();
    var service = (data.service || '').toString().trim();
    var voucher = (data.voucher || '').toString().trim();
    var dataPref = (data.data_preferata || '').toString().trim();
    var oraPref  = (data.ora_preferata || '').toString().trim();
    var message  = (data.message || '').toString().trim();

    // Subject + human-readable source label. Explicit client subject wins.
    var subject = (data.subject || '').toString().trim();
    var sourceLabel;
    if (source === 'landing') {
      if (!subject) subject = 'LP Lead: ' + (name || 'Necunoscut');
      sourceLabel = 'Landing Page Meta (oferte-voucher)';
    } else if (source === 'popup') {
      if (!subject) subject = 'Lead nou – Optima Dental (pop-up site)';
      sourceLabel = 'Formular pop-up - consultatie gratuita';
    } else {
      if (!subject) subject = 'Lead nou – Optima Dental (contact site)';
      sourceLabel = 'Formular contact site';
    }

    // --- Log to the spreadsheet (all fields; extra columns are fine) ---
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(LEAD_SHEET_NAME);
    if (sheet) {
      sheet.appendRow([
        timestamp, sourceLabel, name, phone, email,
        service, voucher, dataPref, oraPref, message
      ]);
    }

    // --- Email body: one line per field that was actually provided ---
    var rows = [];
    function add(label, value) {
      value = (value == null ? '' : String(value)).trim();
      if (value && value !== '—') rows.push(label + ': ' + value);
    }
    add('Nume', name);
    add('Email', email);
    add('Telefon', phone);
    add('Serviciu dorit', service);
    add('Voucher', voucher);
    add('Data preferată', dataPref);
    add('Ora preferată', oraPref);
    // For landing leads the discrete fields above already cover the message.
    if (source !== 'landing') add('Mesaj', message);
    add('Sursa', sourceLabel);
    add('Data', timestamp);

    var body = 'Lead nou de pe site:\n\n' + rows.join('\n');

    MailApp.sendEmail({ to: LEAD_RECIPIENTS, subject: subject, body: body });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Lets you open the /exec URL in a browser to confirm the deployment is live.
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
