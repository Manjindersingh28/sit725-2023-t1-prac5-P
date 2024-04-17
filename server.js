
var express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
var app = express()
const uri = "mongodb+srv://mani28au:Password28%40@clustersit725-task4.dbkylur.mongodb.net/CatManager"; //updated this line
var port = process.env.port || 3000;
let collection;
let Router = require('./routers/router');
// import controller from './controllers/controller';
require('./dbConnection');


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
module.exports = router;


// async function getAllCats(callback) {
//         try {
//             // Select the database and collection
//             const database = client.db();
//             const collection = database.collection('Cat');

//             // Fetch all documents from the collection
//             const cursor = collection.find();
//             const result = await cursor.toArray();

//             // Close the connection
//             await client.close();

//             // Pass the result to the callback function
//             callback(null, result);
//         } catch (error) {
//             // Handle errors
//             console.error("Error fetching cats:", error);
//             callback(error, null);
//         }
//     }


app.get('/', (req, res) => {
        res.render('index.html');
    });

// app.get('/api/cards', (req, res) => {
//     getAllCats((err, result) => {
//         if (!err) {
//             res.json({ statusCode: 200, data: result, message: 'get all cards success' });
//         } else {
//             res.status(500).json({ statusCode: 500, message: 'Failed to fetch cards' });
//         }
//     });
// });

// app.get('/api/cats', controller.getAllCats);


// app.get('/api/cards', (req, res) => {
//     res.json({ statusCode: 200, data: cardList, message: "Success" })
// })


// app.post('/api/cards', async (req, res) => {
//     try {
//         // Extract data from the request body
//         const { title, subTitle, link, description } = req.body;

//         // Insert the new card data into the MongoDB collection
//         const result = await collection.insertOne({
//             title: title,
//             subtitle: subTitle,
//             link: link,
//             description: description
//         });

//         // If insertion is successful, respond with success message
//         if (result.insertedId) {
//             res.json({ statusCode: 200, message: "Card data saved successfully" });
//         } else {
//             res.status(500).json({ statusCode: 500, message: "Failed to save card data" });
//         }
//     } catch (error) {
//         console.error("Error saving card data:", error);
//         res.status(500).json({ statusCode: 500, message: "Internal server error" });
//     }
// });

// logic to save un mongo

var port = process.env.port || 3000;

app.listen(3000, () => {
    console.log('express server started');

}); 
