var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require("path");

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "friend_finder_db"
});

app.use(express.static("app/public"));

app.get('/survey', function(req, res) {
    res.redirect('/index.html')
});

app.post('/find', function(req, res) {
    var name = req.body.name;
    var q1 = parseInt(req.body.question1);
    var q2 = parseInt(req.body.question2);
    var q3 = parseInt(req.body.question3);
    var q4 = parseInt(req.body.question4);
    var q5 = parseInt(req.body.question5);
    var q6 = parseInt(req.body.question6);
    var q7 = parseInt(req.body.question7);
    var q8 = parseInt(req.body.question8);
    var q9 = parseInt(req.body.question9);
    var q10 = parseInt(req.body.question10);
    var answersArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
    var data = {
        name: name,
        answers: answersArray.toString()
    };
    connection.query('INSERT INTO users SET ?', data);
    // console.log([parseInt(req.body.question1), req.body.question2])
    res.redirect('/results.html');
});

app.get('/results', function(req, res) {
    connection.query('SELECT * FROM users', function(err, results, fields) {
        res.json(results);
    });
});

app.listen(3000, function() {
    console.log('listening on 3000');
});