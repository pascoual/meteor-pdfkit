PDFKit
============

Create PDF with [PDFKit Node.js package](https://www.npmjs.com/package/pdfkit) in your Meteor application, server-side only.

## Quick Start
1. `meteor add pascoual:pdfkit`
2. Example: create a PDF server-side 


        ```js
        var doc = new PDFDocument({size: 'A4', margin: 50});
        var imageBase64 = Meteor.users.findOne(this.userId).profile.picture;
        var imageBuffer2 = new Buffer(imageBase64.replace('data:image/png;base64,','') || '', 'base64');
        doc.image(imageBuffer2, 10, 10, {height: 75});
        doc.fontSize(12);
        doc.text('PDFKit is simple', 10, 30, {align: 'center', width: 200});
        // Save it on myApp/public/pdf folder (or any place) with the Fibered sync methode:
        doc.writeSync(process.env.PWD + '/public/pdf/PDFKitExample.pdf);
        doc.end();
        ```
3. Example: a route that creates and serves a PDF (thanks @babak49)
``` 
 Router.route('/getPDF', function() {
 var doc = new PDFDocument({size: 'A4', margin: 50});
 this.response.writeHead(200, {
 'Content-type': 'application/pdf',
 'Content-Disposition': "attachment; filename=test.pdf"
 });
 doc.pipe(this.response);
 
 doc.fontSize(12);
 doc.text('PDFKit is simple', 10, 30, {align: 'center', width: 200});
 doc.end();

 }, {where: 'server'});
```

## Documentation
You can find information about the PDFKit node package here:
* PDFKit documentation: http://pdfkit.org/
* PDFKit GIT: https://github.com/devongovett/pdfkit/

This package adds two Fibered methods (non-blocking thread, but synchronous):
* writeSync(filename): saving the PDF in filename (can be a full path)
* outputSync(): returning the PDF as binary String

## Contributors
* Pascal Richier @pascalrichier
* Bogdan @babak49

## Contributing
Contributors are very welcome. There are many things you can help with,
including adding testing feature, creating examples for the examples folder...
Some guidelines below:

* **Questions**: It's okay to ask a question on Github Issues if you're
  having trouble since the volume is manageable. Just prefix your Github Issue with
  'Question: ' so we can differentiate easily. Also, please make sure you've read through
  PDFKit documentation and tried a few things before asking. This way you can be very
  specific in your question. Also, please provide a cloneable Github repository
  if the issue is complex. For more complex questions sometimes it's hard to get all of the context
  required to solve a problem by just looking at text.

* **New Features** & **Bugs**: You need to ask new features and bugs corrections to PDFKit creator
  on his GIT: https://github.com/devongovett/pdfkit/

* **Answer Questions!**: If you can help another user please do!

## TODO
1. Add testing
2. Check if PDFKit is blocking node or is fibered

## License
MIT
