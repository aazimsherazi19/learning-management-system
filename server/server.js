import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkwebhooks } from './controllers/webhooks.js';

// Initialize app
const app = express();
connectDB();

// Middlewares
app.use(cors());

// Middlewares
app.get('/', (req, res)=>{
  res.send("API Working");
})
app.post('/clerk', express.json(), clerkwebhooks);

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Server is running on Port: " + PORT);
});
