var express = require('express');
var app = express();
var mongoose = require('mongoose'),
    Task = require('./models/listModel'),
    bodyParser = require('body-parser');

const port  = process.env.PORT || 3200 ;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Localhost/TodoDb')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/listRoutes');
routes(app);

app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function(){
    console.log('todolistapi server running on: ' +port);
});