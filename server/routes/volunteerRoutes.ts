import  Express from "express";
/* import { protect } from "../middleware/authMiddleware"; */
import {volunteerRegister} from "../controllers/volunteerController"

const router = Express.Router();


router.post("/volunteer/register", volunteerRegister)

export default router;