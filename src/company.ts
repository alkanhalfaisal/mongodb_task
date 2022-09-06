import {model, Schema } from "mongoose";



export const companySchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

const company = model("company", companySchema);
export default company;
