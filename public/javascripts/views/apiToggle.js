define(["namespace", "services/api.binder"]
, function(ve, apiBinder){

	return Backbone.View.extend({
		el: "#apiToggle",
		
		initialize: function(){
			_.bindAll(this);
			this.setActiveApis();
		},

		setActiveApis: function(){
			var _this = this;
			// This will set the apis for an buttons set to active state on load.
			this.$el.find(".active").each(function(i){ _this.setApi(this.id) })
		},

		events: {
			"click .btn": "change"
		},

		change: function(e){
			$(e.currentTarget).hasClass("active") ? this.removeApi(e.target.id) : this.setApi(e.target.id);
		},

		setApi: function(apiType){
			ve.apis.push(apiType);
			this.subscribe(apiType);
			this.flashApiAddedMessage(apiType);
		},

		removeApi: function(apiType){
			ve.apis = _.without(ve.apis, apiType);
			this.unsubscribe(apiType);
			this.flashApiRemovedMessage(apiType);
		},

		flashApiAddedMessage: function(api){
			$("#messages").append("<div class='alert alert-success'><h4>Api Added.</h4> Now using "+api+"</div>");
			window.setTimeout(this.closeAlert, 2000);
		},

		flashApiRemovedMessage: function(api){
			$("#messages").append("<div class='alert alert-warning'><h4>Api Removed.</h4> Removed "+api+"</div>");
			window.setTimeout(this.closeAlert, 2000);
		},

		closeAlert: function(){
			$(".alert").remove();
		},

		subscribe: function(apiType){
			api = _.find(ve.config.apis, function(a){ return a.name === apiType })
			if(!_.isUndefined(api) && !_.isNull(api.servicePath)){
				curl([api.servicePath], function(mod) {
				  apiBinder.subscribe("on", mod.on)
				  apiBinder.subscribe("off", mod.off)
				});
			}else{
				console.log("Api = "+apiType+" does not have an implementation yet")
			}
		},

		unsubscribe: function(apiType){
			api = _.find(ve.config.apis, function(a){ return a.name === apiType })
			if(!_.isUndefined(api) && !_.isNull(api.servicePath)){
				curl([api.servicePath], function(mod) {
				  apiBinder.unsubscribe("on", mod.on)
				  apiBinder.unsubscribe("off", mod.off)
				});
			}else{
				console.log("Api = "+apiType+" does not have an implementation yet")
			}
		}

	})

});