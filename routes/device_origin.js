
exports.index = function(req, res){
  res.send(deviceOrigins);
};

exports.show = function(req, res){
	res.send(deviceOrigins[req.params.id] || {error: 'Device Origin cannot be found'});
}

var deviceOrigins = [
	{
		id: 1,
		vendor: "BELKIN",
		type: "WEMO",
	},
	{
		id: 2,
		vendor: "VISIBLE_ENERGY",
		type: "MONOSTRIP"
	},
	{
		id: 3,
		vendor: "SMART_THINGS",
		type: "SWITCH"
	}
]