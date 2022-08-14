//file #6

const express = require('express') 
// const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoute = require('./routes/blogRoute')
const app = express() ; 

const DBURI = 'mongodb+srv://amrMohammed:As179523684@cluster0.vicfl.mongodb.net/nodejs?retryWrites=true&w=majority'

mongoose.connect(DBURI)
        .then((response)=> app.listen(3000))  // listen to port after conncetion success
        .catch((err) => console.log(err))


//register view engin 
app.set('view engine' , 'ejs')
app.set('views' , 'ejs_views') // instead of views


// app.listen(3000) // normal place  




//middleware

app.use((request , response  , next )=>{
    console.log("host :" , request.hostname) 
    next() // dont stuck in his middleware 

})
app.use((request , response  , next )=>{
    console.log("middleware passed here") 
    next() // dont stuck in his middleware 
})

// morgan 3rd party loging package 
// app.use(morgan('dev'))   // logging request 

//add static folder to be available from browser 
app.use(express.static('public'))

app.use(express.urlencoded({extended : true}))

app.get('/' , (request , response)=>{
    // response.send('<p> hello from homepage </p>')  
    //response.sendFile('./views/index.html' , {root : __dirname }) //without ejs
    // response.render('index' , {title:'home'}) //pass title variable
    response.redirect('/blogs')

})

app.get('/about' , (request , response)=>{
    // response.sendFile('./views/about.html' , {root : __dirname }) // without ejs
    response.render('about', {title:'about'})
})



app.get('/about-us' , (request , response) => {
    response.redirect('/about')
})
app.get('/add-blog' , (request , response)=>{
    const blog = new Blog({
        title: 'blog1' ,
        snippet: 'about my new blog' , 
        body : 'more about my new snippet'
    }) 

    blog.save()
    .then((result)=> response.send(result) )
    .catch((error) => console.log(error))

})

app.get('/all-blogs' , (request, response)=>{
    Blog.find()
    .then((result) => response.send(result))
    .catch((error) => console.log(error))
})

//blog Routes from routes folder 
app.use(blogRoute);


app.use((request , response)=>{
    // response.sendFile('./views/404.html' , {root : __dirname }) // without ejs 
    response.status(404).render('404', {title:'404'})
})