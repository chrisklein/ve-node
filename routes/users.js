
exports.index = function(req, res){
  res.send(users);
};

exports.show = function(req, res){
	res.send(users[req.params.id] || {error: 'User cannot be found'});
}

users = [
	{	
		username: "jimjack",
		password: "password",
		fullName: "Jimmy Jack II",
		email: "jimjack@crackerjack.com",
		salt: "salty"
	},
	{	
		username: "billbob",
		password: "password",
		fullName: "Billy Bob",
		email: "billbob@yojob.com",
		salt: "salty"
	}
	
]