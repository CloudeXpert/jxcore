// Copyright & License details are available under JXCORE_LICENSE file


var common = require('../common');
var net = require('net');

var sock = new net.Socket;
sock.end();  // Should not throw.