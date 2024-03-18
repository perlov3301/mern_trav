import express from 'express';
import dotenv from 'dotenv';
// config() loads .env file contents into process.env
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import db from './config/db.js';
const port = process.env.PORT || 5000; 
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

connectDB();
const app = express(); //initialzing express
app.use('/api/users', userRoutes); // for testing out use Postman
// app.use('/',(req, res)=> res.send('<h1>serverjs,Hello World</h1>'));

app.get('/', (req, res)=>{
    const myres = '<b style="color: navy;" >Server is ready</b>'
    res.send(myres);
}); //route for index.js

app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=>console.log(`serverjs run Server on port ${port}`));
// will be created
// **POST /api/users - Register a user
// **POST /api/users/auth - Authenticate a user and get token
// **POST /api/users/logout - Logout user and clear cookie
// **GET /api/users/profile - Get user's profile from protected file
// **PUT /api/users/profile - Updateprofile