/*
 *	Imports
 */
var devices = require('../data/devices')
	, apiCaller = require('../services/apiCaller')
	, apiMapper = require('../services/apiMapper')
 	, users = require('./users')
 	, deviceOrigins = require('./deviceOrigins')
 	, tendrilDevices = require('../data/tendrilDevices')
 	, _ = require('underscore');

/*
 * Module
 */

 var mapDevice = function(id){
 	var device = _.find(devices.index(), function(d){ return d.id == id })
	  , refDevice = !_.isUndefined(device) ? apiCaller.fetch(device) : null;
	return !_.isNull(refDevice) ? apiMapper.map(device, refDevice) : null;
 }

/*
 *	Exports
 */
exports.index = function(){
	var obj = devices.index();
	_.each(obj, function(o){
		o = mapDevice(o.id);
		o.user = users.getById(o.userId);
		o.deviceOrigin = deviceOrigins.getById(o.deviceOriginId);
	})
	return obj;
}

exports.getById = function(id){
	return mapDevice(id);
}

exports.filterByUserId = function(userId){
	return _.filter(devices.index(), function(d){ return d.userId == userId })
}

exports.getTendrilDevices = function(){
	return tendrilDevices.index();
}