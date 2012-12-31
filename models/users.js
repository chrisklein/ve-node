var users = require('../data/users')
	, deviceOrigins = require('./deviceOrigins')
	, devices = require('./devices')
	, _ = require('underscore');

exports.index = function(){
	var obj = users.index();
	_.each(obj, function(o){
		o.devices = devices.filterByUserId(o.id);
	})
	return obj;
}

exports.getById = function(id){
	return _.find(users.index(), function(user){ return user.id == id });
}