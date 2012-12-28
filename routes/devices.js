var devices = require('../models/devices')

exports.index = function(req, res){
  res.send(devices.index);
};

exports.show = function(req, res){
  res.send(devices.index[req.params.id] || { error: 'Cannot find device' });
};

function getDevices(api){
	//var devices = [];


	return devices;
}

var buildDeviceObj = function(api){
	var device = {};
}