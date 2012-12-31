var devices = [	
	{
		mac: "00099A",
		utc: "1284641197",
		identiy: {
			release: "2.15",
			model: "UFO",
			name: "Office Kitchen"
		},
		status: {
			state: "ONLINE",
			sockets: [
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
			]
		}
	},
	{
		mac: "00098A",
		utc: "1284641198",
		identiy: {
			release: "2.15",
			model: "UFO",
			name: "Bathroom"
		},
		status: {
			state: "ONLINE",
			sockets: [
			    {
			        "position": 0,
			        "name": "Hair Dryer",
			        "state": "ON",
			        "role": "neutral",
			        "timers": 0,
			        "oneshottimers": 0
			    },
			    {
			        "position": 1,
			        "name": "Night Light",
			        "state": "ON",
			        "role": "neutral",
			        "timers": 0,
			        "oneshottimers": 0
			    },
			    {
			        "position": 2,
			        "name": "Electric Razor",
			        "state": "OFF",
			        "role": "neutral",
			        "timers": 0,
			        "oneshottimers": 0
			    }
			]
		}
	}
]

exports.index = function(){
	return devices;
}