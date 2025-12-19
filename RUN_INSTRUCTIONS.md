# 🚀 Hostel Management - Running Instructions

## BEFORE YOU START

⚠️ **REQUIRED**: Configure MongoDB first!

Edit the `.env` file in the project root and set your MongoDB connection:

```dotenv
# Option 1: Local MongoDB
MONGO_URI=mongodb://localhost:27017/hostel-management

# Option 2: MongoDB Atlas (recommended)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hostel-management
```

---

## 🎯 METHOD 1: One-Click Start (Easiest)

### For Windows Users:
1. Navigate to: `c:\Users\MANGESH\Desktop\All Folders\WEBD Projects\Hostel-Management`
2. Double-click: **`start.bat`**
3. Wait for both servers to start
4. Browser will open automatically to http://localhost:3000

---

## 🎯 METHOD 2: Run from Terminal

### Step 1: Navigate to Project
```bash
cd "c:\Users\MANGESH\Desktop\All Folders\WEBD Projects\Hostel-Management"
```

### Step 2: Start Everything
```bash
npm run dev
```

**What you should see:**
```
> server@1.0.0 dev
> concurrently "npm run server" "npm run client"

[0] > server@1.0.0 server
[0] > nodemon server/index.js
[1] > hostel-app@0.1.0 client
[1] > npm start --prefix frontend
[0] [nodemon] 2.0.4
[0] [nodemon] to restart at any time, type `rs`
[0] [nodemon] watching path(s): ...
[0] MongoDB Connected: localhost
[0] Server running on port 5000
[1] Compiled successfully!
[1] You can now view hostel-app in the browser.
[1] Local: http://localhost:3000
```

---

## 🎯 METHOD 3: Separate Terminals (Development)

### Terminal 1: Start Backend
```bash
cd "c:\Users\MANGESH\Desktop\All Folders\WEBD Projects\Hostel-Management"
npm run server
```

**Expected Output:**
```
[nodemon] 2.0.4
[nodemon] to restart at any time, type `rs`
[nodemon] watching path(s): ...
MongoDB Connected: localhost
Server running on port 5000
```

### Terminal 2: Start Frontend
```bash
cd "c:\Users\MANGESH\Desktop\All Folders\WEBD Projects\Hostel-Management\frontend"
npm start
```

**Expected Output:**
```
Compiled successfully!

You can now view hostel-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

---

## ✅ Access Points

Once running, access:

| Service | URL |
|---------|-----|
| **Frontend** | http://localhost:3000 |
| **Backend API** | http://localhost:5000 |
| **API Health** | http://localhost:5000 (shows routes) |

---

## 🎮 Using the Application

### First Time Setup

1. **Open Browser**: http://localhost:3000
2. **Register New Account**
   - Click "Register" button
   - Fill in credentials:
     - Name
     - Email
     - Password
     - Confirm Password
   - Click "Create Account"

3. **Login**
   - Use your email and password
   - Click "Login"

4. **Start Managing**
   - Add students
   - Mark attendance
   - View records
   - Download CSV

---

## 🛑 To Stop the Application

### If running with `npm run dev`:
Press: **`Ctrl + C`** in the terminal

### If running separate terminals:
Press: **`Ctrl + C`** in each terminal

---

## 📝 Useful Keyboard Shortcuts

| Action | Command |
|--------|---------|
| Stop server | `Ctrl + C` |
| Restart server | `rs` (in nodemon) |
| Clear console | `Ctrl + L` |
| Open DevTools | `F12` or `Ctrl + Shift + I` |

---

## 🔍 Verification Checklist

After starting, verify:

- [ ] Backend console shows: `MongoDB Connected: localhost`
- [ ] Backend console shows: `Server running on port 5000`
- [ ] Frontend shows: `Compiled successfully!`
- [ ] Browser opens to http://localhost:3000
- [ ] No red errors in browser console (`F12`)
- [ ] Can see login/register page

---

## 🐛 If Something Goes Wrong

### Server Won't Start

**Error:** `Cannot find module 'express'`
```bash
npm install
```

**Error:** `MongoDB connection failed`
- Check `.env` MONGO_URI
- Ensure MongoDB is running
- Try MongoDB Atlas connection

**Error:** `Port 5000 already in use`
- Change PORT in `.env`
- Or kill process: `netstat -ano | findstr :5000`

### Frontend Won't Start

**Error:** `npm start not found`
```bash
cd frontend && npm install --legacy-peer-deps
```

**Error:** `Cannot connect to server`
- Verify backend is running
- Check proxy in `frontend/package.json`
- Check browser Network tab for 404/500 errors

### General Issues

**Clear cache and reinstall:**
```bash
# Delete node_modules
rmdir /s /q node_modules
rmdir /s /q frontend\node_modules
del package-lock.json
del frontend\package-lock.json

# Reinstall
npm install --legacy-peer-deps
cd frontend && npm install --legacy-peer-deps
```

---

## 📊 System Requirements Met

- ✅ Node.js: v22.14.0 (compatible with v15.6.0)
- ✅ npm: v10.9.2 (compatible with v7.4.0)
- ✅ All dependencies installed
- ✅ Environment configured

---

## 🎯 Quick Command Reference

```bash
# Navigate to project
cd "c:\Users\MANGESH\Desktop\All Folders\WEBD Projects\Hostel-Management"

# Run everything
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client

# Build frontend for production
cd frontend && npm run build

# Test
npm test

# Reinstall dependencies
npm install --legacy-peer-deps
```

---

## 🌐 Environment Info

```
Project Path: c:\Users\MANGESH\Desktop\All Folders\WEBD Projects\Hostel-Management
Node Version: v22.14.0
npm Version: 10.9.2
Frontend: React 17 (3000)
Backend: Express.js (5000)
Database: MongoDB
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `QUICKSTART.md` | Quick reference guide |
| `SETUP_GUIDE.md` | Detailed setup instructions |
| `SETUP_CHECKLIST.md` | Setup completion checklist |
| `.env.example` | Environment variable template |
| `README.md` | Original project README |

---

## ✨ You're All Set!

**Ready to run?** Execute: `npm run dev`

The application will:
1. ✅ Start backend on http://localhost:5000
2. ✅ Start frontend on http://localhost:3000
3. ✅ Open browser automatically
4. ✅ Enable hot reload for development
5. ✅ Show all logs in terminal

**Enjoy developing!** 🎉
