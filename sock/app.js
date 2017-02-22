var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http)
var express = require('express')
var db_init = require('./db-init/connection.js')

var users = []
app.use(express.static(__dirname + '/css'))
app.use(express.static(__dirname + '/images'))
app.use(express.static(__dirname + '/js'));

app.get('/', function(req, resp) {
    resp.sendFile(__dirname + '/index.html')
})

app.get('/listUsers', function(req, resp) {
    db_init.userDetailsSchema.find({}, function(err, data) {
        if (err) {
            console.log('error in retreiving collections data');
        }
        data.forEach(function(val) {
          console.log(users.includes(val.fullname));
            if (!users.includes(val.fullname)) {
              console.log(val.fullname);
              users.push(val.fullname)
            }

        })
    })
})

io.on('connection', function(socket) {

    io.sockets.emit('allUsers', {
        allUsers: users
    })

    socket.on('disconnect', function() {
        console.log('user is disconnected');
    })

    socket.on('sendMessage', function(data) {
        console.log('data in server:' + data.message);
        socket.broadcast.emit('recvMessage', {
            message: data.message
        })
    })
})


http.listen(8020, function() {
    console.log('server is running');
})
