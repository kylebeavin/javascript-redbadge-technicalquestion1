var router =require('express').Router();
const db = require('../models/index').sequelize;
const Products = db.model('store_inventory');

router.get('/', (req,res) => {
    const limit = req.query
    Products.findAll(limit).then(
        findAllSuccess = (products) => {
            res.json(products)
        },
        findAllError = (err) => {
            res.send(500, err.message)
        }
    )
})

module.exports = router;