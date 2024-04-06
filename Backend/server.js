const express = require('express')
const { MongoClient } =require('mongodb');
const app = express();
const URL = 'mongodb://localhost:27017';
const port = 3000;
const client = new MongoClient(URL);
const dbName = 'local';
client.connect();


app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('startup_log');
  const result = await collection.find({}).toArray();
  // res.send('Hello World!');
  res.json(result);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})