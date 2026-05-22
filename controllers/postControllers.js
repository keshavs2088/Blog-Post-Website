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
