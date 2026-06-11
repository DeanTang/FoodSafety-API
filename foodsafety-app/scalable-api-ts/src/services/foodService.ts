interface Food {
    id: number;
    name: string;
    fridgeLifeDays: number;
    shelfLifeDays: number;
}

export const getAllFood = (): Food[] => {
    return [
        { id: 1, name: 'Brie', fridgeLifeDays: 21, shelfLifeDays: 14 },
        { id: 2, name: 'Salmon', fridgeLifeDays: 7, shelfLifeDays: 2 } 
    ];
};