var mongoose = require( 'mongoose' )

const itemSchema = { name: String, price: Number }

const Items = mongoose.model( 'User', itemSchema );

module.exports = Items