import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('dbname', 'dbuser', 'dbpassword', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;