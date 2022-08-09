// file #5
const http = require('http')
const fs = require('fs')
const _ = require('lodash') // npm installed package

const server = http.createServer((request , response)=>{


    console.log(_.random(0, 20 )) // lodash
    //simple date   
    /*
    console.log('request made') ; 
    console.log(request.url , request.method)
    */

//simple way 
/*
    response.setHeader('Conent-Type' , 'text/plain')
    response.write('<p>hello</p>')
    response.end()

*/


//views way

/*
    response.setHeader('Content-Type' , 'text/html')
    fs.readFile('./views/index.html' ,(error , data)=>{
        if(error){
            console.log(error)
            response.end()
        }
        response.write(data)
        response.end()
    })
*/

response.setHeader('Content-Type' , 'text/html')

let path = './views/' ; 
let status ; 
switch(request.url){
    case '/' :
        path += 'index.html' ; 
        status = 200 ; 
        break ; 
    case '/about' :
        path += 'about.html' ; 
        status =200; 
        break ; 
    case '/about-som' :         
        response.statusCode = 301 ; 
        response.setHeader('Location' , '/about') ; 
        response.end();
        break ; 
    default :
        path += '404.html';
        status= 404;
        break;
    }
        
        
fs.readFile(path ,(error , data)=>{
    if(error){
        console.log(error)
        response.end()
    }
    response.statusCode = status 
    response.end(data) // instead of respose.write(data)
})

})

server.listen(3000 ,'localhost' , ()=>{
    console.log('listening on port 3000') // on server ont in client browser
})