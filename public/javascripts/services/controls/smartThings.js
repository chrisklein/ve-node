define(["namespace"]
, function(ve){

	var on = function(deviceId){
		var socket = ve.collections.sockets.get(deviceId)
		socket.set("state", "ON")
	}

	var off = function(deviceId){
		var socket = ve.collections.sockets.get(deviceId)
		socket.set("state", "OFF")
	}

	return {
		on: on,
		off: off
	}

});