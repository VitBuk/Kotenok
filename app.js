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

// app.get('/test', function(req, res) {
//     res.send('En Taro Adun!');
// });

app.get('/test', function(req,res) {
    var kotenok = req.query.kotenok;
    res.send(kotenok);
});

app.post('/postTest', function(req, res){
    res.send('En Taro Andun!');
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening to 3000');
});