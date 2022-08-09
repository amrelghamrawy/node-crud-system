const express = require('express');

const blogController = require('../controllers/blogController')

const router = express.Router();

router.get('/blogs' , blogController.blog_index)

router.get('/blog/create' , blogController.blog_create_get)

router.post('/blogs' , blogController.blog_create_post)

router.get('/blog/:id' , blogController.blog_details)

router.delete('/blog/:id' , blogController.blog_delete)

module.exports = router 