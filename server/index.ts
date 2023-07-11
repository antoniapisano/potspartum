import express, { json } from 'express';
import { DBconnect } from './config/db';
import cors from 'cors';
import dotenv from 'dotenv';

// Routes

//PASSPORT
import passport from 'passport';
import session from 'express-session';

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors()).use(json());
//    .use(
//       session({
//           // secret: process.env.SESSION_SECRET as string,
//           resave: false,
//           saveUninitialized: false,
//       })
//   );

DBconnect();

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
    // eslint-disable-next-line no-undef, no-console
    console.log(`Server is running on port ${PORT}`);
});
