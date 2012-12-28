
exports.index = function(req, res){
  res.send(getDevices());
};

exports.show = function(req, res){
  res.send(devices[req.params.id] || { error: 'Cannot find device' });
};

function getDevices(api){
	//var devices = [];


	return devices;
}

var buildDeviceObj = function(api){
	var device = {};
}

var devices = [
	{
		name: "Coffee Machine",
		status: "ON",
		pin: "100",
		person : {
			username: "jimjack",
			password: "password",
			fullName: "Jimmy Jack II",
			email: "jimjack@crackerjack.com",
			salt: "salty"
		}
	},
	{
		name: "Refrigerator",
		status: "ON",
		pin: "100",
		person : {
			username: "jimjack",
			password: "password",
			fullName: "Jimmy Jack II",
			email: "jimjack@crackerjack.com",
			salt: "salty"
		}
	},
	{
		name: "Microwave",
		status: "OFF",
		pin: "100",
		person : {
			username: "jimjack",
			password: "password",
			fullName: "Jimmy Jack II",
			email: "jimjack@crackerjack.com",
			salt: "salty"
		}
	}

]

var visibleEnergy = [
    {
        "position": 0,
        "name": "Coffee Machine",
        "state": "ON",
        "role": "neutral",
        "timers": 0,
        "oneshottimers": 0
    },
    {
        "position": 1,
        "name": "Refrigerator",
        "state": "ON",
        "role": "neutral",
        "timers": 0,
        "oneshottimers": 0
    },
    {
        "position": 2,
        "name": "Microwave",
        "state": "OFF",
        "role": "neutral",
        "timers": 0,
        "oneshottimers": 0
    }
];

var smartThings = [
	{
		"title": "Coffee Machine",
		"input": [
			{
				"name": "switch1",
				"title": "Switch 1 in kitchen",
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
				"title": "Switch 2 in kitchen",
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
				"title": "Switch 3 in kitchen",
				"type": "device.switch",
				"description": "Click to switch",
				"multiple": false
			}
		]
	}
]