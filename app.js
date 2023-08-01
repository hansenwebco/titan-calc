var express = require('express')
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 80))

app.use(express.static(__dirname + '/public'))

app.get('/TitanCalc.asp', function(request, response) {
    response.redirect(301, 'https://www.titancalc.com/TitanCalc.html' + url.parse(request.url, true).search)
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})