var express = require('express'),
app = express();
var options = {
    index: "/home/home.html"
  };
  
  app.use('/pages',express.static('src', options));  
//app.use(express.static('www'));
//app.use(express.static(__dirname + "/src"));
//app.use(express.static('src/pages/home/home.html'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});