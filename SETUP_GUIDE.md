# Hostel Management Application - Setup & Run Guide

## Prerequisites
- Node.js (v15.6.0 or higher - tested with v22.14.0)
- npm (v7.4.0 or higher)
- MongoDB (Local or MongoDB Atlas connection)
- Git (optional)

## Project Structure
```
Hostel-Management/
├── server/              # Express.js backend
├── frontend/            # React frontend with Redux
├── package.json         # Root package with dev scripts
└── .env                 # Environment configuration
```

## Installation Steps

### 1. Environment Configuration
The `.env` file has been created in the root directory with the following variables:
```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/hostel-management
JWT_SECRET=your_jwt_secret_key_here
```

**Configure the following:**
- **MONGO_URI**: Set your MongoDB connection string
  - Local: `mongodb://localhost:27017/hostel-management`
  - MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/hostel-management`
- **JWT_SECRET**: Replace with a strong secret key for JWT authentication
- **NODE_ENV**: Set to `development` for development mode
- **PORT**: API server port (default: 5000)

### 2. Dependencies Installation
✅ Root dependencies installed (305 packages)
✅ Frontend dependencies installed (1725 packages)

Both have been successfully installed. If you need to reinstall:
```bash
# Install server dependencies
npm install

# Install frontend dependencies
cd frontend && npm install --legacy-peer-deps
```

**Note:** The frontend uses the `--legacy-peer-deps` flag due to React 17 compatibility with some older packages.

### 3. MongoDB Setup

**Option A: Local MongoDB**
1. Download and install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   - Windows: MongoDB runs as a service automatically
   - Or run `mongod` from command line

**Option B: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account and cluster
3. Get your connection string
4. Update `MONGO_URI` in `.env` file

### 4. Running the Application

#### Option A: Run Both Server & Frontend Concurrently
```bash
cd path/to/Hostel-Management
npm run dev
```

This will start:
- 🚀 Server on http://localhost:5000
- 🌐 Frontend on http://localhost:3000

#### Option B: Run Server & Frontend Separately

**Terminal 1 - Start Backend:**
```bash
npm run server
```
Output: `Server running on port 5000`

**Terminal 2 - Start Frontend:**
```bash
npm run client
```
Output: Frontend opens at `http://localhost:3000`

#### Option C: Manual Run (Without concurrently)

**Terminal 1 - Start Backend:**
```bash
node server/index.js
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```

## Application Features

✅ **Authentication**
- User Registration
- User Login
- JWT-based authentication

✅ **Student Management**
- View Student Details
- Add New Student
- Edit Student Information
- Delete Student Records
- Update Student Whereabouts

✅ **Attendance Management**
- Daily Attendance Marking
- View Attendance Details
- Download Attendance as CSV
- Delete Attendance Records (previous n days)

✅ **Admin Controls**
- User List Management
- Edit User Admin Status
- Admin-only Data Control

## Available Scripts

```bash
# Start both server and frontend concurrently
npm run dev

# Start only the backend server (with nodemon auto-reload)
npm run server

# Start only the frontend (with React auto-reload)
npm run client

# Run frontend production build
cd frontend && npm run build

# Run tests
npm test
```

## API Endpoints

### User Routes (`/users`)
- `POST /users/register` - Register new user
- `POST /users/login` - User login
- `GET /users/:id` - Get user details
- `PUT /users/:id` - Update user
- `GET /users` - Get all users (admin only)

### Student Routes (`/student`)
- `GET /student` - Get all students
- `GET /student/:id` - Get student details
- `POST /student` - Add new student
- `PUT /student/:id` - Update student
- `DELETE /student/:id` - Delete student

### Attendance Routes (`/attendance`)
- `GET /attendance` - Get attendance records
- `POST /attendance` - Mark attendance
- `DELETE /attendance/:id` - Delete attendance record

## Troubleshooting

### MongoDB Connection Error
```
Error: Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Ensure MongoDB is running or check your MONGO_URI in .env

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:** Change PORT in .env or kill the process using port 5000

### Frontend Can't Connect to Backend
```
Error: Network Error or 404 errors
```
**Solution:** 
- Check if server is running on PORT 5000
- Verify proxy in `frontend/package.json`: `"proxy": "http://127.0.0.1:5000"`

### Dependency Issues
```
npm ERR! ERESOLVE
```
**Solution:** Use `--legacy-peer-deps` flag:
```bash
npm install --legacy-peer-deps
```

## Development

### Project Technology Stack
- **Frontend**: React 17, Redux, React Bootstrap, Axios
- **Backend**: Express.js, MongoDB, JWT, Mongoose
- **Tools**: Nodemon (auto-reload), Morgan (logging), Bcryptjs (password hashing)
- **CSV Export**: react-csv library

### Key Middleware
- Authentication: JWT with Bearer tokens
- Error Handling: Custom error middleware
- CORS: Enabled for development

## Seeding Data (Optional)

To seed initial data into the database:
```bash
node server/seeder.js
```

This will populate students.js data into MongoDB.

## Production Deployment

### Heroku Deployment
A `Procfile` is included for Heroku:
```
web: npm start
```

Build command will automatically run:
```bash
npm install --prefix frontend && npm run build --prefix frontend
```

Then deploy:
```bash
git push heroku main
```

## Testing

Run tests with:
```bash
npm test
cd frontend && npm test
```

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -am 'Add feature'`
4. Push: `git push origin feature/your-feature`
5. Submit a pull request

## License
ISC

## Contact & Support
For issues, open a GitHub issue or contact the maintainers.

---

**Status:** ✅ Setup Complete - Ready to Run!

Start with: `npm run dev` or follow the "Running the Application" section above.
