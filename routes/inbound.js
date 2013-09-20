var inbound = {
  handler: function (request) {
    var envelope;
    var to;
    var payload   = request.payload;

    console.log(payload);

    if (payload.envelope) { envelope = JSON.parse(payload.envelope) };
    if (envelope)         { to = envelope.from; }

    var Email     = sendgrid.Email;
    var email     = new Email({
      to:       to,
      from:     "hi@sendgrid-parse-api-example.com",
      subject:  "[sendgrid-parse-api-example] Inbound Payload",
      text:     "A payload was just delivered via SendGrid's Inbound Parse API. It should be attached."
    });

    email.addFile({
      filename: 'payload.txt',
      content: new Buffer(JSON.stringify(payload))
    });

    sendgrid.send(email, function(err, json) {
      if (err) { 
        console.error(err);
        request.reply({ success: false, error: {message: err.message} });
      } else {
        request.reply({ success: true });
      }
    });
  }
};

server.addRoute({
  method  : 'POST',
  path    : '/inbound',
  config  : inbound
});
