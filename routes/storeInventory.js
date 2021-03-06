var router =require('express').Router();
const db = require('../models/index').sequelize;
const Products = db.model('store_inventory');

router.get('/', (req,res) => {
    const limit = req.query
    Products.findAll(limit).then(
        success = (products) => {
            res.json(products)
        },
        error = (err) => {
            res.send(500, err.message)
        }
    )
})

module.exports = router;