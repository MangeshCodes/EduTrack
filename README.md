# EduTrack - Student Attendance & Management System

A comprehensive full-stack MERN (MongoDB, Express, React, Node.js) application for managing student records and tracking daily attendance in educational institutions.

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

## ✨ Features

### Authentication & User Management
- [x] User registration with email validation
- [x] Secure login with JWT authentication
- [x] User profile management
- [x] Admin role-based access control
- [x] Password hashing with bcryptjs

### Student Management
- [x] Add, edit, and delete student records
- [x] View student details and history
- [x] Search and filter students
- [x] Student whereabouts tracking
- [x] Pagination support

### Attendance Management
- [x] Daily attendance marking
- [x] Attendance analytics and reports
- [x] CSV export functionality
- [x] Attendance history and trends
- [x] Bulk attendance operations

### Dashboard & Analytics
- [x] Interactive dashboard with statistics
- [x] Attendance analysis with charts
- [x] Real-time data visualization
- [x] Performance metrics

## 🛠️ Technology Stack

### Frontend
- React 17
- Redux (State Management)
- Bootstrap (UI Framework)
- React Router (Routing)
- Axios (HTTP Client)

### Backend
- Node.js & Express.js
- MongoDB (Database)
- JWT (Authentication)
- bcryptjs (Password Encryption)
- Morgan (HTTP Logging)

## 📦 Installation

### Prerequisites
- Node.js (v15.6.0 or higher)
- npm (v7.4.0 or higher)
- MongoDB

### Steps

1. Clone the repository
```bash
git clone https://github.com/MangeshCodes/EduTrack.git
cd EduTrack
```

2. Install root dependencies
```bash
npm install
```

3. Install frontend dependencies
```bash
cd frontend && npm install && cd ..
```

4. Create and configure `.env` file in root directory

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/edutrack
JWT_SECRET=your_jwt_secret_key_here
```

### Running the Application

**Development Mode (Frontend + Backend):**
```bash
npm run dev
```

**Backend Only:**
```bash
npm run server
```

**Frontend Only:**
```bash
cd frontend && npm start
```

## 📁 Project Structure

```
EduTrack/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── screens/         # Page components
│   │   ├── actions/         # Redux actions
│   │   ├── reducers/        # Redux reducers
│   │   └── constants/       # Constants
│   └── package.json
├── server/                   # Express backend
│   ├── controllers/         # Business logic
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   ├── config/              # Database config
│   └── index.js            # Server entry point
└── package.json
```

## 🔌 API Documentation

### Authentication Endpoints
- `POST /users/login` - User login
- `POST /users/register` - User registration
- `GET /users/profile` - Get user profile

### Student Endpoints
- `GET /student` - Get all students
- `POST /student` - Add new student
- `PUT /student/:id` - Update student
- `DELETE /student/:id` - Delete student
- `GET /student/:id` - Get student details

### Attendance Endpoints
- `POST /attendance` - Mark attendance
- `GET /attendance` - Get attendance records
- `GET /attendance/room/:roomNo` - Get attendance by room

## 🤝 Contributing

Contributions are welcome! For major changes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Mangesh** - Full Stack Developer

---

**Made with ❤️ by MangeshCodes**

