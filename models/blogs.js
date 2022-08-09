//file # 7 

const mongoose = require('mongoose') 
const Schema = mongoose.Schema 



// schema
const blogSchema = new Schema({
    title:{
        type: String , 
        required: true
    },
    snippet:{
        type: String , 
        required: true
    },
    body:{
        type: String , 
        required: true
    }
} , {timestamps: true})


// model that represent that schema
const Blog = mongoose.model('blog' , blogSchema)

module.exports = Blog 