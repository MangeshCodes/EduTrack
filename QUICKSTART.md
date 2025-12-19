# 🏨 Hostel Management Application - Quick Start

## ✅ Setup Complete!

All dependencies have been installed successfully. Here's what's ready:

### Installed Components:
- ✅ Server dependencies (305 packages)
- ✅ Frontend dependencies (1,725 packages)
- ✅ `.env` configuration file created
- ✅ Scripts configured

---

## 🚀 How to Run

### **Option 1: Quick Start (Recommended)**
Double-click or run from command line:
```bash
start.bat
```
This will start both server and frontend automatically.

### **Option 2: Manual Run - All Commands at Once**
```bash
npm run dev
```

### **Option 3: Run Separately**

**Terminal 1 - Start Backend Server:**
```bash
npm run server
```

**Terminal 2 - Start Frontend:**
```bash
npm run client
```

---

## ⚙️ Configuration Required

### 1. **MongoDB Connection (IMPORTANT)**

Edit `.env` file and configure MONGO_URI:

**Option A: Local MongoDB**
```
MONGO_URI=mongodb://localhost:27017/hostel-management
```
Ensure MongoDB service is running on your computer.

**Option B: MongoDB Atlas (Cloud - Recommended)**
1. Create free account: https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `.env`:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hostel-management
```

### 2. **JWT Secret Key (Optional but Recommended)**
Replace in `.env`:
```
JWT_SECRET=your_secure_key_here_123456789
```

---

## 📍 Access Points

Once running:
- **Frontend App**: http://localhost:3000
- **API Server**: http://localhost:5000
- **API Health Check**: http://localhost:5000 (should show routes)

---

## 📋 Key Features

✨ **User Management**
- Register new users
- Login with JWT authentication
- Admin role management

📚 **Student Management**
- View all students
- Add new student
- Edit student details
- Delete student records
- Update student location

✅ **Attendance System**
- Mark daily attendance
- View attendance records
- Export to CSV
- Delete old records

🔐 **Admin Controls**
- User list management
- Admin privilege assignment
- Data security

---

## 📦 Project Structure

```
Hostel-Management/
├── server/                 # Express.js API
│   ├── config/           # MongoDB config
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Auth, error handling
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   └── index.js          # Main server
│
├── frontend/             # React app
│   ├── src/
│   │   ├── actions/      # Redux actions
│   │   ├── reducers/     # Redux reducers
│   │   ├── components/   # React components
│   │   ├── screens/      # Page views
│   │   ├── App.js
│   │   └── index.js
│   └── public/
│
├── .env                  # Environment config
├── start.bat            # Quick start script
├── SETUP_GUIDE.md       # Detailed guide
└── package.json         # Root npm config
```

---

## 🛠️ Available Commands

```bash
# Start everything
npm run dev

# Backend only (with auto-reload)
npm run server

# Frontend only (with auto-reload)
npm run client

# Frontend production build
cd frontend && npm run build

# Seed database (if available)
node server/seeder.js

# Run tests
npm test
```

---

## 🔗 API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users/register` | Create new user |
| POST | `/users/login` | Login user |
| GET | `/student` | Get all students |
| POST | `/student` | Add student |
| PUT | `/student/:id` | Update student |
| DELETE | `/student/:id` | Delete student |
| GET | `/attendance` | Get attendance |
| POST | `/attendance` | Mark attendance |
| DELETE | `/attendance/:id` | Remove attendance |

---

## ⚠️ Common Issues & Fixes

### **Server Error: Cannot connect to MongoDB**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Fix:** 
- Ensure MongoDB is running
- Check MONGO_URI in .env
- Try MongoDB Atlas connection

### **Port 5000 Already in Use**
```
Error: EADDRINUSE: address already in use :::5000
```
**Fix:**
- Change PORT in .env
- Or close the app using port 5000

### **Frontend Can't Connect to Backend**
```
TypeError: Cannot read property 'data' of undefined
```
**Fix:**
- Ensure server is running on port 5000
- Check network tab in browser dev tools
- Verify proxy in frontend/package.json

### **npm install Errors**
```
npm ERR! code ERESOLVE
```
**Fix:**
```bash
npm install --legacy-peer-deps
cd frontend && npm install --legacy-peer-deps
```

---

## 📝 Environment Variables Reference

```dotenv
# Application Mode
NODE_ENV=development          # development or production

# Server Port
PORT=5000                      # API server port

# MongoDB
MONGO_URI=mongodb://localhost:27017/hostel-management

# JWT Authentication
JWT_SECRET=your_jwt_secret_key_here
```

---

## 🎯 Next Steps

1. ✅ Install dependencies (DONE)
2. 📄 Configure `.env` file (PENDING - Set MongoDB)
3. 🗄️ Setup MongoDB (Local or Atlas)
4. 🚀 Run `npm run dev`
5. 🌐 Open http://localhost:3000
6. 📝 Create account and login
7. 🎉 Start managing!

---

## 📚 Detailed Documentation

For comprehensive setup instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

---

## 🤝 Need Help?

1. Check [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed troubleshooting
2. Review API documentation in `server/routes/`
3. Check browser console for frontend errors
4. Check terminal for backend errors

---

## 📄 Stack

- **Frontend**: React 17, Redux, React Bootstrap, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Development**: Nodemon, Morgan, Concurrently

---

**Ready to start?** 🚀 Run: `npm run dev`
