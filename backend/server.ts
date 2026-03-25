import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/routes/router';
import { connectDB } from './src/config/db';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();