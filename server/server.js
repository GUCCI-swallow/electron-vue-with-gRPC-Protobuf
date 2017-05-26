var grpc = require('grpc');
var path = require('path');
var PROTO_PATH = path.join(__dirname, '../app/protos/hellostreamworld.proto');
var hellostreamworld = grpc.load(PROTO_PATH).hellostreamworld;

function sayHello(call) {
    setTimeout(function() {
      call.write({ message: 'hoge' });
    }, 2000);
}

var server = new grpc.Server();
server.addService(hellostreamworld.MultiGreeter.service, {
  /* eslint-disable */
  sayHello: sayHello
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();
