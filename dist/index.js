"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const url = "mongodb+srv://test:GMOZuaHoTdosLYOh@cluster0.qi2u2l2.mongodb.net/?retryWrites=true&w=majority";
mongoose_1.default.connect(url);
const connect = mongoose_1.default.connection;
connect.once("open", () => {
    console.log("connected");
});
app.get('/', (_, res) => {
    res.send("test1");
});
app.listen(10100, () => console.log("test"));
//# sourceMappingURL=index.js.map