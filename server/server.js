const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);  //works due to tight integ app/server
var io = socketIO(server);  //use this to emit/recv events

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  // emit back
  // from admin, welcome
  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app!',
    createdAt: new Date().getTime()
  });

  // emit all
  // from admin, new user joined!
  // broadcast to all except the one it came in on
  socket.broadcast.emit('newMessage', {
      from: 'Admin',
      text: 'New user joined!',
      createdAt: new Date().getTime()
  });

  socket.on('createMessage', (newMsg) => {
    console.log('createMessage', newMsg);

    // broadcast to all except the one it came in on
    // socket.broadcast.emit('newMessage', {
    //     from: newMsg.from,
    //     text: newMsg.text,
    //     createdAt: new Date().getTime()
    // });

    //emits to all connections
    // io.emit('newMessage', {
    //   from: newMsg.from,
    //   text: newMsg.text,
    //   createdAt: new Date().getTime()
    // });

  });

  socket.on('disconnect', () => {
    console.log('Disconnected from client');
  });
});


// app.get('/', () => {
//
// })

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
