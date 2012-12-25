define(["namespace"]
, function(ve){

	return Backbone.View.extend({
		el: "#apiToggle",
		
		initialize: function(){
			_.bindAll(this)
		},

		events: {
			"click .btn": "change"
		},

		change: function(e){
			this.setAPI(e.target.id);
			this.flashApiChangeMessage(e.target.id);
		},

		setAPI: function(apiType){
			ve.api = apiType;
		},

		flashApiChangeMessage: function(api){
			$("#messages").append("<div class='alert alert-success'><h4>Api Changed.</h4> Now using "+api+"</div>");
			window.setTimeout(this.closeAlert, 3000);
		},

		closeAlert: function(){
			$(".alert").remove();
		}

	})

});