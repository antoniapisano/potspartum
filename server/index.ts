/*import express, { Express, Request, Response } from 'express';
//import { connectDB } from './resume/config/db';
//import cors from 'cors';


// Routes

const allUserRoutes = require("./routes/userRoutes.ts")
const allBookingsRoutes = require("./routes/bookingsRoutes.ts")

//PASSPORT
//import passport from 'passport';
//import session from 'express-session';
//import './resume/config/passportStrategies';


//connectDB();
dotenv.config();


const app: Express = express();

//app.use(cors())
app.use(express.json())
    /*.use(
        session({
            // secret: process.env.SESSION_SECRET as string,
            resave: false,
            saveUninitialized: false,
        })
    )
    .use(passport.initialize())
    .use(passport.session());*/
/*
app.use('/api/users', allUserRoutes );
app.use('/api/bookings', allBookingsRoutes);

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});*/
