var express = require('express');
var app = express();


app.use("/public", express.static(__dirname + "/public"))

app.get('/', function (req, res) {
    //res.send("Hello Express")
    //console.log("Hello World")
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
  })

 module.exports = app;
