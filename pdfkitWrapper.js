PDFDocument = Npm.require('pdfkit');
PDFDocument.PX_PER_CM = 28.33;

fs = Npm.require('fs');

PDFDocument.prototype.writeSync = function (filename) {
  this.pipe(fs.createWriteStream(filename));
}
