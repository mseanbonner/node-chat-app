const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

//const utils = require('./utils/utils');
const {generateMessage} = require('./utils/message');

var app = express();
var server = http.createServer(app);  //works due to tight integ app/server
var io = socketIO(server);  //use this to emit/recv events

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', generateMessage('Admin','Welcome to the chat app!'));

  socket.broadcast.emit('newMessage', generateMessage('Admin','New user joined!'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);

    io.emit('newMessage', generateMessage(message.from, message.text));

    callback('This is from the Server');




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
