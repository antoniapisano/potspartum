import express, { json } from 'express';
import { DBconnect } from './config/db.js';
import cors from 'cors';
import {badRequestHandler, unauthorizedHandler, forbiddenHandler, notFoundHandler, genericErrorHandler} from './middleware/errorHandling'
import volunteerRoutes from "./routes/volunteerRoutes"
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
// import passport from 'passport';


//PASSPORT
/* import passport from 'passport'; */
/* import session from 'express-session'; */
/* import './resume/config/passportStrategies'; */
const PORT = process.env.PORT || 4000;


const app = express();

app.use(cors()).use(json());

DBconnect();



app.use(cors())
    .use(json())
  /*   .use(
        session({
            // secret: process.env.SESSION_SECRET as string,
            resave: false,
            saveUninitialized: false,
        })
    ) */
  /*   .use(passport.initialize())
    .use(passport.session()); */

//ENDPOINTS
app.use("/", volunteerRoutes)


//ERROR HANDLERS

    app.use(badRequestHandler)
    app.use(unauthorizedHandler)
    app.use(forbiddenHandler)
    app.use(notFoundHandler)
    app.use(genericErrorHandler)

// app.use(passport.initialize());
// app.use(passport.session());


app.listen(PORT, () => {
    // eslint-disable-next-line no-undef, no-console
    console.log(`Server is running on port ${PORT}`);
});
