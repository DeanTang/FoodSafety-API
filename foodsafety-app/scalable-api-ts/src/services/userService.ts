import { Request, Response } from 'express';

interface User {
    id: number;
    name: string;
    email: string;
}

export const getAllUsers = (): User[] => {
    return [
        {id: 1, name:'Wallace', email:'111'},
        {id: 2, name:'Emma', email:'111'}

    ];
}