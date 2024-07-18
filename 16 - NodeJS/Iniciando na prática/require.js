// Módulos nativos do Node
const path = require('path')
console.log(path.basename(__filename))

// Módulos criados por mim (cheque o exports.js para entender)
const myModule = require('./exports.js')
console.log(myModule)