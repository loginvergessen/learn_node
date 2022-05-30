const EventEmitter = require('events');

let url = 'http://mylogger.io/log';


class Logger extends EventEmitter {
    log(message) {
        // Send a HTTP request
        // for now just log to console
        console.log(message);
    
        this.emit('messageLogged', {id: 1, message: message});
    }
}


module.exports = Logger;
// module.exports.endPoint = url;

