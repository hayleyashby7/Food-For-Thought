import FoodForThoughtDatabase from './database/database';
import server from './app';
import app from './app';
import { config } from 'dotenv';
import { syncDatabase } from './database/databaseHelper';
import https from 'https';
import { key, cert } from './helpers/ssl_helper';

// Load environment variables
config({ path: './config/config.env' });

// Set server port
const serverPort = process.env.PORT || 3000;

const connect = async () => {
  await FoodForThoughtDatabase.initialize(process.env.DATABASE_URL as string);
};

connect().then(async () => await syncDatabase());

// Setup https server
const server = https.createServer({ key, cert }, app);

server.listen(serverPort, () => {
  console.log(`Started server on port ${serverPort}`);
});
