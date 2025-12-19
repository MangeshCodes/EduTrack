// Validation Constants for EduTrack

export const VALIDATION_RULES = {
  USER: {
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 50,
    EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PASSWORD_MIN_LENGTH: 6,
    PASSWORD_MAX_LENGTH: 50,
  },
  STUDENT: {
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 100,
    ROLL_NUMBER_PATTERN: /^[A-Z0-9]{3,10}$/,
    PHONE_PATTERN: /^[0-9]{10}$/,
  },
  ATTENDANCE: {
    ROOM_NUMBER_PATTERN: /^[A-Z0-9]{2,10}$/,
    MAX_STUDENTS_PER_ROOM: 5,
  },
};

export const ERROR_MESSAGES = {
  INVALID_EMAIL: "Invalid email format",
  INVALID_PASSWORD: "Password must be at least 6 characters long",
  INVALID_NAME: "Name must be between 2 and 50 characters",
  USER_EXISTS: "User already exists",
  USER_NOT_FOUND: "User not found",
  INVALID_CREDENTIALS: "Invalid email or password",
  UNAUTHORIZED: "Not authorized to perform this action",
  ATTENDANCE_NOT_FOUND: "Attendance record not found",
  STUDENT_NOT_FOUND: "Student not found",
  INVALID_DATA: "Invalid data provided",
};

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: "Login successful",
  REGISTRATION_SUCCESS: "Registration successful",
  ATTENDANCE_MARKED: "Attendance marked successfully",
  STUDENT_ADDED: "Student added successfully",
  STUDENT_UPDATED: "Student updated successfully",
  STUDENT_DELETED: "Student deleted successfully",
};
