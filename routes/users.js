var users = require('../models/users')

exports.index = function(req, res){
  res.send(users.index());
};

exports.show = function(req, res){
	res.send(users.getById(req.params.id) || {error: 'User cannot be found'});
}
