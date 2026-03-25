import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/routes/router';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { connectDB } from './src/config/db';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

startServer();