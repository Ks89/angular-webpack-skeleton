let app = require('http').createServer();
let io = require('socket.io')(app);

app.listen(5555);

io.on('connect', handleIO);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

function handler(req, res) {
  res.writeHead(200);
  res.end();
}

function handleIO(socket) {
  console.log('client connected');
  let intv = setInterval(() => {
    socket.emit('hello', Math.random());
  }, 1000);

  socket.on('new-message', msg => {
    console.log('received a new message: ' + msg);
    socket.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
    clearInterval(intv);
  });
}

