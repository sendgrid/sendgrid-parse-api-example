var home = {
  handler: function (request) {
    request.reply({ success: true, message: 'You are using ingrid. See README for instructions.' });
  }
};

server.addRoute({
  method  : 'GET',
  path    : '/',
  config  : home
});
