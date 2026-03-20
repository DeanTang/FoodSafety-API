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

// get
router.get('/', (req: Request, res: Response) => {
  res.json(foods);
});

// get by id
router.get('/:id', (req: Request, res: Response) => {
  const food = foods.find((f) => f.id === parseInt(req.params.id));

  if (!food) {
    res.status(404).send('Food product not found');
  } else {
    res.json(food);
  }
});

// update
router.put('/:id', (req: Request, res: Response) => {
  const food = foods.find((f) => f.id === parseInt(req.params.id));

  if (!food) {
    res.status(404).send('Food not found');
  } else {
    food.name = req.body.name || food.name;
    food.fridgeLifeDays = req.body.fridgeLifeDays || food.fridgeLifeDays;
    food.shelfLifeDays = req.body.shelfLifeDays || food.shelfLifeDays;

    res.json(food);
  }
});


// delete
router.delete('/:id', (req: Request, res: Response) => {
  const index = foods.findIndex((f) => f.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send('Food not found');
  } else {
    foods.splice(index, 1);
    res.status(204).send();
  }
});

export default router;