// Imports
var deviceOrgins = require('../models/deviceOrigins')
	, _ = require('underscore');

// Module
var mapVisibleEnergyDevice = function(device, refDevice){
	var socket = device.pin.split(":")[1]
	  , obj = device;
	
	obj.status = refDevice.status.sockets[socket].state;
	return obj;
}

var mapSmartThingsDevice = function(device, refDevice){
	var input = device.pin.split(":")[1]
	  , refStatus = refDevice.input[input].status
	  , obj = device;

	obj.status = _.isEqual(refStatus, "on") ? "ON" : "OFF";
	return obj;
}

var mapTendrilDevice = function(device, refDevice){
	var refStatus = null
	  , obj = device;

	obj.status = refStatus;
	return obj;
}

// Exports
exports.map = function(device, refDevice){
	var origin = deviceOrgins.getById(device.deviceOriginId);
	switch(origin.vendor){
	case "BELKIN":
		switch(origin.type){
		case "WEMO":
			// TODO create belkin mock data
		}
	case "VISIBLE_ENERGY":
		switch(origin.type){
		case "MONOSTRIP": return mapVisibleEnergyDevice(device, refDevice);
		}
	case "SMART_THINGS":
		switch(origin.type){
		case "SWITCH": return mapSmartThingsDevice(device, refDevice);
		}
	case "TENDRIL":
		switch(origin.type){
		case "SWITCH": return mapTendrilDevice(device, refDevice);
		}
	}
}