import { Router, Request, Response } from 'express';
import { food } from '../models/food';

const router = Router();
let foods: food[] = [];

export default router;