import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || process.env.PORT;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server Up on Port ${PORT}`)))
.catch((error) => console.log(error.message));
