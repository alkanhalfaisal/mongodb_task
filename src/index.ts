import express from "express";
import { connect } from "mongoose";
import * as userController from "./controllers/user_controllers";
import * as companyController from "./controllers/company_controllers";
import { config } from "dotenv";

config()

const url = String (process.env.url);

connect(url, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected!");
  }
});

const app = express()
app.use(express.json());

app.get('/',(_,res)=>{
    res.send("test1")
});

app.get("/users", userController.allUsers);
app.get("/user/:id", userController.getUser);
app.post("/user", userController.addUser);
app.put("/user/:id", userController.updateUser);
app.delete("/user/:id", userController.deleteUser);

app.get("/companies", companyController.allCompanies);
app.get("/company/:id", companyController.getUser);
app.post("/company", companyController.addcompany);
app.put("/company/:id", companyController.updateCompany);
app.delete("/company/:id", companyController.deleteCompany);


app.listen(process.env.PORT,()=>console.log("test"));
