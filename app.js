/**
 * Created with IntelliJ IDEA.
 * User: XLIII
 * Date: 11/16/16
 * Time: 11:41 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/table', function(req, res) {
    res.render('table');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/increase', function(req, res) {
    res.render('increase');
});

app.get('/increase2', function(req, res) {
    res.render('increase2');
});

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

app.get('/create', function(req, res) {
    app.locals.gameId++;

    var player = {
        "id": 1,
        "name": "Valera",
        "score": 0
    };

    var players = [player];
    var game = {
        "id": app.locals.gameId,
        "players": players,
        "state": "created"
    };

    window.location.replace("http://http://127.0.0.1:3000/" + game.id);
});

app.get('/play/:gameId', function (req,res) {

});

app.locals.games = [];
app.locals.gameId = "int";
app.locals.playerId = "int";

/*    Entities

 var player = {
 "id": "int",
 "name": "string",
 "score": "int"
 };

 var game = {
 "id": "int",
 "players": "players",
 "state": "state"
 };
 */