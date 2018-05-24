
function send(url, params) {

    const cfg = {};
    return new Promise(function (resolve, reject) {
        cfg.done = function (data) {
            resolve(data);
        };
        cfg.error = function (msg) {
            reject(msg);
        };
        new connect(cfg, url, params);
    })
}

function connect(cfg, url, params) {
    var done = cfg ? cfg.done : null;
    var error = cfg ? cfg.error : null;
    // var IS_CONNECTED = false;

    this.ws = new WebSocket(url);

    this.ws.onmessage = function (e) {
        var msg = JSON.parse(e.data);
        done(msg);
    }

    this.ws.onopen = function () {
        this.ws.send(JSON.stringify(params));
    }.bind(this);

    this.ws.onerror = function (msg) {
        error(msg);
        this.ws = null;
    }

    this.ws.onclose = function () {
        this.ws = null;
    }

}


var socket = {
    send,
};
module.exports = socket;