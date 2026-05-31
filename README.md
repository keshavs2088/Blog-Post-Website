MyBlog

A full-stack blogging platform built with Node.js, Express, EJS, and JavaScript. 
Users can create, edit, view, and delete blog posts, upload featured images, and write rich-text content using the Quill editor.

Features
1 Create new blog posts
2 Edit existing blog posts
3 Delete blog posts
4 View individual blog pages
5 Upload featured images
6 Rich-text editing with Quill
7 Responsive card-based dashboard
8 About and Contact pages
9 Clean MVC-inspired project structure

Tech Stack
1 Frontend
2 HTML5
3 CSS3
4 JavaScript
5 EJS Templates
6 Quill Rich Text Editor
7 Backend
8 Node.js
9 Express.js
10 Multer (Image Uploads)

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
Routes
Define application endpoints and delegate work to controllers.

Controllers
Handle requests, process form data, and render views.

Data Layer
Responsible for storing and retrieving blog data.

Views
Render dynamic content using EJS templates.

Public Assets
Contains CSS, client-side JavaScript, images, and uploaded files.

How It Works
Create Post

Users can:
Enter a title
Upload a featured image
Write content using Quill Editor
Publish the blog post
Edit Post

Existing blog posts can be updated while preserving previously uploaded images if no new image is provided.

Delete Post
Posts can be removed from the dashboard after confirmation.

Read Post
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
Express.js routing
Middleware
File uploads with Multer
EJS templating
MVC architecture
Form handling
Client-side JavaScript
DOM manipulation
Rich text editors
CRUD operations

Future Improvements

Potential areas for improvement include:
Database integration (MongoDB/PostgreSQL)
User authentication
Blog categories and tags
Search and filtering
Persistent data storage
Author

Keshav Sharma

Built as part of my Full-Stack JavaScript learning journey while transitioning from QA Automation to Software Development.
