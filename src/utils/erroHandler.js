class errorHandler extends Error {
  constructor(message, statusCode, status = "failed") {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.status = status;
  }
}

export { errorHandler };
