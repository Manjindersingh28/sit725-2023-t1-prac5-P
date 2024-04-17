let client = require('../dbConnection');

let collection = client.db().collection('Cat');

async function postCat(cat, callback){
    console.log('herer');
    try {
        await collection.insertOne(cat);    
        callback(null, 'success');
    } catch(e) {
        callback(e, null);
    }
}
async function getAllCats(callback){
    const cursor = collection.find();
    callback(null, await cursor.toArray());
}

module.exports = {postCat, getAllCats};