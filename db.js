var mongoose = require( 'mongoose' );
const Todo = require('./models/Todo');
 
mongoose.model( 'Todo', Todo);
mongoose.connect( 'mongodb://localhost/test');