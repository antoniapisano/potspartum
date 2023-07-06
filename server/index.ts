import express, { json } from 'express';
/* import { connectDB } from './resume/config/db'; */
import cors from 'cors';
import {badRequestHandler, unauthorizedHandler, forbiddenHandler, notFoundHandler, genericErrorHandler} from './middleware/errorHandling'

// Routes

//PASSPORT
import passport from 'passport';
/* import session from 'express-session'; */
/* import './resume/config/passportStrategies'; */

const PORT = process.env.PORT || 3000;

/* connectDB(); */

const app = express();

app.use(cors())
    .use(json())
  /*   .use(
        session({
            // secret: process.env.SESSION_SECRET as string,
            resave: false,
            saveUninitialized: false,
        })
    ) */
    .use(passport.initialize())
    .use(passport.session());


//ERROR HANDLERS

    app.use(badRequestHandler)
    app.use(unauthorizedHandler)
    app.use(forbiddenHandler)
    app.use(notFoundHandler)
    app.use(genericErrorHandler)

app.listen(PORT, () => {
    // eslint-disable-next-line no-undef, no-console
    console.log(`Server is running on port ${PORT}`);
});
