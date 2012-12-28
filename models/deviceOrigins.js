var _ = require('underscore')
	, deviceOrigins = require('../data/deviceOrigins')

exports.index = function(){
	return deviceOrigins.index();
}

exports.getById = function(id){
	return _.find(deviceOrigins.index(), function(o){ return o.id == id });
}