
var express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
var app = express()
const uri = "mongodb+srv://mani28au:Password28%40@clustersit725-task4.dbkylur.mongodb.net/CatManager"; //updated this line
var port = process.env.port || 3000;
let collection;
let Router = require('./routers/router');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', Router);

// Create a MongoClient with a MongoClientOptions object to set the Stable Api version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const router = express.Router();
//GET / Get all projects 
router.get('/', (req,res) => {
    //logic to get all projects
})

//Post / Create a new project
router.post('/', (req,res) =>{
    //Logic to create a new project
});
module.exports = router;

async function runDBConnection() {
        try {
            // Connect the client to the server
            await client.connect();

            // Select the database
            //const database = client.db("ClusterSIT725-task4"); // Replace "your_database_name" with your actual database name

            // Select the collection
            collection = client.db().collection('Cat'); // Replace "your_collection_name" with your actual collection name

            console.log("MongoDB connected and collection selected:", collection);
        } catch (ex) {
            console.error("Error connecting to MongoDB:", ex);
        }
    } 
async function getAllCats(callback) {
        try {
            const client = new MongoClient(uri, {
                // MongoClient options
            });

            // Connect to MongoDB
            await client.connect();

            // Select the database and collection
            const database = client.db();
            const collection = database.collection('Cat');

            // Fetch all documents from the collection
            const cursor = collection.find();
            const result = await cursor.toArray();

            // Close the connection
            await client.close();

            // Pass the result to the callback function
            callback(null, result);
        } catch (error) {
            // Handle errors
            console.error("Error fetching cats:", error);
            callback(error, null);
        }
    }


app.get('/', (req, res) => {
        res.render('index.html');
    });

app.get('/api/cards', (req, res) => {
    getAllCats((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get all cards success' });
        } else {
            res.status(500).json({ statusCode: 500, message: 'Failed to fetch cards' });
        }
    });
});


//*update your server.js

const cardList = [
    {
        title: "Kitten 2",
        image: "images/kitten-2.jpg",
        link: "About Kitten 2",
        desciption: "Demo desciption about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/kitten-3.jpg",
        link: "About Kitten 3",
        desciption: "Demo desciption about kitten 3"
    }
]
app.get('/api/cards', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
})


app.post('/api/cards', async (req, res) => {
    try {
        // Extract data from the request body
        const { title, subTitle, link, description } = req.body;

        // Insert the new card data into the MongoDB collection
        const result = await collection.insertOne({
            title: title,
            subtitle: subTitle,
            link: link,
            description: description
        });

        // If insertion is successful, respond with success message
        if (result.insertedId) {
            res.json({ statusCode: 200, message: "Card data saved successfully" });
        } else {
            res.status(500).json({ statusCode: 500, message: "Failed to save card data" });
        }
    } catch (error) {
        console.error("Error saving card data:", error);
        res.status(500).json({ statusCode: 500, message: "Internal server error" });
    }
});

// logic to save un mongo

var port = process.env.port || 3000;

app.listen(3000, () => {
    console.log('express server started');
    runDBConnection();
}); 
