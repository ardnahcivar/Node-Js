    var socket = io();

    $(function() {
        $('#message-box').keypress(function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) {
                $("#MessageForm").submit();
            }
        })
    })

    socket.on('connect', function() {

        socket.on('allUsers', function(allUserslist) {
            console.log('all useere');
            console.log(allUserslist.allUsers);
            allUserslist.allUsers.forEach(function(val) {
                console.log('in users');
                var elem = "<div class='media'><div class='media-left'><img src='/robot.jpg' style='width:50px' class='media-object' alt=''></div> <div class='media-body'><p>" + val + "</p></div></div>"
                $('#userlist').append(elem)
            })

        })

        $('#MessageForm').submit(function(event) {
            event.preventDefault();
            var msg = $("#message-box").val()
            var elem = "<div class='well'>" + msg + "</div>"
            console.log(elem);
            $('#message-list').append(elem)
            console.log(msg);

            socket.emit('sendMessage', {
                message: msg
            })

            console.log('emiited');
        })

        socket.on('recvMessage', function(data) {
            console.log('msg recvd:' + data.message);
            var msg = data.message
            var elem = "<div class='media well'><div class='media-left'><img src='/robot.jpg' style='width:50px' class='media-object' alt=''></div> <div class='media-body'><p>" + msg +
                "</p></div></div>"
            $('#message-list').append(elem)
        })
    })
