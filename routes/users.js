
exports.index = function(req, res){
  res.send(users);
};

exports.show = function(req, res){
	res.send(users[req.params.id] || {error: 'User cannot be found'});
}

var users = [
	{	
		id: 11,
		username: "jimjack",
		password: "password",
		fullName: "Jimmy Jack II",
		email: "jimjack@crackerjack.com",
		salt: "salty"
	},
	{	
		id: 22,
		username: "billbob",
		password: "password",
		fullName: "Billy Bob",
		email: "billbob@yojob.com",
		salt: "salty"
	},
	{	
		id: 33,
		username: "rhondaray",
		password: "password",
		fullName: "Rhonda Ray",
		email: "rhondaray@eatsomehey.com",
		salt: "salty"
	}
	
]