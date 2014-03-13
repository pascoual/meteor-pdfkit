Package.describe({
  summary: "PDFKit, the PDF generation library"
});

Npm.depends({
  pdfkit: "0.4.3"
});

Package.on_use(function (api) {
  api.use(['underscore'], 'server');

  api.export('PDFDocument');

  api.add_files(['pdfkitWrapper.js'], 'server');
});