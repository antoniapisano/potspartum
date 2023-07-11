import mongoose from 'mongoose';
import { config } from './index.js';

export const DBconnect = async () => {
    console.log('config.db.uri', config.db.uri);
    try {
        mongoose.set('strictQuery', false);
        const connection = await mongoose.connect(config.db.uri as string);
        console.log('connection', connection.connection.host);
    } catch (err) {
        console.error(err);
    }
};
