var argv = require('boring')();
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');
var fs = require('fs');

var transport = nodemailer.createTransport(sendmailTransport({}));

if (argv._.length < 2) {
  console.error('Usage: send-html-email email@address filename.html subject');
  process.exit(1);
}

var address = argv._[0];
var file = argv._[1];
var subject = argv._[2] || "Test Email";

return transport.sendMail({
  from: address,
  to: address,
  subject: subject,
  html: fs.readFileSync(file)
}, function(err) {
  if (err) {
    throw err;
  }
  console.log('Sent!');
  process.exit(0);
});
