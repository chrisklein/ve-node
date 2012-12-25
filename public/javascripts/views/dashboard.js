define(["services/data.binder", "views/widget"]
, function(dataBinder, widget){

	return Backbone.View.extend({
		el: "#widgets",
		initialize: function(){
			this.subscriptions()
		},

		render: function(sockets){
			var _this = this;
			sockets.each(function(socket){
				var socketView = new widget({model: socket});
				_this.$el.append(socketView.render(socket).el);
			})
		},

		subscriptions: function(){
			dataBinder.subscribeData("sockets", this.render, this);
		}
	})

});