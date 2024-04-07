const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const localhost = process.env.HOST || "localhost";
const app = express();

dotenv.config();

const url = process.env.MONGO_DB_URL;

// Define Mongoose Schema
const passopSchema = new mongoose.Schema({
  name: String,
});

// Create Mongoose Model for the "passop" collection
const Passop = mongoose.model("passop", passopSchema); // Third argument specifies the collection name

// const newData = new Passop({ name: "Ram" });
// newData.save();
// Establish MongoDB Connection
async function connectToDatabase() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToDatabase();

// Define Route Handlers
app.post("/insert", async (req, res) => {
  try {
    const newData = {
      name: "Ram",
    };
    const data = await Passop.create(newData);
    console.log("Data inserted successfully");
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/", async (req, res) => {
  try {
    const data = await Passop.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://${localhost}:${PORT}`);
});
