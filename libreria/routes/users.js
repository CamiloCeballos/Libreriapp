import express  from "express";

const router = express.Router();

router.get("/",(req, res)=>{
    res.send("Users page")
})
// nuevo usuario 
router.get("/new",(req, res)=>{
    res.send("new user")
})


export default router