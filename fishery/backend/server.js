// Import necessary dependencies for Express server
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const path = require('path');

// Enable Cross-Origin Resource Sharing (CORS) for the entire app
app.use(cors());

// Middleware to set CORS headers for every incoming request
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Enable CORS for the entire app (repeated, consider removing)
app.use(cors());

// Configure body-parser middleware for handling HTTP request bodies
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to the MongoDB database
const mongoose = require('mongoose');

// Define a function to connect to MongoDB
main().catch(err => console.log(err));

async function main() {
    try {
        // Connect to MongoDB using the provided connection string
        await mongoose.connect('mongodb+srv://JohnDoe:JohnDoe@cluster0.g3xygxt.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Define the fish schema and model for MongoDB
const fishSchema = new mongoose.Schema({
    name: String,
    location: String,
    lake: String,
    weight: String,
    size: String
});

const fishModel = mongoose.model('fishmodel', fishSchema);

// Define API endpoints

// Delete fish by ID
app.delete('/api/fish/:id', async (req, res) => {
    console.log("Delete: " + req.params.id);

    // Find and delete the fish by its ID
    let fish = await fishModel.findByIdAndDelete(req.params.id);
    res.send(fish);
});

// Update fish by ID
app.put('/api/fish/:id', async (req, res) => {
    console.log("Update: " + req.params.id);

    try {
        // Find and update the fish by its ID with the new data
        let fish = await fishModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(fish);
    } catch (error) {
        console.error('Error updating fish:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Create new fish entry
app.post('/api/fish', (req, res) => {
    console.log(req.body);

    // Create a new fish entry using the provided data
    fishModel.create({
        name: req.body.name,
        location: req.body.location,
        lake: req.body.lake,
        weight: req.body.weight,
        size: req.body.size
    })
    .then(() => { res.send("Fish info created successfully"); })
    .catch(() => { res.send("Fail to create fish info"); });
});

// Default route
app.get('/', (req, res) => {
    res.send('hello world');
});

// Retrieve all fish entries
app.get('/api/fish', async (req, res) => {
    // Retrieve all fish entries from the database
    let fishes = await fishModel.find({});
    res.json(fishes);
});

// Retrieve fish by ID
app.get('/api/fish/:identifier', async (req, res) => {
    console.log(req.params.identifier);
    
    // Find and retrieve a specific fish by its ID
    let fish = await fishModel.findById(req.params.identifier);
    res.send(fish);
});
