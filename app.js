var express = require('express')
var app = express()
var request = require('request');

var port = 6002;

var connect_address = "http://www.gautam.cc:"+port; // for anyone interested in trying this out, change the address from gautam.cc to your server's IP address or domain name

var wats = 0;
var noConnect_wats = 0;


app.get('/', function (req, res) {
    wats++;

    console.log('Wat '+wats);
    res.send('You have imposed pure recursive awesomeness on this server.');
    
    request(connect_address); // make the GET request again

  
})



request(connect_address); // Node.js GET request recursion


//noConnect_wat(); // engage the test to see which will complete first
// uncomment above line to see how fast simple javascript recursion is


function noConnect_wat() {
    noConnect_wats++;
    console.log('No connect Wat '+noConnect_wats);
    
    noConnect_wat();
}


setTimeout(function() {
    throw error;
}, 10000);



var server = app.listen(6002, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)

})
