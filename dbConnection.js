const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mani28au:Password28%40@clustersit725-task4.dbkylur.mongodb.net/CatManager"; //updated this line
// Create a MongoClient with a MongoClientOptions object to set the Stable Api version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();
console.log('connected');
module.exports = client;