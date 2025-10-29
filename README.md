# Student Assignment System - Backend

A RESTful API backend for managing student assignments built with Node.js, Express, and MongoDB.

## 🎯 Purpose

This backend serves as the API layer for a simple assignment management system designed for coding instructors to upload assignments and students to view them. Built as an educational project for beginner students learning full-stack development.

## ✨ Features

- **Admin Authentication** - Secure login with bcrypt password hashing
- **Assignment Management** - Full CRUD operations for assignments
- **Student-Specific Retrieval** - Get assignments filtered by student name
- **RESTful API** - Clean, intuitive endpoints
- **MongoDB Integration** - Persistent data storage with Mongoose ODM

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (Community Edition)
- npm or yarn

## 🚀 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd assignment-backend
```

2. Install dependencies:

```bash
npm install
```

3. Make sure MongoDB is running:

```bash
mongod
```

4. Start the server:

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## 📚 API Endpoints

### Authentication

#### Login

```
POST /api/admin/login
Content-Type: application/json

{
  "username": "*****",
  "password": "********"
}
```

### Assignments

#### Create Assignment

```
POST /api/assignments
Content-Type: application/json

{
  "studentName": "harold",
  "title": "JavaScript Basics",
  "content": "Learn about variables and data types...",
  "dueDate": "2025-11-15"
}
```

#### Get All Assignments

```
GET /api/assignments
```

#### Get Assignments by Student

```
GET /api/assignments/:studentName
```

#### Update Assignment

```
PUT /api/assignments/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content..."
}
```

#### Delete Assignment

```
DELETE /api/assignments/:id
```

## 📊 Database Schema

### Assignment Model

```javascript
{
  studentName: String (enum: ['harold', 'hera']),
  title: String (required),
  content: String (required),
  createdAt: Date (default: Date.now),
  dueDate: Date (optional)
}
```

### Admin Model

```javascript
{
  username: String,
  password: String (hashed)
}
```

## 🔐 Default Credentials

- **Username**: `*****`
- **Password**: `********`

_Note: Change these credentials in production!_

## 🌱 Environment Variables

You can create a `.env` file for configuration:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/student-assignments
```

## 📝 Scripts

- `npm start` - Start the server
- `npm run dev` - Start with nodemon (auto-reload on changes)

## 🤝 Contributing

This is an educational project. Feel free to fork and modify for your own use!

## 📄 License

MIT

## 👨‍💻 Author

Created for teaching beginner coding students full-stack development concepts.

## 🔗 Related

- [Frontend Repository](link-to-frontend-repo)

## 📞 Support

For issues or questions, please open an issue in the GitHub repository.
