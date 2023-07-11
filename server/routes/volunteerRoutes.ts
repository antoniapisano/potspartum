import  Express from "express";
import {volunteerRegister} from "../controllers/volunteerController"

const router = Express.Router();


router.get("/volunteer/register", volunteerRegister)

export default router;