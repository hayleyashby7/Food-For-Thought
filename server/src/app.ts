import https from 'https';
import { key, cert } from './helpers/ssl_helper';
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

// Setup https server
export const server = https.createServer({ key, cert }, app);

// Routes
app.get('/', (req, res) => res.send('Food for thought API'));

app.use('/api', router);

export default app;
