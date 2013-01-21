var io = require('socket.io');

exports.system = function(req, res){
  res.render('demo/system', {title: 'System Demo'});
}