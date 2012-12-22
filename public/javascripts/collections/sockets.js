define(["services/data.binder"]
, function(dataBinder){
	return Backbone.Collection.extend({
		url: "javascripts/data/sockets.json"
	})
});