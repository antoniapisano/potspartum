import { Document, Model, Types } from "mongoose";

export interface IUser {
  name: string,
  email: string,
  password: string,
}

export interface IUserDocument extends IUser, Document { 

}

export interface IUserModel extends Model<IUserDocument> {

}