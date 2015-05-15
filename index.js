var express = require('express');
var app = express();
var sheetrock = require('sheetrock');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {

    var myCallback = function (error, options, response) {
    if (!error) {
        console.log('callback ran');
        //response.send('Hello World!');
        /*
          Parse response.data, loop through response.rows, or do something with
          response.html.
        */
      } else {
        console.log('error');
        //response.send('Hello World!1');
      }
    };

    sheetrock({
      url: "https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0",
      query: "select A,B,C,D,E,L where E = 'Both' order by L desc",
      callback: myCallback
    });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
