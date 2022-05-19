let url = 'http://mylogger.io/log';

function log(message) {
    // Send a HTTP request
    // for now just log to console
    console.log(message);
}

module.exports.log = log;
// module.exports.endPoint = url;

