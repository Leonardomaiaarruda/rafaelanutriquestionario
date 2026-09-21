const SHEET_NAME = 'Respostas';
const ADMIN_ACCESS_CODE = 'rafaela2026';
const SCRIPT_PROP_SPREADSHEET_ID = '1RWn4k_nfhshYLUFlpyc_JKC67YY0ACIdylVmuDIOVLo';

function doPost(e) {
  try {
    const payload = JSON.parse((e.postData && e.postData.contents) || '{}');
    const sheet = getSheet_();
    ensureHeader_(sheet, payload.answers || []);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = headers.map(function(header) {
      if (header === 'submittedAt') return payload.submittedAt || new Date().toISOString();
      if (header === 'patientName') return payload.patientName || '';
      if (header === 'patientEmail') return payload.patientEmail || '';
      if (header === 'patientWhatsapp') return payload.patientWhatsapp || '';
      if (header === 'patientCity') return payload.patientCity || '';
      if (header === 'answersJson') return JSON.stringify(payload.answers || []);

      const answer = (payload.answers || []).find(function(item) {
        return questionHeader_(item) === header;
      });
      return answer ? answer.answer : '';
    });

    sheet.appendRow(row);
    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: error.message });
  }
}

function doGet(e) {
  const action = e && e.parameter && e.parameter.action;
  const callback = e && e.parameter && e.parameter.callback;

  if (action !== 'list') {
    return json_({ ok: true, message: 'Nutri Rafaela Maia API' }, callback);
  }

  const adminCode = e && e.parameter && e.parameter.adminCode;
  if (adminCode !== ADMIN_ACCESS_CODE) {
    return json_({ ok: false, error: 'unauthorized' }, callback);
  }

  const sheet = getSheet_();
  const values = sheet.getDataRange().getValues();

  if (values.length <= 1) {
    return json_({ ok: true, records: [] }, callback);
  }

  const headers = values[0];
  const records = values.slice(1).map(function(row) {
    const record = {};
    headers.forEach(function(header, index) {
      record[header] = row[index];
    });

    try {
      record.answers = JSON.parse(record.answersJson || '[]');
    } catch (error) {
      record.answers = [];
    }

    delete record.answersJson;
    return record;
  }).reverse();

  return json_({ ok: true, records: records }, callback);
}

function getSheet_() {
  const props = PropertiesService.getScriptProperties();
  let spreadsheetId = props.getProperty(SCRIPT_PROP_SPREADSHEET_ID);
  let spreadsheet;

  if (spreadsheetId) {
    spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  } else {
    spreadsheet = SpreadsheetApp.create('Respostas - Nutri Rafaela Maia');
    props.setProperty(SCRIPT_PROP_SPREADSHEET_ID, spreadsheet.getId());
  }

  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeader_(sheet, answers) {
  const baseHeaders = ['submittedAt', 'patientName', 'patientEmail', 'patientWhatsapp', 'patientCity', 'answersJson'];
  const answerHeaders = answers.map(questionHeader_);
  const desiredHeaders = baseHeaders.concat(answerHeaders);

  if (sheet.getLastRow() === 0 || sheet.getLastColumn() === 0) {
    sheet.getRange(1, 1, 1, desiredHeaders.length).setValues([desiredHeaders]);
    return;
  }

  const currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const missingHeaders = desiredHeaders.filter(function(header) {
    return currentHeaders.indexOf(header) === -1;
  });

  if (missingHeaders.length) {
    sheet.getRange(1, currentHeaders.length + 1, 1, missingHeaders.length).setValues([missingHeaders]);
  }
}

function questionHeader_(item) {
  return 'q' + item.id + ' - ' + String(item.question || '').replace(/\s+/g, ' ').trim();
}

function json_(data, callback) {
  const output = callback ? callback + '(' + JSON.stringify(data) + ')' : JSON.stringify(data);
  const mimeType = callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON;
  return ContentService.createTextOutput(output).setMimeType(mimeType);
}




