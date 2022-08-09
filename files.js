//file #3

const fs = require('fs'); // built in 


//asyncronus function 

//read
/*
fs.readFile('./docs/datafile.txt', (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data.toString());
});
*/


//write create if not exists

/*
fs.writeFile('./docs/datafile.txt', 'hello from code', () => {
    console.log('file written');
})
*/

//directories 
/*
if(!fs.existsSync('./assets')){

    fs.mkdir('./assets', (error) => {
        if (error) {
            console.log(error)
        }
        console.log('directory created successfully');
    })
}else{
    fs.rmdir('./assets' , (error)=>{
        if(error){
            console.log(error)
        }
        console.log('directory removed successfully')
    })
} 
*/

//remove files 
if(fs.existsSync('./docs/datafile.txt')){
    fs.unlink('./docs/datafile.txt' , (error)=>{
        console.log(error)
    })
    console.log('file removed successfully') ; 
}