import express from "express";
import {
  getDashboard,
  getCreateBlogPost,
  getContacts,
  getAboutUs,
  postNewBlog,
  getBlog,
} from "../controllers/postControllers.js";
import upload from "../middlewares/upload.js";

const route = express.Router();

route.get("/", getDashboard);

route.get("/create", getCreateBlogPost);

route.get("/contact", getContacts);

route.get("/about", getAboutUs);

// route.post("/create", postNewBlog);

route.post("/create", upload.single("featured-image"), postNewBlog);

route.get("/:id", getBlog);

export default route;
