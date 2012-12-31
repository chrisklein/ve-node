var devices = [
	{
		id: 1,
		name: "Office Kitchen",
		status: null,
		pin: "1284641197:0",
		userId: 11,
		deviceOriginId: 2
	},
	{
		id: 2,
		name: "Andrew's Smart Plug",
		status: null,
		pin: "804f58aaaaaa0358",
		userId: 22,
		deviceOriginId: 4
	},
	{
		id: 3,
		name: "Microwave",
		status: null,
		pin: "switch1:0",
		userId: 11,
		deviceOriginId: 3
	}

]

exports.index = function(){
	return devices;
}