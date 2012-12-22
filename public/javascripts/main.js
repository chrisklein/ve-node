define(["namespace", "views/dashboard", "collections/sockets", "services/data.binder"]
, function(ve, dashboardView, socketsCollection, dataBinder){
	
	var initialize = function(){
		// Extend Backben.Event to be used as our global dispatcher
		ve.dispatcher = _.clone(Backbone.Events)

		ve.views.widgets = new dashboardView();
		ve.collections.sockets = new socketsCollection();

		ve.collections.sockets.fetch({
			success: function(data, resp){
				dataBinder.publishData("sockets", data)
			}
		})

	}

	return { start: initialize }
		
	
})