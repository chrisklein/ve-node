var tendrilDevices = [
    {
        "deviceId": "804f58aaaaaa0358",
        "networkId": "rid_aw-aid_aw",
        "category": [
            "Load Control"
        ],
        "name": "Andrew's Smart Plug",
        "marketingName": "ThinkEco Modlet",
        "extendedProperty": [
            {
                "namespace": "",
                "name": "specificDeviceCategory",
                "value": [
                    "ThinkEco Modlet"
                ]
            },
            {
                "namespace": "Demand Response and Load Control",
                "name": "EndRandomizationMinutes",
                "value": [
                    "1"
                ]
            },
            {
                "namespace": "Basic",
                "name": "ModelIdentifier",
                "value": [
                    "TEM-8-001"
                ]
            },
            {
                "namespace": "Radio Firmware Status",
                "name": "HardwareVersion",
                "value": [
                    "1.0tm",
                    "EcoVolt-1.0"
                ]
            },
            {
                "namespace": "Simple Metering",
                "name": "Divisor",
                "value": [
                    "1000"
                ]
            },
            {
                "namespace": "Basic",
                "name": "ManufacturerName",
                "value": [
                    "Tendril"
                ]
            },
            {
                "namespace": "Demand Response and Load Control",
                "name": "StartRandomizationMinutes",
                "value": [
                    "1"
                ]
            },
            {
                "namespace": "Radio Firmware Status",
                "name": "RunningFirmwareVersion",
                "value": [
                    "4327",
                    "2.2.0v8784"
                ]
            },
            {
                "namespace": "Host Firmware Status",
                "name": "ManufacturerID",
                "value": [
                    "4124",
                    "4098"
                ]
            },
            {
                "namespace": "Demand Response and Load Control",
                "name": "UtilityEnrollmentGroup",
                "value": [
                    "0"
                ]
            },
            {
                "namespace": "Host Firmware Status",
                "name": "ProductID",
                "value": [
                    "176",
                    "58199"
                ]
            },
            {
                "namespace": "Simple Metering",
                "name": "Multiplier",
                "value": [
                    "1"
                ]
            }
        ],
        "supportedOperation": [
            "unregister",
            "control",
            "save"
        ]
    },
    {
        "deviceId": "001e5e000000380f",
        "networkId": "rid_aw-aid_aw",
        "category": [
            "Thermostat"
        ],
        "name": "Andrew's Thermostat",
        "marketingName": "Set Point",
        "extendedProperty": [
            {
                "namespace": "",
                "name": "specificDeviceCategory",
                "value": [
                    "Tendril Thermostat 218"
                ]
            },
            {
                "namespace": "Demand Response and Load Control",
                "name": "EndRandomizationMinutes",
                "value": [
                    "1"
                ]
            },
            {
                "namespace": "Basic",
                "name": "ModelIdentifier",
                "value": [
                    "SetPoint TST-08"
                ]
            },
            {
                "namespace": "Demand Response and Load Control",
                "name": "StartRandomizationMinutes",
                "value": [
                    "1"
                ]
            },
            {
                "namespace": "Host Firmware Status",
                "name": "HardwareVersion",
                "value": [
                    "CUT-80-001",
                    "CUT-em260"
                ]
            },
            {
                "namespace": "Host Firmware Status",
                "name": "RunningFirmwareVersion",
                "value": [
                    "2.1.0v7928",
                    "4327"
                ]
            },
            {
                "namespace": "Host Firmware Status",
                "name": "ManufacturerID",
                "value": [
                    "4124"
                ]
            },
            {
                "namespace": "Host Firmware Status",
                "name": "ProductID",
                "value": [
                    "129"
                ]
            },
            {
                "namespace": "Basic",
                "name": "ManufacturerName",
                "value": [
                    "Tendril"
                ]
            },
            {
                "namespace": "Demand Response and Load Control",
                "name": "UtilityEnrollmentGroup",
                "value": [
                    "0"
                ]
            }
        ],
        "supportedOperation": [
            "unregister",
            "control",
            "save"
        ]
    },
    {
        "deviceId": "001db7000002ba23",
        "networkId": "rid_aw-aid_aw",
        "category": [
            "Network Gateway"
        ],
        "name": "Andrew's Gateway",
        "marketingName": "Transport",
        "extendedProperty": [
            {
                "namespace": "",
                "name": "specificDeviceCategory",
                "value": [
                    "Tendril Gateway"
                ]
            },
            {
                "namespace": "Radio Firmware Status",
                "name": "HardwareVersion",
                "value": [
                    "CEL-ZALM-301",
                    "GW-P4"
                ]
            },
            {
                "namespace": "Host Firmware Status",
                "name": "RunningFirmwareVersion",
                "value": [
                    "2.4.0d9956_ECC_TND",
                    "3593_ECC"
                ]
            }
        ]
    }
]

exports.index = function(){
	return tendrilDevices;
}