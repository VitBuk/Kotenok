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

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/table', function (req, res) {
    res.render('table');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/increase', function (req, res) {
    res.render('increase');
});

app.get('/increase2', function (req, res) {
    res.render('increase2');
});

app.get('/increase3', function (req, res) {
    res.render('increase3');
});

app.get('/increase3ZHE', function (req, res) {
    var value = parseInt(req.query.value) + 1;
    res.send(value.toString());
});

app.get('/test', function (req, res) {
    var kotenok = req.query.kotenok;
    res.send(kotenok);
});

app.post('/postTest', function (req, res) {
    res.send('En Taro Andun!');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening to 3000');
});

app.get('/create', function (req, res) {
    app.locals.gameId++;

    var player = {
        "id": 1,
        "name": "Tassadar",
        "score": 0
    };

    var players = [player];
    var game = {
        "id": app.locals.gameId,
        "players": players,
        "state": "created"
    };

    app.locals.games[game.id] = game;

    res.writeHead(302, {
        'Location': '/game/' + game.id
    });
    res.end();
});

app.get('/game/:gameId', function (req, res) {
    var game = app.locals.games[req.params.gameId];
    var player = game.players[0];
    res.render('play', {game: game});
});


app.locals.games = [];
app.locals.gameId = 0;
app.locals.playerId = 0;

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