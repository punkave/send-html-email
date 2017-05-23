#send-html-email

```
npm install -g send-html-email

send-html-email me@example.com mytestfile.html my-subject
```

`send-html-email` is a command line tool that emails the given file to the given address with the correct content type so it renders as an HTML email message. This tool is intended for faster testing of HTML email templates on real devices. It is not intended for bulk email delivery. The "from" and "to" addresses will be the same. *The message will almost certainly wind up in your spam folder.* Consider using a filter to prevent that.

For instance, if you're testing gmail, it's easy to filter messages to an address like this one:

```
send-html-email me+testmail@example.com mytestfile.html
```

Set up a filter to never send messages with `+testmail` in the address to spam, and you're good to go.

Also consider options like [litmus](http://litmus.com). This is vastly cheaper, plus in gmail you can actually hit "Inspect" this way. But you probably don't own every device in the world.

## Limitations

This is for testing email templates. If you want to send email in a production way, check out `nodemailer`.

`send-html-email` always uses the `sendmail` nodemailer transport. On Windows, that won't work. Pull requests welcome.
