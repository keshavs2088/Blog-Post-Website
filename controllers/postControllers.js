import {
  addBlog,
  getBlogFromData,
  generateId,
  getAllBlogs,
  updateBlog,
  deleteBlog,
} from "../data/posts.js";

export const getDashboard = function (req, res) {
  res.render("dashboard.ejs", { createBlogbutton: true, blogs: getAllBlogs() });
};

export const getCreateBlogPost = function (req, res) {
  res.render("create.ejs", {
    createBlogbutton: false,
  });
};

export const getContacts = function (req, res) {
  res.render("contactUs.ejs");
};

export const getAboutUs = function (req, res) {
  res.render("aboutUs.ejs");
};

export const getEditBlog = function (req, res) {
  const blogToDisplay = getBlogFromData(Number(req.params.id));
  res.render("create.ejs", { blog: blogToDisplay });
};

export const postUpdateBlog = function (req, res) {
  const blogId = Number(req.params.id);

  // Get publish date
  const today = getPublishDate();

  // Create an object based on the form submitted
  const blog = {
    title: req.body.title,
    datePublished: today,
    image: req.file ? req.file.filename : null,
    content: req.body.content,
    id: blogId,
  };

  updateBlog(blog, blogId);
  res.status(201).redirect(`/`);
};

const getPublishDate = function () {
  const date = new Date();
  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
};

export const postNewBlog = function (req, res) {
  // Get publish date
  const today = getPublishDate();

  // Create an object based on the form submitted
  const blog = {
    title: req.body.title,
    datePublished: today,
    image: req.file ? req.file.filename : null,
    content: req.body.content,
    id: generateId(),
  };

  addBlog(blog);
  res.status(201).redirect(`/${blog.id}`);
};

export const getBlog = function (req, res) {
  const blogToDisplay = getBlogFromData(Number(req.params.id));

  if (!blogToDisplay) {
    return res.status(404).send("Blog not found");
  }

  res.render("showBlog.ejs", { blog: blogToDisplay });
};

export const getDeleteBlog = function (req, res) {
  const blogId = Number(req.params.id);
  deleteBlog(blogId);
  res.sendStatus(200);
};
