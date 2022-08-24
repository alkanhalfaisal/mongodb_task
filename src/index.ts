import express from "express";
import mongoose from "mongoose";
const app = express()

const url = "mongodb+srv://test:GMOZuaHoTdosLYOh@cluster0.qi2u2l2.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url )

const connect = mongoose.connection;

connect.once("open",()=>{
    console.log("connected");
});

app.get('/',(_,res)=>{
    res.send("test1")
});

app.listen(10100,()=>console.log("test"));