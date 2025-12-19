# EduTrack API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## User Endpoints

### Register User
- **Endpoint:** `POST /users/register`
- **Description:** Register a new user account
- **Authentication:** No
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:** User object with JWT token
- **Status:** 201 Created

### Login User
- **Endpoint:** `POST /users/login`
- **Description:** Authenticate user and get JWT token
- **Authentication:** No
- **Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:** User object with JWT token
- **Status:** 200 OK

### Get User Profile
- **Endpoint:** `GET /users/profile`
- **Description:** Get authenticated user's profile
- **Authentication:** Yes (Required)
- **Response:** User object
- **Status:** 200 OK

### Update User Profile
- **Endpoint:** `PUT /users/profile`
- **Description:** Update authenticated user's profile
- **Authentication:** Yes (Required)
- **Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```
- **Response:** Updated user object
- **Status:** 200 OK

### Get All Users (Admin Only)
- **Endpoint:** `GET /users`
- **Description:** Get list of all users
- **Authentication:** Yes (Admin Required)
- **Query Parameters:**
  - `page`: Page number (default: 1)
  - `limit`: Items per page (default: 10)
- **Response:** Array of user objects with pagination
- **Status:** 200 OK

---

## Student Endpoints

### Add Student
- **Endpoint:** `POST /student`
- **Description:** Create a new student record
- **Authentication:** Yes (Required)
- **Request Body:**
```json
{
  "name": "Ram Kumar",
  "address": "123 Main St",
  "city": "Delhi",
  "category": "General",
  "roomNo": "A101",
  "blockNo": "A",
  "contact": "9876543210",
  "fatherContact": "9876543211"
}
```
- **Response:** Created student object
- **Status:** 201 Created

### Get All Students
- **Endpoint:** `GET /student`
- **Description:** Get list of all students
- **Authentication:** Yes (Required)
- **Query Parameters:**
  - `page`: Page number (default: 1)
  - `limit`: Items per page (default: 10)
  - `search`: Search by name or room number
- **Response:** Array of student objects
- **Status:** 200 OK

### Get Student by ID
- **Endpoint:** `GET /student/:id`
- **Description:** Get detailed information about a specific student
- **Authentication:** Yes (Required)
- **Parameters:**
  - `id`: Student ID (MongoDB ObjectId)
- **Response:** Student object
- **Status:** 200 OK

### Update Student
- **Endpoint:** `PUT /student/:id`
- **Description:** Update student information
- **Authentication:** Yes (Required)
- **Parameters:**
  - `id`: Student ID
- **Request Body:**
```json
{
  "name": "Ram Kumar",
  "address": "456 New St",
  "contact": "9876543212"
}
```
- **Response:** Updated student object
- **Status:** 200 OK

### Delete Student
- **Endpoint:** `DELETE /student/:id`
- **Description:** Delete a student record
- **Authentication:** Yes (Admin Required)
- **Parameters:**
  - `id`: Student ID
- **Response:** Confirmation message
- **Status:** 200 OK

---

## Attendance Endpoints

### Mark Attendance
- **Endpoint:** `POST /attendance`
- **Description:** Mark attendance for students
- **Authentication:** Yes (Required)
- **Request Body:**
```json
{
  "date": "2024-12-19",
  "data": {
    "studentId1": true,
    "studentId2": false
  },
  "details": {
    "studentId1": "Present",
    "studentId2": "Absent"
  }
}
```
- **Response:** Attendance record object
- **Status:** 201 Created

### Get Attendance by Room
- **Endpoint:** `GET /attendance/room/:roomNo`
- **Description:** Get attendance records for a specific room
- **Authentication:** Yes (Required)
- **Parameters:**
  - `roomNo`: Room number
- **Query Parameters:**
  - `date`: Date in YYYY-MM-DD format
- **Response:** Attendance record
- **Status:** 200 OK

### Get Attendance Records
- **Endpoint:** `GET /attendance`
- **Description:** Get attendance records
- **Authentication:** Yes (Required)
- **Query Parameters:**
  - `date`: Date in YYYY-MM-DD format
  - `page`: Page number
  - `limit`: Items per page
- **Response:** Array of attendance records
- **Status:** 200 OK

### Export Attendance to CSV
- **Endpoint:** `GET /attendance/export`
- **Description:** Export attendance records to CSV file
- **Authentication:** Yes (Required)
- **Query Parameters:**
  - `startDate`: Start date (YYYY-MM-DD)
  - `endDate`: End date (YYYY-MM-DD)
- **Response:** CSV file
- **Status:** 200 OK

---

## Error Responses

All error responses follow this format:
```json
{
  "success": false,
  "message": "Error description",
  "data": null
}
```

### Common HTTP Status Codes
- `200 OK` - Successful request
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid input data
- `401 Unauthorized` - Missing or invalid authentication
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

---

## Rate Limiting

API requests are rate limited to prevent abuse:
- 100 requests per 15 minutes per IP address
- 1000 requests per hour per authenticated user

---

## Pagination

Endpoints that return lists support pagination:
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalCount": 50,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

---

## Best Practices

1. **Always validate input** before sending requests
2. **Use HTTPS** in production environments
3. **Store JWT token securely** (not in localStorage for sensitive apps)
4. **Implement token refresh** mechanism
5. **Handle errors gracefully** in client application
6. **Use pagination** for large datasets
7. **Cache responses** when appropriate

---

## Support

For API issues or questions, please contact: mangeshagl2005@gmail.com
