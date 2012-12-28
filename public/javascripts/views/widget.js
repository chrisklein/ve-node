define(["services/data.binder", "services/controls", "text!templates/widget.html"]
, function(dataBinder, controls, widgetTemplate){

	return Backbone.View.extend({
		tagName: "div",
		className: "span4 widget",
		
		initialize: function(){
			_.bindAll(this)
			this.subscriptions()
		},

		subscriptions: function(){
			this.listenTo(this.model, 'change:status', this.render);
		},

		events: {
			"click .btn-success": "on",
			"click .btn-danger":  "off"
		},

		render: function(){
			this.$el.empty()
			var obj = {
				socket: this.model,
				_:_
			};
			var compiledTemplate = _.template(widgetTemplate, obj);
			this.$el.append(compiledTemplate);
			return this;
		},

		on: function(e){
			controls.on(this.model.cid)
		},

		off: function(e){
			controls.off(this.model.cid)
		}

	})

});