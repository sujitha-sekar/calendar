var express = require('express');
var router = express.Router();
const passport = require('passport');
require('./../middleware/passport')(passport);

const BlogController = require('../controllers/blogs.controller');
router.get('/getAllBlogs', BlogController.getAllBlogs);

module.exports = router;
