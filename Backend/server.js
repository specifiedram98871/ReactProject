const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const core = require("cors");
const PORT = process.env.PORT || 5000;
const localhost = process.env.HOST || "localhost";
const app = express();
const bodyParser = require("body-parser");

dotenv.config();

const url = process.env.MONGO_DB_URL;
app.use(bodyParser.json());
app.use(core());
// Define Mongoose Schema
const passopSchema = new mongoose.Schema({
  site: String,
  name: String,
  age: Number,
});
// Create Mongoose Model for the "passop" collection
const Passop = mongoose.model("passop", passopSchema); // Third argument specifies the collection name

// Establish MongoDB Connection
async function connectToDatabase() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToDatabase();

// Post api
app.post("/", async (req, res) => {
  try {
    const newDocuments = req.body;
    const data = Passop.insertMany(newDocuments); // Wait for the data insertion
    console.log("Data inserted successfully");
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//get api
app.get("/", async (req, res) => {
  try {
    const data = await Passop.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete api
// Delete api
app.delete("/delete/:_id", async (req, res) => {
  try {
    const password = req.body;
    const id = req.params._id;
    const deletedDocument = await Passop.deleteOne(password);
    if (!deletedDocument.deletedCount) {
      // If the document with the provided id doesn't exist
      return res.status(404).json({ error: "Document not found" ,id});
    }
    console.log("Deleted document:", { deletedDocument }, id);
    res.send({success: true, id: id});
    res.json({ message: "Document deleted successfully",  id });
  } catch (error) {
    console.log(error);
    const id = req.params._id;
    res.status(500).json({ error: "Internal server error" , id: id});
  }
});



// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://${localhost}:${PORT}`);
});
