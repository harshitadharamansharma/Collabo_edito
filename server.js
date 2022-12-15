// const log = console.log
// // initialize http server, socket.io and port number
// const http = require('http').createServer()
// const io = require('socket.io')(http)
// const port = 3000
// http.listen(port, () => log(`server listening on port: http://localhost:${port}`))
// io.on('connection', (socket) => {
//     log('connected')
//     socket.on('message', (evt) => {
//         log(evt)
//         socket.broadcast.emit('message', evt)
//     })
// })
// io.on('disconnect', (evt) => {
//     log('some people left')
// })

////////////////////////////////

// const http = require('http');

// // create a server object
// const server = http.createServer((req, res) => {
//   // handle incoming requests and send a response
//   res.write('Hello, world!');
//   res.end();
// });

// // start the server and listen for incoming requests on port 3000
// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

//////////////////////

const http = require('http');
const socketio = require('socket.io');

// create a server object
const server = http.createServer((req, res) => {
  // handle incoming requests
});

// start the server and listen for incoming requests on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// create a Socket.io server
const io = socketio(server);

// listen for incoming connections from clients
io.on('connection', (socket) => {
  console.log('New client connected');

  // listen for messages from this client
  socket.on('message', (message) => {
    console.log('Received message from client:', message);

    // send a message to all connected clients
    io.emit('message', message);
  });

  // listen for disconnection from this client
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
