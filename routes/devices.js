var devices = require('../models/devices')

exports.index = function(req, res){
  res.send(devices.index());
};

exports.show = function(req, res){
  res.send(devices.getById(req.params.id) || { error: 'Cannot find device' });
};