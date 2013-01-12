var request = require("request");

exports.index = function(req, res){
	var _res = res;
	request.get("http://h2lo-api.herokuapp.com/service/person", function (err, res, body) {
	    if (!err) {
	        _res.send(body);
	    }else{
	    	res.send({error: 'User cannot be found'});
	    }
	});
}

exports.person = function(req, res){
	var _res = res;
	try{
		request.get("http://h2lo-api.herokuapp.com/service/person/"+req.params.id, function (err, res, body) {
		    if (!err) {
		        _res.send(body);
		    }else{
		    	res.send({error: 'User cannot be found'});
		    }
		});
	}catch(e){
		_res.send({error: 'User cannot be found'});
	}
}


exports.server = function(req, res){
	var _res = res;
	request.get("http://h2lo-api.herokuapp.com/service/person", function (err, res, body) {
	    if (!err) {
	        _res.render('api/person_server', { title: "Hit api servers side", json: body });
	    }else{
	    	res.send({error: 'User cannot be found'});
	    }
	});

}

exports.client = function(req, res){
	res.render('api/person_client', { title: 'Hit api client side' });
}

exports.api = function(req, res){
	res.render('api/person_api', { title: 'Hit api' });
}