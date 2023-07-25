import mongoose from "mongoose";
import { IUserDocument, IUserModel } from "../types/IUser";

const {Schema, model} = mongoose;

const userSchema = new Schema<IUserDocument,IUserModel>({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
},
  {
    timestamps: true
  }
);

export default model<IUserDocument, IUserModel> ("User", userSchema)