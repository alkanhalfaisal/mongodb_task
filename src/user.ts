import {model, Schema } from "mongoose";



export const userSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const user = model("user", userSchema);
export default user;
