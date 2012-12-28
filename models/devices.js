var devices = require('../data/devices')
 	, users = require('./users')
 	, deviceOrigins = require('./deviceOrigins')
 	, _ = require('underscore');

exports.index = function(fk){
	var obj = devices.index();
	_.each(obj, function(o){
		o.user = users.getById(o.userId);
		!fk && delete o.userId;
		o.deviceOrign = deviceOrigins.getById(o.deviceOrignId);
		!fk && delete o.deviceOrignId;
	})
	return obj;
}

exports.getById = function(id, fk){
	return _.find(devices.index(), function(d){ return d.id == id })
}

exports.filterByUserId = function(userId, fk){
	return _.filter(devices.index(), function(d){ return d.userId == userId })
}
