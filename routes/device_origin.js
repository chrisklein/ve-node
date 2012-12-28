var deviceOrigins = require('../models/deviceOrigins')

exports.index = function(req, res){
  res.send(deviceOrigins.index());
};

exports.show = function(req, res){
	res.send(deviceOrigins.getById(req.params.id) || {error: 'Device Origin cannot be found'});
}
