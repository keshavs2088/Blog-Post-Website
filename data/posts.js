const blogs = [];

export const addBlog = (blog) => {
  blogs.push(blog);
  console.log(blogs);
};

export const getBlogFromData = function (id) {
  return blogs.find((blog) => blog.id === id);
};
