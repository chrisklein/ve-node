// Imports
var apiData = require('../constants/api')
	, deviceOrgins = require('../models/deviceOrigins')
	, _ = require('underscore');

// Module
var getVisibleEnergyDevice = function(pin){
	var api = _.find(apiData.index, function(a){ return a.name == "VISIBLE_ENERGY" })
	  , pin = pin.split(":")[0]
	  , devices = require(api.mockDataSource);

	return _.find(devices.index(), function(d){ 
		return d.utc == pin 
	})
}

var getSmartThingsDevice = function(pin){
	var api = _.find(apiData.index, function(a){ return a.name == "SMART_THINGS" })
	  , pin = pin.split(":")[0]
	  , devices = require(api.mockDataSource);

	// This api is poorly documented right now and there doesn't appear 
	// to be a clear way to get a device by id.  Just a guess for now.
	return _.find(devices.index(), function(d){ 
		return _.find(d.input, function(input){ return input.name == pin; })
	})
}

var getTendrilDevice = function(pin){
	var api = _.find(apiData.index, function(a){ return a.name == "TENDRIL" })
	  , devices = require(api.mockDataSource);
	return _.find(devices.index(), function(d){ return d.deviceId == pin })
}

// Exports
exports.fetch = function(device){
	var origin = deviceOrgins.getById(device.deviceOriginId);
	switch(origin.vendor){
	case "BELKIN":
		switch(origin.type){
		case "WEMO": // TODO create belkin mock data
		}
	case "VISIBLE_ENERGY":
		switch(origin.type){
		case "MONOSTRIP": return getVisibleEnergyDevice(device.pin);
		}
	case "SMART_THINGS":
		switch(origin.type){
		case "SWITCH": return getSmartThingsDevice(device.pin);
		}
	case "TENDRIL":
		switch(origin.type){
		case "SWITCH": return getTendrilDevice(device.pin);
		}
	}
}