import Database from './database/database';
import { config } from 'dotenv';
import server from './app';

// Load environment variables
config({ path: './config/config.env' });

// Set server port
const serverPort = process.env.PORT || 3000;

const connect = async () => {
  await Database.initialize(process.env.DATABASE_URL as string);
};

connect();
server.listen(serverPort, () => {
  console.log(`Started server on port ${serverPort}`);
});
