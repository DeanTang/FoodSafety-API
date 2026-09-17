import { Router } from 'express';
import { getFood, getFoodByID } from '../controllers/foodController';

const router = Router();

router.get('/food', getFood);
router.get('/food/:id', getFoodByID);

export default router;