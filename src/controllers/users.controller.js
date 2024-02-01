import User from "../models/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorHandler } from "../utils/erroHandler.js";
const addUsers = asyncHandler(async (req, res) => {
  const { name, email, mobile } = req.body;
  const addedUser = await User.create({ name, email, mobile });
  if (!addedUser) {
    throw new errorHandler("user could not be added", 400);
  }
  res.status(201).json(new ApiResponse(200, addedUser));
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-__v -_id -createdAt -updatedAt");
  if (!users) {
    throw new errorHandler("something went wrong please try again", 500);
  }
  res.status(200).json(new ApiResponse(200, users));
});

export { addUsers, getUsers };
