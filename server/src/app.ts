import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import { router } from './routes/routes';

// Load environment variables
config({ path: './config/config.env' });

// Initialise express
export const app = express();

// Set CORS
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Developer logging
if (process.env.NODE_ENV === 'development') {
	console.log('Running in development mode');
	app.use(morgan('dev'));
}

// Routes
app.get('/', (req, res) => res.send('Food for thought API'));

app.use('/api', router);

export default app;
