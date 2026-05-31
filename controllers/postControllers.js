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
  res.render("contactUs.ejs", { createBlogbutton: true });
};

export const getAboutUs = function (req, res) {
  res.render("aboutUs.ejs", { createBlogbutton: true });
};

export const getEditBlog = function (req, res) {
  const blogToDisplay = getBlogFromData(Number(req.params.id));
  res.render("create.ejs", { blog: blogToDisplay });
};

export const postUpdateBlog = function (req, res) {
  const blogId = Number(req.params.id);

  // Get old image from the existing blog
  const oldBlog = getBlogFromData(blogId);

  // Create an object based on the form submitted
  const blog = createBlogObject(req, blogId, oldBlog.image);

  const updated = updateBlog(blog, blogId);

  if (!updated) return res.sendStatus(404);
  else res.status(201).redirect(`/`);
};

const getPublishDate = function () {
  const date = new Date();
  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
};

const createBlogObject = function (req, id, existingImage = null) {
  return {
    title: req.body.title.trim(),
    datePublished: getPublishDate(),
    image: req.file ? req.file.filename : existingImage,
    content: req.body.content,
    id,
  };
};

export const postNewBlog = function (req, res) {
  // Create an object based on the form submitted
  const id = generateId();
  const blog = createBlogObject(req, id);

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
  const deleted = deleteBlog(blogId);
  if (deleted) res.sendStatus(200);
  else res.sendStatus(404);
};
