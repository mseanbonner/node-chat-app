var socket = io();  //est websocket to server

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'dude',
    text: 'how about shwarma?'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (msg) {
  console.log('New Message: ' , msg);
});
