define(["namespace"]
, function(ve){

	var subscribeDataLoad = function(channel, callback, context){
		ve.dispatcher.on(channel, callback, context)
	}

	var publishDataLoad = function(channel, data){
		ve.dispatcher.trigger(channel, data)
	}

	var listenTo = function(){

	}

	var getChannels  = function(){
		return ve.dispatcher._events;
	}

	return {
		subscribeData: subscribeDataLoad,
		publishData: publishDataLoad,
		listenTo: listenTo,
		channels: getChannels
	}

});