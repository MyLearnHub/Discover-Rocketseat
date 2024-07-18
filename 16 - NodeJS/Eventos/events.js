const { EventEmitter } = require('events');
const ev = new EventEmitter();

ev.on('SaySomething', (message) => {
    console.log("Eu ouvi você", message)
}) // ouvindo eventos

ev.emit('SaySomething', 'Paulo') // emite o evento

// é possível trocar o "on", para once, isso faz a função ser executada apenas uma vez
/*
    ev.once('SaySomething', (message) => {
        console.log("Eu ouvi você", message)
    })
*/