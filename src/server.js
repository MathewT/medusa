'use strict';
const fs = require('fs');
const http = require('http');
const socketIO = require('socket.io');
const os = require('os');
const _ = require('lodash');
const express = require('express');

// Constants
const PORT = 8888;
const HOST = '0.0.0.0';

const logo = '\
_______ _______ ______  _     _ _______ _______\n\
|  |  | |______ |     \\ |     | |______ |_____|\n\
|  |  | |______ |_____/ |_____| ______| |     |\n\
';

// eTadpoleTadp       ole        adpoleT     eTadpoleTa      adpole    oleTad      dpoleTadpol    \n\
// leTadpoleTad      dpole       TadpoleTa    eTadpoleTa    eTadpole   poleTa      adpoleTadpol   \n\
// ole  dpo  Ta      adpol       eTadpoleTa   leTa    eTa  oleT  pole    ole       Tadp    adpo   \n\
//      adp         eTadpo       leTa   leTa  oleTadpoleT  pol    pol    po         Tad           \n\
//      Tad         leT dpo       leT   oleT  poleTadpol  adpo    dpol   dp         eTadpo        \n\
//      eT         poleTadpo      ole    ole  dpoleTadp   Tadp    adpo   ad         leTadpo       \n\
//      leT        dpoleTadp      pol   dpol  adp          Tad    Tad    Tad        oleTadp       \n\
//      ole       Tadp   Tadp    adpo  Tadpo  Tad          eTa    eTa   leTa    eT  pol           \n\
//      pol       eTa     Tad   eTadpoleTadp  eTa          leTa  oleT    leT    le  dpol    pol   \n\
//    Tadpole   poleTa   leTadp leTadpoleTa  oleTad         leTadpol   dpoleTadpol Tadpole adpo   \n\
//    eTadpol   dpoleT   oleTad oleTadpol    poleTa          leTadp    adpoleTadpo eTadpoleTadp';
                                                                                               

console.log(logo);

// App
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.get('/', (req, res) => {
  console.log("get /");
  res.send(`Hello server world\n\n`);
});

let user = os.userInfo();
// console.log(user);
server.listen(PORT, HOST, () => {
  console.log("Server is up and running.");
});
