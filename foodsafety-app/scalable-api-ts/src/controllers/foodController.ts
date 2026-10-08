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

export const postFood = ((req: Request, res: Response) => {

  if (!req.body) {
    console.log('Body not found');
  }
  else
  {
    // TODO: Validate input for robust error handling
    const food: food = {
      id: foods.length + 1,
      name: String(req.body.name),
      fridgeLifeDays: req.body.fridgeLifeDays,
      shelfLifeDays: req.body.shelfLifeDays
    };

    foods.push(food);
    res.status(201).json(food);
  }
});