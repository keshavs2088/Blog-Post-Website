import { addBlog, getBlogFromData } from "../data/posts.js";

export const getDashboard = function (req, res) {
  res.render("index.ejs", { createBlogbutton: true });
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
  const blogId = Math.floor(Math.random() * 1000);

  const blog = {
    title: req.body.title,
    image: req.file ? req.file.filename : null,
    content: req.body.content,
    id: blogId,
  };

  addBlog(blog);
  res.status(201).redirect(`/${blog.id}`);
};

export const getBlog = function (req, res) {
  const blogToDisplay = getBlogFromData(Number(req.params.id));

  res.render("showBlog.ejs", { blog: blogToDisplay });
};
