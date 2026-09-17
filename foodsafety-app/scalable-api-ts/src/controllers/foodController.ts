import { Request, Response } from 'express';
import { food } from '../models/food';
import { getAllFood } from '../services/foodService';

let foods: food[] = getAllFood();

export const getFood = (req: Request, res: Response) => {
    res.json(foods);
};

export const getFoodByID = ((req: Request, res: Response) => {
  const food = foods.find((f) => f.id === parseInt(req.params.id));

  if (!food) {
    res.status(404).send('Food product not found');
  } else {
    res.json(food);
  }
});

// TODO: Implement POST (ref foods)