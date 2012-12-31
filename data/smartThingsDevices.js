var devices = [
	{
		"title": "Coffee Machine",
		"input": [
			{
				"name": "switch1",
				"title": "Coffee Machine",
				"type": "device.switch",
				"description": "Click to switch",
				"multiple": false
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
				"multiple": false
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
				"multiple": false
			}
		]
	}

]

exports.index = function(){
	return devices;
}