import asyncHandler from "../middleWare/asyncHandler.js";
// import User from "../model/userModel.js";

const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get User Profile");
});

const UpdateUserProfile = asyncHandler(async (req, res) => {
  res.send("update User Profile");
});

const getUser = asyncHandler(async (req, res) => {
  res.send("get all User");
});

const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete User");
});

const getUserById = asyncHandler(async (req, res) => {
  res.send("get User by id");
});

const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  getUserById,
  UpdateUserProfile,
  getUser,
  deleteUser,
  getUserProfile,
  updateUser,
};
