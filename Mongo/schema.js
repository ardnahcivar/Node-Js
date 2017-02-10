var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Books');
var connection = mongoose.connection;
connection.on('error',console.error.bind(console,'connection error'));

connection.once(function(){

})
