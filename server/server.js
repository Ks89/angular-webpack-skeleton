let app = require('http').createServer();
let io = require('socket.io')(app);

//Allow Cross Domain Requests
// io.set('transports', [ 'websocket' ]);

app.listen(5555);

io.on('connect', handleIO);

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

function handleIO(socket) {
  console.log('client connected');

  let interval = setInterval(() => {
    console.log('Saying hello!');
    socket.emit('message', Math.random());
  }, 1000);

  socket.on('new-message', msg => {
    console.log('received a new message: ' + msg);
    socket.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
    clearInterval(interval);
  });
}

