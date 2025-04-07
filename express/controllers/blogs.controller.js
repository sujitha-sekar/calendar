const BlogList = require('../models').bloglist;
require('../global_functions');

const getAllBlogs = async function (req, res) {
  let err;
  [err, blogList] = await to(BlogList.findAll({}));
  if (err) return ReE(res, err, 422);
  return ReS(res, { blogList });
}
module.exports.getAllBlogs = getAllBlogs;

