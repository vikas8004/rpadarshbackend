import Admission from "../models/admission.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorHandler } from "../utils/erroHandler.js";
const getAllStudents = asyncHandler(async (req, res) => {
  const foundStudents = await Admission.find();
  console.log(foundStudents);
  if (!foundStudents) {
    throw new errorHandler("something went wrong");
  }
  res.status(200).json(new ApiResponse(200,foundStudents));
});

export default getAllStudents;
