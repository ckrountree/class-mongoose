const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fruitSchema = new Schema( {
    type: String,       
    name: String,
    colors: [String] ,
    numberOnHand: {
        type: Number,
        min: 1
    }
});

module.exports = mongoose.model('Fruit', fruitSchema);