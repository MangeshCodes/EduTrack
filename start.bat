@echo off
REM Hostel Management Application - Quick Start Script for Windows

echo.
echo ========================================
echo  Hostel Management Application
echo  MERN Stack with Redux
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if MongoDB is configured in .env
echo Checking MongoDB configuration...
findstr /M "MONGO_URI" .env >nul 2>&1
if errorlevel 1 (
    echo WARNING: MONGO_URI not found in .env file!
    echo Please configure your MongoDB connection string in .env
    echo.
    echo Edit the .env file and set:
    echo MONGO_URI=mongodb://localhost:27017/hostel-management
    echo or your MongoDB Atlas connection string
    pause
)

echo.
echo Starting the Hostel Management Application...
echo.
echo Server:   http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press Ctrl+C to stop all processes
echo.

npm run dev

pause
