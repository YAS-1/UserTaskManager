import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import authRoutes from './routes/user.routes.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",authRoutes); // API for the authentication page

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    connectDB();
    console.log(`App running on port ${PORT}`)
});
