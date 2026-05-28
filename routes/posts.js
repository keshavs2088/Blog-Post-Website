import express from "express";
import {
  getDashboard,
  getCreateBlogPost,
  getContacts,
  getAboutUs,
  postNewBlog,
  getEditBlog,
  getBlog,
  postUpdateBlog,
  getDeleteBlog,
} from "../controllers/postControllers.js";
import upload from "../middlewares/upload.js";

const route = express.Router();

route.get("/", getDashboard);

route.get("/create", getCreateBlogPost);

route.get("/contact", getContacts);

route.get("/about", getAboutUs);

route.get("/:id", getBlog);

route.get("/edit/:id", getEditBlog);

route.get("/delete/:id", getDeleteBlog);

// route.post("/create", postNewBlog);

route.post("/create", upload.single("featured-image"), postNewBlog);

route.post("/edit/:id", upload.single("featured-image"), postUpdateBlog);

export default route;
