import express from 'express';
import { loginUser,registerUser ,alluser} from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.get("/user",alluser);

export default userRouter;


