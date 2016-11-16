/**
 * Created with IntelliJ IDEA.
 * User: XLIII
 * Date: 11/16/16
 * Time: 11:41 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world!');
});

app.listen(3000, function() {
    console.log('Listening to 3000');
});