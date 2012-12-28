var devices = require('../data/devices')
 	, users = require('./users')
 	, deviceOrigins = require('./deviceOrigins')
 	, tendrilDevices = require('../data/tendrilDevices')
 	, _ = require('underscore');

exports.index = function(fk){
	var obj = devices.index();
	_.each(obj, function(o){
		o.user = users.getById(o.userId);
		//!fk && delete o.userId;
		o.deviceOrigin = deviceOrigins.getById(o.deviceOriginId);
		//!fk && delete o.deviceOriginId;
	})
	return obj;
}

exports.getById = function(id, fk){
	return _.find(devices.index(), function(d){ return d.id == id })
}

exports.filterByUserId = function(userId, fk){
	return _.filter(devices.index(), function(d){ return d.userId == userId })
}

exports.getTendrilDevices = function(){
	return tendrilDevices.index();
}