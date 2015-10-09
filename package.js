Package.describe({
  summary: "PDFKit, the PDF generation library",
  version: "1.0.6",
  git: "https://github.com/pascoual/meteor-pdfkit"
});

Npm.depends({
  pdfkit: "0.4.3"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['underscore'], 'server');
  api.export('PDFDocument');
  api.add_files(['pdfkitWrapper.js'], 'server');
});
