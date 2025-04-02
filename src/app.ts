import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import userRouter from './app/modules/user/user.router';
import productRouter from './app/modules/product/product.router';
import { StatusCodes } from 'http-status-codes';
import orderRouter from './app/modules/order/order.router';
import { globalErrorHandler } from './app/middleeatres/globalErrorHandler';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)
const getAController = (req: Request, res: Response) => {
    res.send('Hello World!')
};

app.get('/', getAController)
app.use(globalErrorHandler)

app.use("*", (req: Request, res: Response) =>{
  res.status(404).json({
    status: false,
    message: "Route not found"
  })
})
export default app;