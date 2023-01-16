import express  from "express";

const router = express.Router();

router.get("/",(req, res)=>{
    res.send("Books page")
})
// nuevo usuario 
router.get("/new",(req, res)=>{
    res.send("new book")
})


export default router