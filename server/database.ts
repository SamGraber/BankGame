import * as mongo from 'mongodb';
import * as monk from 'monk';
const database = monk('localhost:27017/bankgame');

export { database };