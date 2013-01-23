// Imports
var mqtt = require('mqttjs')
, clientService = require('./clientService');

// Module
exports.init = function(){

  mqtt.createClient(1883, "m2m.eclipse.org", function(err, client) {

    if (err) {
      console.log("ERROR:" + err);
      process.exit(1);
    }

    client.connect({keepalive: 1000});

    client.on('subscribe', function(packet){
      console.log("subscription");
    })
    
    client.on('connack', function(packet) {    
      if (packet.returnCode === 0) {
        clientService.init(client);
      } else {
        console.log('connack ERROR %d', packet.returnCode);
        process.exit(-1);
      }
    });

    client.on('close', function() {
      process.exit(0);
    });

    client.on('error', function(e) {
      console.log('ERROR %s', e);
      process.exit(-1);
    });

  });

}
