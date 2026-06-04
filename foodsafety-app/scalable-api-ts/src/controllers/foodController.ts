import { Request, Response } from 'express';

interface Food {
    id: number;
    name: string;
    fridgeLifeDays: number;
    shelfLifeDays: number;
}

export const getFood = (req: Request, res: Response) => {
    const foods: Food[] = [
        { id: 1, name: 'Brie', fridgeLifeDays: 14, shelfLifeDays: 21}
    ];

    res.json(foods);
}