var devices = [
	{
		"title": "Coffee Machine",
		"input": [
			{
				"name": "switch1",
				"title": "Coffee Machine",
				"type": "device.switch",
				"description": "Click to switch",
				"multiple": false,
				"status": "off"
			}
		]
	},
	{
		"title": "Refrigerator",
		"input": [
			{
				"name": "switch2",
				"title": "Refrigerator",
				"type": "device.switch",
				"description": "Click to switch",
				"multiple": false,
				"status": "on"
			}
		]
	},
	{
		"title": "Microwave",
		"input": [
			{
				"name": "switch3",
				"title": "Microwave",
				"type": "device.switch",
				"description": "Click to switch",
				"multiple": false,
				"status": "on"
			}
		]
	}

]

exports.index = function(){
	return devices;
}