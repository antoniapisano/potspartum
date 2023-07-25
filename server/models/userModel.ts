import mongoose from "mongoose";

const {Schema, model} = mongoose;

const userSchema = new Schema({
  name: { type: String, require: true},
  email: { type: String, require: true},
  password: { type: String, require: true},
});

export default model ("User", userSchema)