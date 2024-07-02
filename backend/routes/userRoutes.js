import express from "express";
import {
  authUser,
  registerUser,
  getUserById,
  UpdateUserProfile,
  getUser,
  deleteUser,
  getUserProfile,
  updateUser,
} from "../controllers/userControllers.js";

const router = express.Router();
router.route("/").post(registerUser).get(getUser);
router.route("/login", authUser);
router.route("/profile").get(getUserProfile).put(UpdateUserProfile);

router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default router;
