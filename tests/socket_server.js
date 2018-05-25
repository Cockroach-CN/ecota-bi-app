var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({
    port: 8181
});

wss.on("connection", function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        if (ws.readyState === 1) {
            setTimeout(function () {
                ws.send(message);
            }, 500)
        }
    });
})