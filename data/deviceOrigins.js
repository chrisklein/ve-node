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
	},
	{
		id: 4,
		vendor: "TENDRIL",
		type: "SWITCH"
	}
]

exports.index = function(){
	return deviceOrigins;
}

//module.exports = index()