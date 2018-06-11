'use strict';
const path = require('path');
const fs = require('fs');
const http = require('http');
const socketIO = require('socket.io');
const os = require('os');
const _ = require('lodash');
const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const logo = '\
_______ _______ ______  _     _ _______ _______\n\
|  |  | |______ |     \\ |     | |______ |_____|\n\
|  |  | |______ |_____/ |_____|  ______||     |\n\
';

console.log(logo);

const publicPath = path.join(__dirname, "./public");

// App
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   console.log("get /");
//   res.send(`Hello server world\n\n`);
// });

let user = os.userInfo();
// console.log(user);
io.on('connection', function (socket) {
  console.log('socket to me!');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

console.log('this should happen down there...');

server.listen(PORT, HOST, () => {
  console.log(`Medusa is up and running on port ${PORT}.`);
});
