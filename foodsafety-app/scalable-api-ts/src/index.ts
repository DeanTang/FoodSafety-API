import express, { Request, Response } from 'express';
import foodRoutes from './routes/foodRoutes';

const app =  express();
const PORT = process.env.PORT || 3000;

app.use('/api', foodRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Food API is up and running!');
});

// Notice backticks instead of ''
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});