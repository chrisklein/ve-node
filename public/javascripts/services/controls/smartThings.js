define(["namespace"]
, function(ve){

	var on = function(deviceId){
		var socket = ve.collections.sockets.get(deviceId)
		socket.set("status", "ON")
	}

	var off = function(deviceId){
		var socket = ve.collections.sockets.get(deviceId)
		socket.set("status", "OFF")
	}

	return {
		on: on,
		off: off
	}

});