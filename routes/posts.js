import express from "express";
import { getDashboard } from "../controllers/postControllers.js";

const route = express.Router();

route.get("/", getDashboard);

export default route;
