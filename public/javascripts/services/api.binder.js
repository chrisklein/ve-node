define(["namespace"]
, function(ve){

	var subscribeControls = function(channel, callback, context){
		ve.dispatcher.on(channel, callback, context)
	}

	var unsubscribeControls = function(channel, callback){
		ve.dispatcher.off(channel, callback);
	}

	var publishControls = function(channel){
		ve.dispatcher.trigger(channel)
	}

	var getChannels  = function(){
		return ve.dispatcher._events;
	}

	return {
		subscribe: subscribeControls,
		unsubscribe: unsubscribeControls,
		publish: publishControls,
		channels: getChannels
	}

});