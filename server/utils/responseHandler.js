// Utility for consistent API responses

export const sendSuccess = (res, statusCode, data, message = "Success") => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (res, statusCode, message = "Error") => {
  res.status(statusCode).json({
    success: false,
    message,
    data: null,
  });
};

export const sendPaginatedResponse = (
  res,
  statusCode,
  data,
  totalCount,
  currentPage,
  totalPages,
  message = "Success"
) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
    pagination: {
      currentPage,
      totalPages,
      totalCount,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    },
  });
};
