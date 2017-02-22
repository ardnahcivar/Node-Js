var mongoose = require('mongoose')
va expres
var Schema = mongoose.Schema;
//mongoose.connect('mongodb://localhost:27017','gettingStarted')
var connection = mongoose.createConnection('mongodb://localhost:27017/gettingStarted')

var userschema = new Schema({
  name:String,
  username:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  meta:{Age:Number,website:String}
});

var User = connection.model('User',userschema)

module.exports = User;
