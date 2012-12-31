var devices = require('../data/devices')
	, apiCaller = require('../services/apiCaller')
 	, users = require('./users')
 	, deviceOrigins = require('./deviceOrigins')
 	, tendrilDevices = require('../data/tendrilDevices')
 	, _ = require('underscore');

exports.index = function(){
	var obj = devices.index();
	_.each(obj, function(o){
		o.user = users.getById(o.userId);
		o.deviceOrigin = deviceOrigins.getById(o.deviceOriginId);
	})
	return obj;
}

exports.getById = function(id){
	var device = _.find(devices.index(), function(d){ return d.id == id })
	// If the device isn't found, return null for now. 
	return !_.isUndefined(device) ? apiCaller.fetch(device) : null;
}

exports.filterByUserId = function(userId){
	return _.filter(devices.index(), function(d){ return d.userId == userId })
}

exports.getTendrilDevices = function(){
	return tendrilDevices.index();
}