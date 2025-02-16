const { string } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    image:({
        type:String
    }),
    product_name: ({
        type: String
    }),
    quantity:({
        type: Number
    }),
    price:({
        type:Number
    })
})

const MyModel = mongoose.model('cart', schema);

module.exports = MyModel;