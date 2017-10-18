const Router = require('express');
const router = Router();
const Fruit = require('../models/fruit');

router 

    .get('/', (req, res) => {
        Fruit.find()
            .then(fruits => res.json(fruits));
    })

    .get('/:id', (req, res) => {
        Fruit.findById(req.params.id)
            .then(fruit => {
                if(!fruit) {
                    res.statusCode = 404;
                    res.send(`id ${req.params.id} does not exist`);
                }
                else res.json(fruit);
            });
    })

    .post('/', (req, res) => {
        new Fruit(req.body).save()
            .then(fruit => res.json(fruit))
            .catch(err => {
                res.statusCode = 400;
                res.json({
                    errors: err.errors
                });
            });
    })

    .delete('/:id', (req, res) => {
        Fruit.findByIdAndRemove(req.params.id)
            .then(result => {
                const exists = result != null;
                res.json({ removed: exists });
            });
    });

module.exports = router;