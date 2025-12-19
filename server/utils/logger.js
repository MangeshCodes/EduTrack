// Logger utility for application logging

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
};

const getTimestamp = () => {
  return new Date().toISOString();
};

export const logger = {
  info: (message, data = null) => {
    console.log(
      `${colors.blue}[INFO]${colors.reset} [${getTimestamp()}] ${message}`,
      data ? JSON.stringify(data, null, 2) : ""
    );
  },

  success: (message, data = null) => {
    console.log(
      `${colors.green}[SUCCESS]${colors.reset} [${getTimestamp()}] ${message}`,
      data ? JSON.stringify(data, null, 2) : ""
    );
  },

  warning: (message, data = null) => {
    console.warn(
      `${colors.yellow}[WARNING]${colors.reset} [${getTimestamp()}] ${message}`,
      data ? JSON.stringify(data, null, 2) : ""
    );
  },

  error: (message, error = null) => {
    console.error(
      `${colors.red}[ERROR]${colors.reset} [${getTimestamp()}] ${message}`,
      error ? JSON.stringify(error, null, 2) : ""
    );
  },

  debug: (message, data = null) => {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `${colors.cyan}[DEBUG]${colors.reset} [${getTimestamp()}] ${message}`,
        data ? JSON.stringify(data, null, 2) : ""
      );
    }
  },
};

export default logger;
