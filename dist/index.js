"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const userController = __importStar(require("./controllers/user_controllers"));
const companyController = __importStar(require("./controllers/company_controllers"));
const url = "mongodb+srv://test:GMOZuaHoTdosLYOh@cluster0.qi2u2l2.mongodb.net/?retryWrites=true&w=majority";
(0, mongoose_1.connect)(url, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected!");
    }
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_, res) => {
    res.send("test1");
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
app.listen(10100, () => console.log("test"));
//# sourceMappingURL=index.js.map