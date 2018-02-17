var express = require("express");
var bodyParser = require("body-parser");
require("dotenv").config();

var app = express();
var PORT = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var db = require("./models");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use(routes);


db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

