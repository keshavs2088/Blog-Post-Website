import express from "express";
import {
  getDashboard,
  getCreateBlogPost,
  getContacts,
  getAboutUs,
} from "../controllers/postControllers.js";

const route = express.Router();

route.get("/", getDashboard);

route.get("/create", getCreateBlogPost);

route.get("/contact", getContacts);

route.get("/about", getAboutUs);

export default route;
