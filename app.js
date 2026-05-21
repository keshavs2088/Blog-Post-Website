import express from "express";
import routePosts from "./routes/posts.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", routePosts);

app.listen(port, () => console.log(`server is up and running on ${port}`));
