import express  from "express";
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js";

const userRouter = express.Router();
//read
userRouter.get("/",(req, res)=>{
    readUser(req, res)

})

// create
userRouter.post("/",(req, res)=>{
    createUser(req, res)

})

//update
userRouter.put("/",(req, res)=>{
    updateUser(req, res)
  
})

//delete
userRouter.delete("/",(req, res)=>{
    deleteUser(req, res)
    
})

 export default userRouter