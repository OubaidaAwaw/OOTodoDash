  // import mongo client form mongodb
const { MongoClient } = require('mongodb');

let client = new MongoClient(process.env.MONGO_DB_URI, { maxPoolSize: 10 });
let database;

const initializeDatabase = async () => {
  try {
      // connect Client with DB
    await client.connect();
    database = client.db('TodoList');
      // check about client
    if (!client.topology?.isConnected()) {
      throw new Error('Failed to connect to the database');
    }
    console.log('✅ Successfully connected to DataBase'); // for dev
  } catch (err) {
    console.error('❌ Failed to connect to the database:', err);
      // end async process because conncetion error
    process.exit(1);
  }
}
const getDatabase = () => {
  if (!database) {
    throw new Error('Database not initialized. Call initializeDatabase first.');
  }
  return database;
}

  // pass client variable
const getClient = () => {
  if (!client) {
    throw new Error('Database client is not initialized. Call initializeDatabase first.');
  }
  return client;
}

module.exports = { initializeDatabase, getClient, getDatabase };