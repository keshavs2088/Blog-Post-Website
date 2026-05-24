import express from "express";
import routePosts from "./routes/posts.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs"); //set all the views
app.use(express.static("public")); //use static files directly like images
app.use(express.urlencoded({ extended: true })); //used for reading forms in post

app.use("/", routePosts);

app.listen(port, () => console.log(`server is up and running on ${port}`));
