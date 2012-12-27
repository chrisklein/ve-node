define(["namespace"]
, function(ve){

	var on = function(deviceId){
		ve.dispatcher.trigger("on", deviceId)
	}

	var off = function(deviceId){
		ve.dispatcher.trigger("off", deviceId)
	}

	return {
		on: on,
		off: off
	}

});