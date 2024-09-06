# Blog MERN Backend

This is the backend for a blog application built using the MERN stack (MongoDB, Express, React, Node.js). This backend handles user authentication, post creation, and other functionalities required for a blog.

## Table of Contents

- [Features✨](#features-✨)
- [Technologies Used🛠️](#technologies-used-🛠️)
- [Installation⚙️](#installation-⚙️) 
- [Usage📡](#usage-📡)
- [API Endpoints🌐](#api-endpoints-🌐)
- [Environment Variables🌍](#environment-variables-🌍)
- [Frontend Repository🚀](#frontend-repository-🚀)

## Features ✨

- 🔐 **User Authentication**: Registration and login functionality.
- 📝 **CRUD Operations**: Create, read, update, and delete posts.
- 📷 **Image Upload**: Support for image uploads.
- ✅ **Input Validation**: Ensures data integrity and security.
- 🔒 **JWT Authentication**: Secure authentication using JSON Web Tokens.

## Technologies Used 🛠️

- **Node.js**: JavaScript runtime environment
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **JWT**: JSON Web Tokens for authentication
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing
- **Validator**: Library for string validation and sanitization


## Installation ⚙️

1. Clone the repository:

    ```sh
    git clone https://github.com/lobzhanidzee/blog-MERN-backend.git
    cd blog-MERN-backend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI and port:

    ```env
    MONGODB_URI=your_mongodb_uri
4. Start the server:

    ```sh
    npm run dev
    ```

## Usage 📡

The backend server will start on the port **8080**. You can use tools like Postman to interact with the API endpoints.

## API Endpoints 🌐

### Auth 🔐

- `POST /auth/login` - Login a user
- `POST /auth/register` - Register a new user
- `GET /auth/me` - Get the authenticated user's details

### Posts 📝

- `GET /posts` - Get all posts
- `GET /posts/:id` - Get a single post by ID
- `POST /posts` - Create a new post
- `PATCH /posts/:id` - Update a post by ID
- `DELETE /posts/:id` - Delete a post by ID

### Users 👥

- `GET /users` - Get all users
- `GET /users/:id` - Get a single user by ID

## Environment Variables 🌍

The following environment variables are required:

- `MONGODB_URI` - MongoDB connection string
## Frontend Repository 🚀
The frontend of this project can be found [here](https://github.com/lobzhanidzee/blog-MERN-frontend).
