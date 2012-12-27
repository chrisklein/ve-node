// Setup Global VE Namespace
define([]
, function(){

      var ve = {};

      var models = ve.models = {}

      var collections = ve.collections = {}

      var views = ve.views = {}

      var routers = ve.routers = {}

      var services = ve.services = {}

      var dispatcher = ve.dispatcher = {}

      var api = ve.apis = []

      var config = ve.config = {
      	"apis": [
      		{ name: "OURS", implemented: false, servicePath: null },
      		{ name: "VISIBLE_ENERGY", implemented: true, servicePath: "services/controlsVeImpl" },
      		{ name: "SMART_THINGS", implemented: false, servicePath: null }
      	]
      }

      return ve;
});