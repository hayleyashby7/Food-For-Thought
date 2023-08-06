import app from './app';
import { config } from 'dotenv';
import sequelize from './database/database';
import { syncDatabase } from './database/databaseHelper';
import https from 'https';
import { key, cert } from './helpers/ssl_helper';

// Load environment variables
config({ path: './config/config.env' });

// Set server port
const serverPort = process.env.PORT || 3000;

// Connect to database
const connect = async () => {
	console.log('Connecting to database...');
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
connect().then(async () => await syncDatabase());

// Setup https server
const server = https.createServer({ key, cert }, app);

// Listen for requests
server.listen(serverPort, () => {
	console.log(`Started server on port ${serverPort}`);
});
