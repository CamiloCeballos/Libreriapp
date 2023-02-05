import express, { json }  from "express";
import bookRouter from "./routes/bookRouter.js";
import userRouter from "./routes/userRouter.js";


const app = express(); 
const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
    console.log("Server is running")
})

app.use(express.json())
app.use("/user", userRouter)
app.use("/book", bookRouter)