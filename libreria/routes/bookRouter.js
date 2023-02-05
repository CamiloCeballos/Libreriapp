import express  from "express";
import { createBook, deleteBook, readBook, updateBook } from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.get("/",(req, res)=>{
    readBook(req, res)
})
// nuevo usuario 
bookRouter.post("/",(req, res)=>{
    
    createBook(req, res)
})

bookRouter.put("/",(req, res)=>{
    updateBook(req, res)
    
})

bookRouter.delete("/",(req, res)=>{
    deleteBook(req, res)

    
})


export default bookRouter