import express  from "express";
import routerBooks from "./routes/books.js";
import routerUser  from "./routes/users.js";

const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Server is running")
})


app.get("/", (req, res) =>{
    res.send("hola mundos")
})  

app.use("/users",routerUser)
app.use("/books", routerBooks)