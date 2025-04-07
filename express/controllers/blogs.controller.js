const BlogList = require('../models').bloglist;
const BlogDetails = require('../models').blogdetails;
require('../global_functions');

const getAllBlogs = async function (req, res) {
  let err;
  [err, blogList] = await to(BlogList.findAll({}));
  if (err) return ReE(res, err, 422);
  return ReS(res, { blogList });
}
module.exports.getAllBlogs = getAllBlogs;

const createBlog = async function (req, res) {
  let body = req.body;
  let err, blog;
  [err, blog] = await to(BlogDetails.create(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { blog }, 201);
}
module.exports.createBlog = createBlog;