import dotenv from 'dotenv';
dotenv.config();

export const config = { db: { uri: process.env.MONGO_URI } };
