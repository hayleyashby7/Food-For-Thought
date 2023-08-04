import server from './app';
import { config } from 'dotenv';
import sequelize from './database/database';
import { syncDatabase } from './database/databaseHelper';

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


// Listen for requests
server.listen(serverPort, () => {
	console.log(`Started server on port ${serverPort}`);
});
