var users = require('./users')
	, deviceOrigins = require('./deviceOrigins')
	, _ = require('underscore')

var devices = [
	{
		id: 1,
		name: "Coffee Machine",
		status: "ON",
		pin: "100",
		userId: 11,
		deviceOrignId: 2
	},
	{
		id: 2,
		name: "Refrigerator",
		status: "ON",
		pin: "100",
		userId: 11,
		deviceOrignId: 2
	},
	{
		id: 3,
		name: "Microwave",
		status: "OFF",
		pin: "100",
		userId: 11,
		deviceOrignId: 2
	}

]

var index = function(){
	var obj = devices
	_.each(obj, function(o){
		o.user = _.find(users.index, function(user){ return user.id === o.userId });
		delete o.userId;
		o.deviceOrign = _.find(deviceOrigins.index, function(d){ return d.id === o.deviceOrignId });
		delete o.deviceOrignId;
	})
	return obj;
}

module.exports = {
	index: index()
}
