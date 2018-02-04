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

  socket.emit('newMessage', {
    from: 'seano',
    text: 'lets get lunch',
    createdAt: 1234
  });

  socket.on('createMessage', (newMsg) => {
    console.log('createMessage', newMsg);

    setTimeout(() => {
        socket.emit('newMessage', {
          from: 'seano',
          text: `${newMsg.text} sounds great!`,
          createdAt: 1234
        })
    }, 3000);

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
