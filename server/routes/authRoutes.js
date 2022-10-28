import express from 'express';
import {register, register1} from "../controllers/authController.js";
import {login} from "../controllers/authController.js";
import checkUser from '../middlewares/authMiddleware.js';
// import {addpeep} from "../controllers/authControllers.js";

export const router = express.Router();

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);
router.post("/comment", register1);





export default router;
