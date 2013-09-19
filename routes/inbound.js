var inbound = {
  handler: function (request) {
    var payload   = request.payload;

    console.log(payload);

    request.reply({ success: true });
  }
};

server.addRoute({
  method  : 'POST',
  path    : '/inbound',
  config  : inbound
});
