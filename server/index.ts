import express, { json } from 'express';
import { DBconnect } from './config/db.js';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
// import passport from 'passport';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors()).use(json());

DBconnect();

// app.use(passport.initialize());
// app.use(passport.session());

app.listen(PORT, () => {
    // eslint-disable-next-line no-undef, no-console
    console.log(`Server is running on port ${PORT}`);
});
