import { Document, Model } from 'mongoose';

export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserDocument extends IUser, Document {}

export type IUserModel = Model<IUserDocument>;
