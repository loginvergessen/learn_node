const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const Logger = require('./logger');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});


const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})

logger.log('message1');