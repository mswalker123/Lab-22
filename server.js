var express = require('express');
var app = express();

var gdterms = require('./gdterms');

  app.use(express.static(__dirname + '/public'))

  app.get('/gdterms', function(req, res){
  res.send(gdterms[Math.floor(Math.random() * gdterms.length)]);
  });

  var server = app.listen(3000, function (){
  var port = server.address().port;
  console.log("Example.app listening at http://localhost:%s", port);
});
