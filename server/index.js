import express, { json } from 'express';
//import { connectDB } from './resume/config/db';
//import cors from 'cors';

// Routes

//PASSPORT
/*import passport from 'passport';
import session from 'express-session';
import './resume/config/passportStrategies';*/

const PORT = process.env.PORT || 3000;

//connectDB();

const app = express();

//app.use(cors())
    app.use(json())
    /*app.use(
            session({
            // secret: process.env.SESSION_SECRET as string,
            resave: false,
            saveUninitialized: false,
        })
    )
    .use(passport.initialize())
    .use(passport.session());*/

    app.use('/api/users', allUserRoutes );
    app.use('/api/bookings', allBookingsRoutes);

app.listen(PORT, () => {
    // eslint-disable-next-line no-undef, no-console
    console.log(`Server is running on port ${PORT}`);
});
