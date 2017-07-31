var express               = require('express');
var app                   = express();                              // Create app w/ express
var bodyParser            = require('body-parser');                 // Pull information from HTML POST (express4)
var methodOverride        = require('method-override');             // Simulate DELETE and PUT (express4)

var port = process.env.PORT || 8080;                                // Set our port

app.use(bodyParser.urlencoded({'extended': 'true'}));               // Parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                         // Parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));       // Parse application/vnd.api+json as json
app.use(methodOverride());

var fs = require("fs");

// API routes
var routePath = "./routes/";
fs.readdirSync(routePath).forEach(function (file) {
  var route = routePath + file;
  require(route)(app);
});

// Fallback API Route
app.get("/api/*", function (req, res) {
  res.status(404).send({error: "METHOD_NOT_FOUND"});
});

// Starting the server
app.listen(port, function () {
  console.log('Starting sever on port ' + port);
});

exports = module.exports = app;
