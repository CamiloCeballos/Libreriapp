import express, { json }  from "express";
import bookRouter from "./routes/bookRouter.js";
import userRouter from "./routes/userRouter.js";
import mongoose from "mongoose";

const app = express(); 
const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
    console.log("Server is running")
})
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://Admin:CamiloAdmin.123@clusterapp.cgyhzti.mongodb.net/LibreriaApp?retryWrites=true&w=majority",
(err)=>{
    if (err){
        console.log(err)
    } else{
        console.log("Database connected")
    }
    
})

app.use(express.json())
app.use("/user", userRouter)
app.use("/book", bookRouter)