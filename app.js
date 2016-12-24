/**
 * Created with IntelliJ IDEA.
 * User: XLIII
 * Date: 11/16/16
 * Time: 11:41 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/create', function (req, res) {
    app.locals.gameId++;

    var player = {
        "id": 0,
        "name": "Tassadar",
        "score": 0
    };

    var player2 = {
        "id": 1,
        "name": "Valera",
        "score": 0
    };

    var players = [player, player2];
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

app.get('/game/:gameId/score', function (req, res) {
    var change = req.query.change;
    var player = app.locals.games[req.params.gameId].players[req.query.playerId];
    var score = player.score;
    var newScore = parseInt(change) + parseInt(score);
    player.score = newScore;
    res.send({"playerId": player.id, "playerScore": newScore.toString()});
});

app.get('/watch/:gameId', function (req, res) {
    var game = app.locals.games[req.params.gameId];
    res.render('watch', {game: game});
});

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    console.log('Request Type:', req.method);
    next()
});


app.locals.games = [];
app.locals.gameId = 0;
app.locals.playerId = 0;

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening to 3000');
});