import { Router } from 'express';
import { getFood } from '../controllers/foodController';

const router = Router();

router.get('/food', getFood);

export default router;