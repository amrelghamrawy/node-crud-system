const Blog = require('../models/blogs')

const blog_index = (request , response)=>{
    Blog.find().sort({createdAt : -1 })
    .then((result) => {
        response.render('index' , {title: "all-blogs" , blogs: result})
    })
    .catch((error) => console.log(error))
}

const blog_create_get =  (request , response)=>{
    response.render('create', {title:'create'})
}

const blog_create_post = (request, response)=>{
    const blog = new Blog(request.body)
    blog.save()
    .then((result)=> response.redirect('/blogs') )
    .catch((error) => console.log(error))
}

const blog_details = (request, response)=>{

    const id = request.params.id ; 
    Blog.findById(id)
        .then((result) => response.render('blog' ,{title : "blog" , blog : result}))
        .catch((error) => response.redirect('/404'))    
}

const blog_delete = (request , response) =>{
    const id = request.params.id ; 
    Blog.findByIdAndDelete(id)
        .then((result)=> response.json({redirect:'/blogs'}))
        .catch((error) =>console.log(error)) 
}


module.exports = {
    blog_index , 
    blog_create_get , 
    blog_create_post , 
    blog_details , 
    blog_delete
}