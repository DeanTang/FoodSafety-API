import { Router, Request, Response } from 'express';
import { food } from '../models/food';

const router = Router();
let foods: food[] = [];

// post
router.post('/', (req: Request, res: Response) => {
    const food: food = {
        id: foods.length + 1,
        name: req.body.name,
        fridgeLifeDays: req.body.fridgeLifeDays,
        shelfLifeDays: req.body.shelfLifeDays
    };

    foods.push(food);
    res.status(201).json(food);
});

//get
router.get('/', (req: Request, res: Response) => {
  res.json(foods);
});

//get one
router.get('/:id', (req: Request, res: Response) => {
  const food = foods.find((t) => t.id === parseInt(req.params.id));

  if (!food) {
    res.status(404).send('Food product not found');
  } else {
    res.json(food);
  }
});

export default router;