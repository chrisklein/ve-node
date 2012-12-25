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

      var api = ve.api = ""

      var constants = ve.constants = {
      	"apis": ["OURS", "VISIBLE_ENGERY", "SMART_THINGS"]
      }

      return ve;
});