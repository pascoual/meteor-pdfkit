PDFDocument = Npm.require('pdfkit');
PDFDocument.PX_PER_CM = 28.33;

fs = Npm.require('fs');
fs.writeFileFiber = Meteor._wrapAsync(fs.writeFile.bind(fs));

// New output methode with a callBack respecting the classic params (err, result)
PDFDocument.prototype.outputForMeteor = function(fn) {
  return this.finalize((function(_this) {
    return function() {
      var out;
      out = [];
      _this.generateHeader(out);
      return _this.generateBody(out, function() {
        var k, ret, _i, _len;
        _this.generateXRef(out);
        _this.generateTrailer(out);
        ret = [];
        for (_i = 0, _len = out.length; _i < _len; _i++) {
          k = out[_i];
          ret.push(k + '\n');
        }
        // add "null ," to get a classic callBack prototype !
        return fn(null, new Buffer(ret.join(''), 'binary'));
      });
    };
  })(this));
};

/**
 * Sync but non blocking thread (Fibered)
 */
PDFDocument.prototype.outputSync = Meteor._wrapAsync(PDFDocument.prototype.outputForMeteor);
PDFDocument.prototype.writeSync = function (filename) {return fs.writeFileFiber(filename, this.outputSync(), 'binary');}
     