//file #4

const fs = require('fs') ; 

const readstream = fs.createReadStream('./docs/doc3.txt' , {encoding:'utf-8'})
const writestream = fs.createWriteStream('./docs/doc4.txt')

// readstream.on('data' , (buffer) =>{
//     console.log('-------new buffer------')
//     console.log(buffer);
//     writestream.write('\n new buffer \n')
//     writestream.write(buffer)
// })

readstream.pipe(writestream);  // in stead of previous code 