// file #2

// const x = require('./people');
// console.log(x) ; 



const {peoples , ages} = require('./people') // destructing
console.log(peoples , ages)

const os = require('os') ;  //built in modules for operating system
console.log(os.platform() , os.homedir()) ; 
