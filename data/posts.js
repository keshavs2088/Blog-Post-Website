const blogs = [];

export const addBlog = (blog) => {
  blogs.push(blog);
  console.log(blogs);
};

export const getBlogFromData = function (id) {
  return blogs.find((blog) => blog.id === id);
};

export const generateId = function () {
  if (blogs.length >= 1000) {
    throw new Error("No more unique IDs available");
  }

  let id;
  let exists = true;

  while (exists) {
    id = Math.floor(Math.random() * 1000);
    exists = blogs.some((blog) => blog.id === id);
  }
  console.log(id);

  return id;
};

export const getAllBlogs = function () {
  return blogs.map((blog) => ({ ...blog }));
};
