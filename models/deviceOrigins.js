var deviceOrigins = [
	{
		id: 1,
		vendor: "BELKIN",
		type: "WEMO",
	},
	{
		id: 2,
		vendor: "VISIBLE_ENERGY",
		type: "MONOSTRIP"
	},
	{
		id: 3,
		vendor: "SMART_THINGS",
		type: "SWITCH"
	}
]

var index = function(){
	return deviceOrigins;
}

module.exports = {
	index:  index()
}