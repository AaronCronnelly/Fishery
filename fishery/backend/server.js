const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(cors());
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//This is conecting to the database
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb+srv://JohnDoe:JohnDoe@cluster0.g3xygxt.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

const fishSchema = new mongoose.Schema({
    name: String,
    location: String,
    lake: String,
    weight: String,
    size: String
})

const fishModel = mongoose.model('fishmodel', fishSchema);
//This is for create 
app.post('/api/fish', (req, res) => {
    console.log(req.body);

    fishModel.create({
        name: req.body.name,
        location: req.body.location,
        lake: req.body.lake,
        weight: req.body.weight,
        size: req.body.size
    })
        .then(() => { res.send("Fish info created sucesfully") })
        .catch(() => { res.send("Fail to create fish info") })
})

app.get('/', (req, res) => {
    res.send('hello world')
})

//This is for read
app.get('/api/fish', async(req,res)=>{
    let fishes=await fishModel.find({});
    res.json(fishes);
})

app.get('/api/fish/:identifier', async(req,res)=>{
    console.log(req.params.identifier);
    let fish=await fishModel.findById(req.params.identifier);
    res.send(fish);
})