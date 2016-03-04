var argv = require('boring')();
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');
var fs = require('fs');

var transport = nodemailer.createTransport(sendmailTransport({}));

if (argv._.length !== 2) {
  console.error('Usage: send-html-email email@address filename.html');
  process.exit(1);
}

var address = argv._[0];
var file = argv._[1];

return transport.sendMail({
  from: address,
  to: address,
  subject: 'Test Email',
  html: fs.readFileSync(file)
}, function(err) {
  if (err) {
    throw err;
  }
  console.log('Sent!');
  process.exit(0);
});
