// Import
var deviceSocket = require("../socket/deviceSocket")

// Module
var Client;

var setSubscriptions = function(client){
	client.subscribe({ 
    subscriptions: ["h2lo/demo/system", "h2lo/demo/zone"] 
  });
}

var setSubscriptionCallbacks = function(client){
	client.on('publish', function(packet){
		if(packet.topic == "h2lo/demo/zone"){
			console.log('ZONE STATUS: %s\t%s', packet.topic, packet.payload);
			deviceSocket.emit("zone", JSON.parse(packet.payload));
		}
	});
}

var setPublications = function(client){
	//client.publish({topic: "h2lo/demo", payload: "node"});
}

// Exports
exports.init = function(client){
	setSubscriptions(client);
  setPublications(client);
  setSubscriptionCallbacks(client);
  Client = client;
  //client.disconnect();
}

exports.subscribe = function(topic, callback){
  Client.subscribe({topic: topic});
}

exports.publish = function(topic, payload){
	console.log("VE NODE Pakge subcription : " + topic);
	Client.publish({topic: topic, payload: payload});
}