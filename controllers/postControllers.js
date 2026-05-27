import {
  addBlog,
  getBlogFromData,
  generateId,
  getAllBlogs,
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

export const postNewBlog = function (req, res) {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-AU", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);

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
