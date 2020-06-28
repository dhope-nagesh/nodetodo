var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Todo = new Schema({
    description: {
        type: String,
        required: true
    },
    isDone: {
        type: String,
        required: true
    },
    updated_at: Date
});

module.exports = Todo;