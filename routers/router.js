var express = require("express");
let router = express.Router();

let controller = require('../controllers/controller');
router.post('/',(req, res) => {
    console.log('in post cat');
    controller.postCat(req,res);
});
 router.get('/', (req,res) => {
    controller.getAllCats(req,res);
 });
 module.exports = router;