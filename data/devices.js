var devices = [
	{
		id: 1,
		name: "Coffee Machine",
		status: "ON",
		pin: "100",
		userId: 11,
		deviceOrignId: 2
	},
	{
		id: 2,
		name: "Refrigerator",
		status: "ON",
		pin: "100",
		userId: 11,
		deviceOrignId: 2
	},
	{
		id: 3,
		name: "Microwave",
		status: "OFF",
		pin: "100",
		userId: 11,
		deviceOrignId: 2
	}

]

exports.index = function(){
	return devices;
}

//module.exports = index()