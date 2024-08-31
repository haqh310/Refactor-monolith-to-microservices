import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': "mydatabase",
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
  'dialectOptions': {
    ssl: {
    require: true,
    rejectUnauthorized: false,
  },
}
});