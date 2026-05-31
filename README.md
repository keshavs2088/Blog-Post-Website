MyBlog

Dashboard:
<img width="1918" height="868" alt="image" src="https://github.com/user-attachments/assets/35e7f950-5fa4-4eef-abd2-0048e75d8dbb" />

Create Blog:
<img width="1895" height="862" alt="image" src="https://github.com/user-attachments/assets/3697305c-1d62-42d3-9900-5dbe1553fbe7" />

Blog:
<img width="1918" height="871" alt="image" src="https://github.com/user-attachments/assets/31b0e29b-58dc-496e-8c2c-14b1a83472b9" />


A full-stack blogging platform built with Node.js, Express, EJS, and JavaScript. 
Users can create, edit, view, and delete blog posts, upload featured images, and write rich-text content using the Quill editor.

Features: 

Create new blog posts,
Edit existing blog posts,
Delete blog posts,
View individual blog pages,
Upload featured images,
Rich-text editing with Quill,
Responsive card-based dashboard,
About and Contact pages,
Clean MVC-inspired project structure.

Tech Stack: 

Frontend,
HTML5,
CSS3,
JavaScript,
EJS Templates,
Quill Rich Text Editor,
Backend,
Node.js,
Express.js,
Multer (Image Uploads).

Project Structure

├── controllers/
│   └── postControllers.js
│
├── data/
│   └── posts.js
│
├── middlewares/
│   └── upload.js
│
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
│   └── uploads/
│
├── routes/
│   └── posts.js
│
├── views/
│   ├── partials/
│   ├── dashboard.ejs
│   ├── create.ejs
│   ├── showBlog.ejs
│   ├── aboutUs.ejs
│   └── contactUs.ejs
│
├── app.js
└── package.json


Application Architecture

The application follows a simple MVC-inspired structure:

Routes: 
Define application endpoints and delegate work to controllers.

Controllers: 
Handle requests, process form data, and render views.

Data Layer: 
Responsible for storing and retrieving blog data.

Views: 
Render dynamic content using EJS templates.

Public Assets: 
Contains CSS, client-side JavaScript, images, and uploaded files.

How It Works

Create Post
Users can:
Enter a title,
Upload a featured image,
Write content using Quill Editor,
Publish the blog post.


Update post: Edit Post, Existing blog posts can be updated while preserving previously uploaded images if no new image is provided.

Delete Post: 
Posts can be removed from the dashboard after confirmation.

Read Post: 
Each blog receives a unique ID and can be viewed on its own dedicated page.

Installation

Clone the repository:
git clone https://github.com/your-username/myblog.git
Navigate into the project directory:
cd myblog
Install dependencies:
npm install
Start the application:
node app.js
Open your browser and visit:
http://localhost:3000

Learning Objectives

This project was built to strengthen understanding of:
Express.js routing,
Middleware,
File uploads with Multer,
EJS templating,
MVC architecture,
Form handling,
Client-side JavaScript,
DOM manipulation,
Rich text editors,
CRUD operations.

Future Improvements

Potential areas for improvement include:
Database integration (MongoDB/PostgreSQL),
User authentication,
Blog categories and tags,
Search and filtering,
Persistent data storage.

Author

Keshav Sharma

Built as part of my Full-Stack JavaScript learning journey while transitioning from QA Automation to Software Development.
