import express from "express";
import {userRegister, login, addNewAdmin, logoutAdmin} from "../controller/user.js";

const router = express.Router();

router.post("/login", login);
router.post("/userRegister", userRegister);
router.post("/adminRegister", addNewAdmin);
router.get("/adminlogout", logoutAdmin);

export default router;
