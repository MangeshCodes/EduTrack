import asyncHandler from "express-async-handler";
import Attendance from "../models/attendance.js";

// Helper function to get formatted date
const getFormattedDate = (dateString) => {
  if (dateString) {
    return dateString;
  }
  return new Date().toString().substring(0, 15);
};

// Helper function for date validation
const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

const getAttendanceByRoomNo = asyncHandler(async (req, res) => {
  const { roomNo, date } = req.body;

  // Validate input
  if (!roomNo) {
    res.status(400);
    throw new Error("Room number is required");
  }

  const formattedDate = getFormattedDate(date);

  const attendance = await Attendance.findOne({
    roomNo: { $in: [roomNo] },
    date: formattedDate,
  });

  if (attendance) {
    res.json(attendance);
  } else {
    res.status(404);
    throw new Error(
      `Attendance not found for room No: ${roomNo} on ${formattedDate}`
    );
  }
});

const getAttendance = asyncHandler(async (req, res) => {
  const { date } = req.body;
  const formattedDate = getFormattedDate(date);

  const attendance = await Attendance.findOne({
    date: formattedDate,
  });

  if (attendance) {
    res.json(attendance);
  } else {
    res.status(404);
    throw new Error(`No attendance record found for ${formattedDate}`);
  }
});

const enterAttendanceByRoomNo = asyncHandler(async (req, res) => {
  const { data, details, date } = req.body;

  // Validate input
  if (!data || !details || Object.keys(data).length === 0) {
    res.status(400);
    throw new Error("Attendance data and details are required");
  }

  const formattedDate = getFormattedDate(date);
    res.json(updatedAttendance);
  } else {
    const newAttendance = await Attendance.create({
      roomNo: [req.body.roomNo],
      date: date,
      data: req.body.data,
      details: req.body.details,
    });
    res.json(newAttendance);
  }
});

const deleteAttendanceByDays = asyncHandler(async (req, res) => {
  const days = req.params.days;
  var date = new Date();
  var deletionDate = new Date(date.setDate(date.getDate() - days));
  await Attendance.deleteMany({
    createdAt: { $lt: deletionDate },
  });
  res.json({ message: `Deleted Attendance for before past ${days} days` });
});

export {
  getAttendanceByRoomNo,
  enterAttendanceByRoomNo,
  getAttendance,
  deleteAttendanceByDays,
};
