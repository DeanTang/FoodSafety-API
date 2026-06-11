import { Request, Response } from 'express';
import { getAllFood } from '../services/foodService';

export const getFood = (req: Request, res: Response) => {
    const food = getAllFood();
    res.json(food);
};