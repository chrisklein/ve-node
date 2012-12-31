// Imports
var apiData = require('../constants/api')
	, deviceOrgins = require('../models/deviceOrigins')
	, _ = require('underscore');

// Module
var getVisibleEnergyDevice = function(pin, devices){
	return _.find(devices, function(d){ return d.utc == pin })
}

var getSmartThingsDevice = function(pin, devices){
	// This api is poorly documented right now and there
	// doesn't appear to be a clear way to get a device by
	// id.  Just a guess for now.
	return _.find(devices, function(d){ 
		return _.find(d.input, function(input){
			console.log(input);
			return input.name == pin;	
		})
	})
}

var getTendrilDevice = function(pin, devices){
	return _.find(devices, function(d){ return d.deviceId == pin })
}

// Exports
exports.fetch = function(device){
	var origin = deviceOrgins.getById(device.deviceOriginId);
	switch(origin.vendor){
	case "BELKIN":
		switch(origin.type){
		case "WEMO":
			// TODO create belkin mock data
		}
	case "VISIBLE_ENERGY":
		switch(origin.type){
		case "MONOSTRIP":
			var api = _.find(apiData.index, function(a){ return a.name == "VISIBLE_ENERGY" })
			var devices = require(api.mockDataSource);
			return getVisibleEnergyDevice(device.pin, devices.index());
		}
	case "SMART_THINGS":
		switch(origin.type){
		case "SWITCH":
			var api = _.find(apiData.index, function(a){ return a.name == "SMART_THINGS" })
			var devices = require(api.mockDataSource);
			return getSmartThingsDevice(device.pin, devices.index());
		}
	case "TENDRIL":
		switch(origin.type){
		case "SWITCH":
			var api = _.find(apiData.index, function(a){ return a.name == "TENDRIL" })
			var devices = require(api.mockDataSource);
			return getTendrilDevice(device.pin, devices.index());
		}
	}
}