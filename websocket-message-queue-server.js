const amqp = require('amqp');
const ws = require('nodejs-websocket');

const rabbitMQ = amqp.createConnection({ url: 'amqp://username:password@host:5672' });
const PORT = 6666;

rabbitMQ.on('ready', function() { 
  console.log('Connected to RabbitMQ');
  rabbitMQ.queue('node.rabbitmq', { autoDelete: false, durable: false, exclusive: false }, function(q) {      
    q.bind('#'); 
    q.subscribe(function (message) {
      var msg = message.data.toString();
      server.connections.forEach(function(conn) {
        const data = {
          key: new Date(),
          value: msg || 0
        }
        conn.send(JSON.stringify(data));
      });
    });
  });
});

const server = ws.createServer(function(conn){
  console.log('New websocket connection');
  conn.on('close', function(code, reason){
    console.log("websocket connection closed");
  });
  conn.on('error', function(err){
    console.log(err);
    console.log('websocket connection error');
  });
}).listen(PORT);

console.log('websocket server listening on port ' + PORT);

