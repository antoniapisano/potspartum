import { Router } from 'express';
import momController from '../controllers/momControllers';

const router = Router();

router.post('/mom', momController.submitForm);

export default router;
