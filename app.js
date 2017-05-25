var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.port || 3500;
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res) {
   res.status(200).send("Hello world");
});

app.post("/hello", function (req, res) {
    var userName = req.body.user_name;
    var botPayload = {
        text : "Hello " + userName + " welcome to channel test"
    };
    if(userName !== "slackbot") {
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }
});

app.listen(port, function (err, res) {
    console.log("listening on port : " + port);
});

process.on('exit', function() {
  console.log("exited");
});

process.on('uncaughtException', function(error) {
    console.log("exception");
    process.exit(1);
});

process.on('SIGINT', function() {
    console.log('gotta exit - SIGINT');
    process.exit(0);
});