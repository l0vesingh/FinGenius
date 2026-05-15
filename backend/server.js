import express from "express";
import db from "./config/mongooseconnect.js"
import cors from "cors";
import dotenv from "dotenv";
import newsRoutes from "./routes/newRoute.js"
import AuthRoutes from "./routes/Authroute.js";

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/news", newsRoutes);
app.use("/api/auth", AuthRoutes);

const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send({
        activeStatus:"true",
        error:"false",
    })
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
