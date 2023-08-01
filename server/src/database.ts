import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// Load environment variables
config({ path: './config/config.env' });

const sequelize = new Sequelize(process.env.DATABASE_URL as string);

export default sequelize;
