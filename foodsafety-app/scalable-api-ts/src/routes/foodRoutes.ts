import { Router } from 'express';
import { getFood, getFoodByID, postFood } from '../controllers/foodController';

const router = Router();

router.get('/food', getFood);
router.get('/food/:id', getFoodByID);
router.post('/food/', postFood);

export default router;