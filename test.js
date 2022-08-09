//file #1 

const username = 'amr' ;
console.log(username);



const greet = (name) =>{
    console.log(`hello ${name}`); 
}
greet('mora')

// console.log(global); //global object

setTimeout(() => {
   console.log('hello after 3 secounds') 
}, 3000);

const interval = setInterval(()=>{
console.log('hello every second')
} , 1000) ; 


setTimeout(()=>{
clearInterval(interval);
} , 5000)

console.log(__dirname)
console.log(__filename)