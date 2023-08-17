import { Router } from 'express';
import momController from '../controllers/momController';

const router = Router();

router.post('/mom', momController.submitForm);

export default router;
