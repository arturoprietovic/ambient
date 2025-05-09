import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import flightRoutes from './routes/flightRoutes';
import passengerRoutes from './routes/passengerRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));


app.use('/api/flights/:flightId/passengers', passengerRoutes);
app.use('/api/flights', flightRoutes);

mongoose.connect(process.env.MONGO_URI || '')
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error('DB connection error:', err);
    });
