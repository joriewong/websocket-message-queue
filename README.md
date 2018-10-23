# websocket-message-queue

Testing RabbitMQ to WebSocket by Echarts.

## Setup

``` bash
$ npm install
```

## Config

- create your RabbitMQ connection.

``` javascript
/* websocket-message-queue-server.js */
const rabbitMQ = amqp.createConnection({ url: 'amqp://username:password@host:5672' });

```

- create your websocket server.

``` javascript
/* websocket-message-queue-server.js */
const PORT = 6666;
const server = ws.createServer(function(conn){
    // event listener
}).listen(PORT);

```

- modify your message structure.

``` javascript
/* websocket-message-queue-server.js */
const data = {
    key: new Date(),
    value: msg || 0
}
conn.send(JSON.stringify(data));
```

## Run

``` bash
$ node websocket-message-queue-server.js
```

## Example

open `index.html` and you will see RabbitMQ message chart.

## License

[MIT](websocket-message-queue/LICENSE)
