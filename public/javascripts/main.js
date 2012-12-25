define(["namespace", "views/dashboard", "views/apiToggle", "collections/sockets", "services/data.binder"]
, function(ve, dashboardView, toggleView, socketsCollection, dataBinder){
	
	var initialize = function(){
		// API Toggle
		ve.views.toggle = new toggleView();

		// Set active Tab
		$('.nav-tabs a:first').tab('show');

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