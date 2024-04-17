let collection = require('../models/cat');
console.log('collection', collection);

const postCat = async (req,res) => {
    let cat =req.body;
    collection.postCat(cat,(err, result) => {
        if (err){
            return res.json({statusCode:400, data: null, message: 'error'})
        }
        res.json({ statusCode: 200, message: "Card data saved successfully" });
    });

}

const getAllCats = (req, res) => {
    collection.getAllCats((err, result) =>{
        console.log('result', result);
        if (err){
            return res.json({statusCode:400, data: null, message: 'Error'})
        }
        res.json({ statusCode: 200, data: result, message: 'get all cards success' });
    });

}

module.exports = {postCat, getAllCats}