let collection = require('../models/cat');

const postCat = (req,res) => {
    let cat =req.body;
    collection.postCat(cat,(err, result) => {
        if (!err){
            res.json({statusCode:201, data: result, message: 'Success'})
        }
    });
}

const getAllCats = (req, res) => {
    collection.getAllCats((err, result) =>{
        if (!err){
            res.json({statusCode:201, data: result, message: 'get again'})
        }
    })
}

module.exports = {postCat, getAllCats}