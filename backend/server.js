import express from 'express'
import cors from 'cors'
const app = express()
import mongoose from 'mongoose'
import connectDB from './src/db/db.js'
import dotenv from 'dotenv'
import noteRoutes from './src/routes/noteRoutes.js';
dotenv.config();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://notepad-team-variance.vercel.app",
      "https://notepad-team-git-main-sarwan-kumars-projects-17476828.vercel.app",
      "https://notepad-team-variance-ikqfqckzx-sarwan-kumars-projects-17476828.vercel.app"
    ],
    credentials: true,
  })
);
app.use(express.json())
app.use('/api/notes', noteRoutes);
connectDB();
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});