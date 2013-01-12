var request = require("request");

exports.index = function(req, res){
	_res = res;
	request.get("http://h2lo-api.herokuapp.com/service/person", function (err, res, body) {
	    if (!err) {
	    	console.log(body);
	        var resultsObj = JSON.parse(body);
	        //Just an example of how to access properties:
	        console.log(resultsObj.MRData);
	        _res.send(body);
	    }else{
	    	res.send({error: 'User cannot be found'});
	    }
	});
}

exports.person = function(req, res){
	_res = res;
	try{
		request.get("http://h2lo-api.herokuapp.com/service/person/"+req.params.id, function (err, res, body) {
		    if (!err) {
		    	console.log(body);
		        _res.send(body);
		    }else{
		    	res.send({error: 'User cannot be found'});
		    }
		});
	}catch(e){
		_res.send({error: 'User cannot be found'});
	}
}