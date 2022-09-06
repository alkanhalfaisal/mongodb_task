"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.updateUser = exports.deleteUser = exports.getUser = exports.allUsers = void 0;
const user_1 = __importDefault(require("./../user"));
let allUsers = (req, res) => {
    let users = user_1.default.find((err, users) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(users);
        }
    });
};
exports.allUsers = allUsers;
let getUser = (req, res) => {
    let user = user_1.default.findById(req.params.id, (err, user) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(user);
        }
    });
};
exports.getUser = getUser;
let deleteUser = (req, res) => {
    let user = user_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send("user Deleted");
        }
    });
};
exports.deleteUser = deleteUser;
let updateUser = (req, res) => {
    console.log(req.body);
    let user = user_1.default.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send("User updated");
        }
    });
};
exports.updateUser = updateUser;
let addUser = (req, res) => {
    var user = new user_1.default(req.body);
    console.log(req.body);
    console.log(user);
    user.save((err) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(user);
            res.send(user);
        }
    });
};
exports.addUser = addUser;
//# sourceMappingURL=user_controllers.js.map