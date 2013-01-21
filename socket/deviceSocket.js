var deviceio
  , clientService = require("../mqtt/clientService");

var setSubscriptions = function(socket){
	socket.on('zone/status', function (data) {
    clientService.publish("h2lo/demo/zone/status", data);
  });
}

exports.emit = function(topic, data){
	deviceio.emit(topic, data);
}

exports.set = function(device){
	deviceio = device
		.of('/device')
	  .on('connection', function (socket) {
	  	setSubscriptions(socket)
	    socket.emit('news', { hello: 'world' });
  	});
}