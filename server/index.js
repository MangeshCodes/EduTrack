import express from "express";
import userRoutes from "./routes/userRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import path from "path";
import morgan from "morgan";

import dotenv from "dotenv";
import connectDB from "./config/mongoDBConfig.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

// Configuration
dotenv.config();
connectDB();

const app = express();

// Middleware: Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// Middleware: Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware: Security Headers
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});
app.use("/users", userRoutes);
app.use("/student", studentRoutes);
app.use("/attendance", attendanceRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}
app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
