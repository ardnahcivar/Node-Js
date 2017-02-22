var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://localhost:12702/xorchatdatabase');
var Schema = mongoose.Schema

var db = mongoose.connection

var userDetailsSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date
    }
});
var userDetailsSchema = connection.model('UserDetails', userDetailsSchema);

db.on('error', console.error.bind(console, 'connection:error'));

db.on('open', function() {
    console.log('db is conneted');
    module.exports.userDetailsSchema = userDetailsSchema;
    module.exports.db = db;

})
