import express from "express"
import connectDB from "./DB.js";
import dotenv from "dotenv";
import morgan from "morgan";


const app = express()
const PORT = process.env.PORT || 3000


dotenv.config({
    path: "./.env",
  });
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(morgan("dev"))
app.use(express.json())


await connectDB()

app.get("/",(req,res)=>{
    res.send("ok")
})


import UploudData from './route.js'
app.use("/temp",UploudData)

app.listen(PORT,()=>{
    console.log('server is runing');
})