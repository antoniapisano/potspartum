import mongoose from 'mongoose';
import { config } from './index';

export const DBconnect = async () => {    
    try {
        mongoose.set('strictQuery', false);
        const connection = await mongoose.connect(config.db.uri as string);
        console.log('connection', connection.connection.host);
    } catch (err) {
        console.error(err);
    }
};
