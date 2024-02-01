export class ApiResponse {
  constructor(statusCode, data, status = "success") {
    this.status = status;
    this.statusCode = statusCode;
    this.data = data;
  }
}
